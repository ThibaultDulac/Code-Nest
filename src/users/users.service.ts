import { Injectable } from '@nestjs/common';
import { userRepository } from './user.repository';

@Injectable()
export class UsersService {
     constructor(public userRepo: userRepository){
     }
     async findOne(id: string) {
        return await this.userRepo.findOne(id)
    }
    async findAll(){
        return await this.userRepo.findAll()
    }
    async create(content: string ){
        return await this.userRepo.create(content)
    }
}
   