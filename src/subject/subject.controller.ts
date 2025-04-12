import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { SubjectService } from './subject.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateSubjectDto } from './Dto/CreateSubjectDto';
import { User } from 'src/auth/decorators/user.decorator';

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

  @UseGuards(AuthGuard)
  @Post()
  async createNote(
    @Body() createSubject: CreateSubjectDto,
    @User('id') userId: string,
  ) {
    return await this.subjectService.createNote(createSubject, userId);
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  async DeleteNote(@Param('id') id: string) {
    return await this.subjectService.deleteById(id);
  }
}
