import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./users-dtos";
import { UserService } from "./user.service";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  async getAllUsers() {
    return this.userService.findAll();
  }
}