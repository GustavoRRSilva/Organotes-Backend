import { IsNotEmpty } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  cellphoneNumber: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  receiveNotify: boolean;
}
