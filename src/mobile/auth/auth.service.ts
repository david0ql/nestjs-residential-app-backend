import { Injectable } from '@nestjs/common';

import { LoginAuthDto } from './dto/login-auth.dto';
import { SignUpAuthDto } from './dto/sign-up-auth.dto';

@Injectable()
export class AuthService {
  login(loginAuthDto: LoginAuthDto) {
    return 'This action adds a new auth';
  }
  signUp(signUpAuthDto: SignUpAuthDto) {
    return 'This action adds a new auth';
  }
}
