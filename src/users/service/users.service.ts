import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create({
      email: createUserDto.email,
      password: createUserDto.password,
    });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(email: string): Promise<User> {
    return await this.userModel.findOne({
      where: {
        email,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const beforeUser = await this.userModel.findOne({
      where: {
        id,
      },
    });
    await beforeUser.update({ email: updateUserDto.email });
    return await beforeUser.save();
  }

  async remove(id: string): Promise<void> {
    const deleteUser = this.findOne(id);
    return (await deleteUser).destroy();
  }
}
