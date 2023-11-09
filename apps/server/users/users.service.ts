import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private usersModel: Model<UserDocument>
  ) {}

  async create(createUserDto: { name: string; email: string }): Promise<User> {
    console.log(createUserDto, 'here');
    const createdUser = new this.usersModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.usersModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.usersModel.findById(id);
  }

  async update(
    id: string,
    updateSiteDto: { name: string; technology: string }
  ): Promise<User> {
    return this.usersModel.findByIdAndUpdate(id, updateSiteDto, {
      new: true,
    });
  }

  async delete(id: string): Promise<User> {
    return this.usersModel.findByIdAndRemove(id);
  }
}
