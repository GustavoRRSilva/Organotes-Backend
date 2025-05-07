import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { StudyRecordService } from './study-record.service';
import { PostStudyRecordDto } from './Dto/study-record.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('study-record')
export class StudyRecordController {
  constructor(private studyRecordService: StudyRecordService) {}

  @UseGuards(AuthGuard)
  @Get('/:subjectId')
  async getAllRecords(@Param('subjectId') subjectId: string) {
    return await this.studyRecordService.getAllRecords(subjectId);
  }

  @Post('/:subjectId')
  async postStudyRecord(
    @Body() record: PostStudyRecordDto,
    @Param('subjectId') subjectId: string,
  ) {
    return await this.studyRecordService.PostRecord(record, subjectId);
  }
}
