import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudyRecordService } from './study-record.service';
import { PostStudyRecordDto } from './Dto/study-record.dto';

@Controller('study-record')
export class StudyRecordController {
  constructor(private studyRecordService: StudyRecordService) {}
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
