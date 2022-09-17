import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Unique } from '../../common';
import { Match } from '../../common/validator/match.validator';
import { User } from './../user';

export class RegisterPayload {
  @ApiProperty({
    required: true,
  })
  @IsEmail()
  @Unique([User])
  email: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @MinLength(5)
  password: string;

  @ApiProperty({ required: true })
  @Match('password')
  passwordConfirmation: string;
}
