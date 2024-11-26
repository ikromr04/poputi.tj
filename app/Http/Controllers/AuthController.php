<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\ResetPasswordLinkRequest;
use App\Mail\ResetPasswordLinkEmail;
use App\Models\User;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
  public function check()
  {
    $user = request()->user('sanctum');

    if (!$user) return response(['message' => 'Вы не авторизованы.'], 401);

    $response = [
      'id' => $user->id,
      'name' => $user->name,
      'email' => $user->login,
    ];

    return response($response, 200);
  }

  public function login(LoginRequest $request)
  {
    $user = User::where('email', $request->email)->first();

    if (!$user) throw ValidationException::withMessages(['login' => ['Пользователь с таким логином не найден.']]);

    if (!Hash::check($request->password, $user->password))
      throw ValidationException::withMessages(['password' => ['Неверный пароль.']]);

    $adaptedUser = [
      'id' => $user->id,
      'name' => $user->name,
      'email' => $user->email,
    ];

    if ($user->avatar) {
      $adaptedUser = array_merge($adaptedUser, ['avatar' => $user->avatar]);
    }

    return response([
      'user' => $adaptedUser,
      'token' => $user->createToken('access_token')->plainTextToken,
    ], 200);
  }

  public function register(RegisterRequest $request)
  {
    $user = User::create([
      'name' => $request->name,
      'surname' => $request->surname,
      'birthdate' => $request->birthdate,
      'email' => $request->email,
      'password' => bcrypt($request->password),
    ]);

    $user = User::where('email', $user->email)->first();

    return response([
      'user' => [
        'id' => $user->id,
        'name' => $user->name,
        'email' => $user->email,
      ],
      'token' => $user->createToken('access_token')->plainTextToken,
    ], 201);
  }

  public function logout()
  {
    $user = request()->user('sanctum');

    if (!$user) return response(['message' => 'Вы не авторизованы.'], 401);

    $user->currentAccessToken()->delete();

    return response(['message' => 'Вы успешно вышли из системы.'], 200);
  }

  public function sendResetLink(ResetPasswordLinkRequest $request)
  {
    $token = Str::random(64);

    DB::table('password_reset_tokens')->updateOrInsert(
      ['email' => $request->email],
      [
        'token' => $token,
        'created_at' => Carbon::now(),
      ],
    );

    try {
      Mail::to($request->email)->send(new ResetPasswordLinkEmail($token));

      return response()->json(['message' => 'Письмо со ссылкой для сброса пароля успешно отправлено!'], 200);
    } catch (\Throwable $th) {
      return response()->json(['message' => 'Не удалось отправить ссылку для сброса.'], 500);
    }
  }

  public function resetPassword(ResetPasswordRequest $request)
  {
    $resetRecord = DB::table('password_reset_tokens')
      ->where('token', $request->token)
      ->first();

    if (!$resetRecord) return response()->json(['message' => 'Сброс не удался. Недействительный или просроченный токен.'], 500);

    if (!Carbon::parse($resetRecord->created_at)->addMinutes(config('auth.passwords.' . config('auth.defaults.passwords') . '.expire'))->isFuture())
      return response()->json(['message' => 'Просроченный токен.'], 400);

    try {
      $user = User::where('email', $resetRecord->email)->first();
      $user->password = bcrypt($request->password);
      $user->save();

      DB::table('password_reset_tokens')
        ->where('token', $request->token)
        ->delete();

      if ($request->mail) {
        Mail::to($user->email)->send(new SendNewCredentialsMail([
          'login' => $user->login,
          'password' => $request->password,
        ]));
      }

      return response()->json(['message' => 'Пароль успешно сброшен.'], 200);
    } catch (\Throwable $th) {
      response()->json(['message' => 'Сброс не удался.'], 400);
    }
  }
}
