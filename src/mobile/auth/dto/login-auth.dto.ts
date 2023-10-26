import {
  MinLength,
  MaxLength,
  IsNumber,
  IsString,
  Min,
  Max,
} from 'class-validator';

export class LoginAuthDto {

  @Min(4)
  @Max(10)
  @IsNumber()
  readonly from: number;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  readonly password: string;

}
