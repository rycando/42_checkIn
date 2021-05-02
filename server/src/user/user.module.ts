import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CardModule } from 'src/card/card.module';
import { LogModule } from 'src/log/log.module';
import { LoggerModule } from 'src/logger/logger.module';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([UserRepository]),
    forwardRef(() => CardModule),
    forwardRef(() => LogModule),
    LoggerModule,
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [TypeOrmModule, UserService],
})
export class UserModule {}
