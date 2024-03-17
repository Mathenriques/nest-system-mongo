import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './user-interface';
import { CreateUserDto } from './users-dtos';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}