import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NoteService {
  constructor(private prismaService: PrismaService) {}
  async create(createNoteDto: CreateNoteDto, userId: string) {
    const searchActivityExistent = await this.prismaService.note.findFirst({
      where: {
        title: createNoteDto.title,
      },
    });

    if (searchActivityExistent) {
      throw new BadRequestException('Já existe uma Nota com esse nome ');
    }

    try {
      const newNote = await this.prismaService.note.create({
        data: {
          userId: userId,
          title: createNoteDto.title,
          content: createNoteDto.content,
        },
      });

      return { newNote };
    } catch (e) {
      console.log(e);
    }
  }

  async findAll(userId: string) {
    return this.prismaService.note.findMany({
      where: {
        userId: userId,
      },
    });
  }

  async findOne(id: string) {
    return this.prismaService.note.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, updateNoteDto: UpdateNoteDto) {
    const activityExistent = await this.prismaService.note.findFirst({
      where: {
        id: id,
      },
    });
    if (!activityExistent) {
      throw new NotFoundException('Not found note with this name');
    }

    try {
      const updatedSubject = await this.prismaService.note.update({
        where: {
          id: id,
        },
        data: {
          ...(updateNoteDto.title && { title: updateNoteDto.title }),
          ...(updateNoteDto.content && { content: updateNoteDto.content }),
        },
      });
      return { status: 200, message: { updatedSubject } };
    } catch (e) {
      throw new e();
    }
  }

  async remove(id: string) {
    const activityExistent = await this.prismaService.note.findFirst({
      where: {
        id: id,
      },
    });

    if (!activityExistent) {
      throw new NotFoundException(
        'Nenhuma atividade foi encontrada com esse id',
      );
    }

    try {
      await this.prismaService.note.delete({
        where: {
          id: id,
        },
      });
      return { status: 200, message: 'Delete with sucessfull' };
    } catch (e) {
      throw new e();
    }
  }
}
