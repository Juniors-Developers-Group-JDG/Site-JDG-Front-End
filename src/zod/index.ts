import { z } from 'zod'

export const opportunityFormPropsSchema = z.object({
  name: z
    .string({ required_error: 'Nome obrigatório' })
    .min(1, 'Nome obrigatório'),
  email: z.string().email('Precisa ser um email válido'),
  telephone: z.string().min(9, 'Número obrigatório'),
  linkedin: z.string().url('Precisa ser um link válido'),
  github: z.string().url('Precisa ser um link válido'),
})
