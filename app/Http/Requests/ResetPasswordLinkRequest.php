<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ResetPasswordLinkRequest extends FormRequest
{
  public function authorize(): bool
  {
    return true;
  }

  public function rules(): array
  {
    return [
      'email' => 'required|email|exists:users,email',
    ];
  }

  public function messages(): array
  {
    return [
      'email.required' => 'Требуется электронная почта.',
      'email.email' => 'Пожалуйста, укажите действительный адрес электронной почты.',
      'email.exists' => 'Нам не удалось найти пользователя с таким адресом электронной почты.',
    ];
  }
}
