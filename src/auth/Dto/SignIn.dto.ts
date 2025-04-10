import { IsNotEmpty } from 'class-validator';

export class SignIn {
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
}
