import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post('/:id')
  create(@Body() createNoteDto: CreateNoteDto, @Param('id') userId: string) {
    return this.noteService.create(createNoteDto, userId);
  }

  @Get('findAll/:id')
  findAll(@Param('id') userId: string) {
    return this.noteService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.noteService.update(id, updateNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noteService.remove(id);
  }
}
