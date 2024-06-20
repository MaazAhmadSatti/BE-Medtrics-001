import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddPatientDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
      type: String,
      example: 'Tom Hanks',
    })
    name: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
      type: String,
      example: 'Male',
    })
    gender: string;

    @IsNumber()
    @ApiProperty({
      type: Number,
      example: 34,
    })
    age?: number;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
      type: String,
      example: 'brit@yopmail.com',
    })
    email_address: string;

    @IsString()
    @ApiProperty({
      type: String,
      example: '+320101010',
    })
    phone_no?: string;

    @IsString()
    @ApiProperty({
      type: String,
      example: 'promotion, collaborator',
    })
    tags?: string;

    @IsString()
    @ApiProperty({
      type: String,
      example: 'oncology, gynecologist',
    })
    labels?: string;
  }
  