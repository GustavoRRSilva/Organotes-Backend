import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const CredentialSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().optional(),
  dayToStudy: z.array(z.string()).optional(),
});

export class CreateSubjectDto extends createZodDto(CredentialSchema) {}
