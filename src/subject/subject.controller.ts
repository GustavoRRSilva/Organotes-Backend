import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('subject')
export class SubjectController {
  constructor(private subjectService: SubjectService) {}

  @UseGuards(AuthGuard)
  @Get('/all/:id')
  async getAllUserSubject(@Param('id') id: string) {
    return await this.subjectService.getAllUserSubject(id);
  }

  @UseGuards(AuthGuard)
  @Get('/:id')
  async getById(@Param('id') id: string) {
    return await this.subjectService.getById(id);
  }
}
