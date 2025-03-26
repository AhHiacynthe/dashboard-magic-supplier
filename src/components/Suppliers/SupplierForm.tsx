
import React, { useState } from 'react';
import { toast } from 'sonner';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2 } from 'lucide-react';

interface FormValues {
  name: string;
  contact: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
}

const SupplierForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useState<FormValues>({
    name: '',
    contact: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      toast.success("Le fournisseur a été ajouté avec succès");
      
      // Reset form after showing success message
      setTimeout(() => {
        setSuccess(false);
        setValues({
          name: '',
          contact: '',
          email: '',
          phone: '',
          address: '',
          notes: ''
        });
      }, 2000);
    }, 1500);
  };

  return (
    <Card className="shadow-soft border-0 animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl text-app-dark">Ajouter un fournisseur</CardTitle>
        <CardDescription>
          Créez un nouveau fournisseur en remplissant les informations ci-dessous
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nom de l'entreprise</Label>
              <Input
                id="name"
                name="name"
                placeholder="Nom de l'entreprise"
                value={values.name}
                onChange={handleChange}
                required
                className="focus:ring-app-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="contact">Personne à contacter</Label>
              <Input
                id="contact"
                name="contact"
                placeholder="Nom du contact"
                value={values.contact}
                onChange={handleChange}
                className="focus:ring-app-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="email@example.com"
                value={values.email}
                onChange={handleChange}
                required
                className="focus:ring-app-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="+33 1 23 45 67 89"
                value={values.phone}
                onChange={handleChange}
                className="focus:ring-app-primary"
              />
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address">Adresse</Label>
              <Input
                id="address"
                name="address"
                placeholder="Adresse complète"
                value={values.address}
                onChange={handleChange}
                className="focus:ring-app-primary"
              />
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Informations supplémentaires..."
                value={values.notes}
                onChange={handleChange}
                className="min-h-[100px] focus:ring-app-primary"
              />
            </div>
          </div>
          
          <CardFooter className="px-0 pt-6 flex justify-end">
            <Button 
              type="submit" 
              className="bg-app-primary hover:bg-blue-700 transition-colors"
              disabled={isSubmitting || success}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Traitement...
                </>
              ) : success ? (
                <>
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Fournisseur ajouté
                </>
              ) : (
                'Ajouter le fournisseur'
              )}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default SupplierForm;
