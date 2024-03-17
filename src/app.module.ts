import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';

@Module({
  imports: [UserModule],
})
export class AppModule {}
