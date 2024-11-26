<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
  public function authorize(): bool
  {
    return true;
  }

  public function rules(): array
  {
    return [
      'name' => 'required',
      'surname' => 'required',
      'birthdate' => 'required',
      'email' => 'required|email|unique:users,email',
      'password' => 'required|confirmed|min:6',
    ];
  }

  public function messages(): array
  {
    return [
      'name.required' => 'Введите свое имя.',
      'surname.required' => 'Введите вашу фамилию.',
      'birthdate.required' => 'Укажите дату вашего рождения.',
      'email.required' => 'Требуется электронная почта.',
      'email.email' => 'Пожалуйста, укажите действительный адрес электронной почты.',
      'email.unique' => 'Пользователя с таким адресом электронной почты уже существует.',
      'password.required' => 'Пароль обязателен.',
      'password.confirmed' => 'Подтверждение пароля не совпадает.',
      'password.min' => 'Пароль должен содержать не менее :min символов.',
    ];
  }
}
