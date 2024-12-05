import { Controller, Post, Body } from '@nestjs/common';
import { create } from 'domain';
import { UsersService } from './users.service';
import { createUserDto } from 'src/dto/create.user.dto';

@Controller('users')
export class UsersController {
     constructor(public UsersService: UsersService){}

@Post('signup')
async  create(@Body() Body: createUserDto){
       console.log('login', Body)
   
    }
}
   

