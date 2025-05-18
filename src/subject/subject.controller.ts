import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { SubjectService } from './subject.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateSubjectDto } from './Dto/CreateSubjectDto';
import { User } from 'src/auth/decorators/user.decorator';
import { UpdateSubjectDto, UpdateValidation } from './Dto/UpdateSubjectDto';

@UseGuards(AuthGuard)
@Controller('subject')
export class SubjectController {
  constructor(private subjectService: SubjectService) {}

  @Get('/all/:id')
  async getAllUserSubject(@Param('id') id: string) {
    return await this.subjectService.getAllUserSubject(id);
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    return await this.subjectService.getById(id);
  }

  @Post()
  async create(
    @Body() createSubject: CreateSubjectDto,
    @User('id') userId: string,
  ) {
    return await this.subjectService.create(createSubject, userId);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.subjectService.deleteById(id);
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body(UpdateValidation) updateSubjectDto: UpdateSubjectDto,
  ) {
    return await this.subjectService.updateSubject(id, updateSubjectDto);
  }
}
