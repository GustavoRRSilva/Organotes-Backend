import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { SubjectController } from './subject/subject.controller';
import { SubjectService } from './subject/subject.service';
import { SubjectModule } from './subject/subject.module';

@Module({
  imports: [AuthModule, SubjectModule],
  controllers: [SubjectController],
  providers: [PrismaService, SubjectService],
})
export class AppModule {}
