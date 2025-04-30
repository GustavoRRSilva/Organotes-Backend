import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';

@Module({
  imports: [DatabaseModule],
  controllers: [SubjectController],
  providers: [SubjectService],
})
export class SubjectModule {}
