import React, { useState } from 'react';
import { Box, Button} from '@chakra-ui/react';
import { schema } from './validation';
import FormInput from './formInput';


const Formulaire: React.FC = () => {
  const [formData, setFormData] = useState({
    objet: '',
    nom: '',
    prenom: '',
    montant: '',
    avance: '',
    reste: '',
    email: '',
  });
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const result = schema.safeParse({
      ...formData,
      montant: parseFloat(formData.montant),
      avance: parseFloat(formData.avance),
      reste: parseFloat(formData.reste),
    });

    if (!result.success) {
      const fieldErrors: any = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0]] = issue.message;
      });
      setErrors(fieldErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3000/factures', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Données envoyées avec succès');
      } else {
        alert('Erreur lors de l\'envoi des données');
      }
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='bg-red-400   justify-center items-start'>

    <Box as="form" onSubmit={handleSubmit} maxWidth="400px" mx="auto" display="flex" className='bg-gray-400  rounded-sm px-4' flexDirection="column"  justifyContent="center" alignItems="center" maxHeight="605px" mt="4"  >
    <h1 className='text-2xl text-white bg-blue-500 '>Facture avec Validation</h1>
      <FormInput
        label="Objet"
        type="text"
        name="objet"
        value={formData.objet}
        handleChange={handleChange}
        error={errors.objet}
      />
<div className='flex gap-2'>
      <FormInput
        label="Nom"
        type="text"
        name="nom"
        value={formData.nom}
        handleChange={handleChange}
        error={errors.nom}
      />
      <FormInput
        label="Prénom"
        type="text"
        name="prenom"
        value={formData.prenom}
        handleChange={handleChange}
        error={errors.prenom}
      />
      </div>
      <FormInput
        label="Montant"
        type="number"
        name="montant"
        value={formData.montant}
        handleChange={handleChange}
        error={errors.montant}
      />
      <FormInput
        label="Avance"
        type="number"
        name="avance"
        value={formData.avance}
        handleChange={handleChange}
        error={errors.avance}
      />
      <FormInput
        label="Reste"
        type="number"
        name="reste"
        value={formData.reste}
        handleChange={handleChange}
        error={errors.reste}
      />
      <FormInput
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        handleChange={handleChange}
        error={errors.email}
      />
      <Button type="submit" colorScheme="blue" isLoading={isSubmitting}>
        Soumettre
      </Button>
    </Box>
    </div>
  );
};

export default Formulaire;
