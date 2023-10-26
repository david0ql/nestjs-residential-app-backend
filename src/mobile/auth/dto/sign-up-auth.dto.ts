import {
    MinLength,
    MaxLength,
    IsString,
    IsNumber,
    Min,
    Max,
  } from 'class-validator';
  
  export class SignUpAuthDto {
  
    @Min(4)
    @Max(10)
    @IsNumber()
    from: number;
  
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    password: string;

    @IsString()
    @MinLength(6)
    @MaxLength(20)
    passwordConfirm: string;
  
  }
  