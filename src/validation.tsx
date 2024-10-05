import { z } from 'zod';

export const schema = z.object({
  objet: z.string().nonempty({ message: "L'objet est requis" }),
  nom: z.string().nonempty({ message: "Le nom est requis" }),
  prenom: z.string().nonempty({ message: "Le prénom est requis" }),
  montant: z.number({ invalid_type_error: 'Le montant doit être un nombre' }).positive(),
  avance: z.number({ invalid_type_error: 'L\'avance doit être un nombre' }).min(0),
  reste: z.number({ invalid_type_error: 'Le reste doit être un nombre' }).min(0),
  email: z.string().email({ message: 'Email invalide' }),
});
