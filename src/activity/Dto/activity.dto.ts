import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const ActivitySchema = z.object({
  subjectId: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  percentageConclud: z.number().max(100),
});

export class ActivityCreateDto extends createZodDto(ActivitySchema) {}
