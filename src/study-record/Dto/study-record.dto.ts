import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const PostStudyRecordSchema = z.object({
  subjectId: z.string().uuid(),
  dayOfWeek: z.enum(['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']),
  minutesStudied: z.number(),
});

export class PostStudyRecordDto extends createZodDto(PostStudyRecordSchema) {}
