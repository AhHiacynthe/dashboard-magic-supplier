
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Loader2 } from 'lucide-react';

interface FormValues {
  reference: string;
  supplier: string;
  date: string;
  amount: string;
  description: string;
  status: string;
}

const CommandForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useState<FormValues>({
    reference: '',
    supplier: '',
    date: new Date().toISOString().substring(0, 10),
    amount: '',
    description: '',
    status: 'pending'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      toast.success("La commande a été ajoutée avec succès");
      
      // Reset form after showing success message
      setTimeout(() => {
        setSuccess(false);
        setValues({
          reference: '',
          supplier: '',
          date: new Date().toISOString().substring(0, 10),
          amount: '',
          description: '',
          status: 'pending'
        });
      }, 2000);
    }, 1500);
  };

  return (
    <Card className="shadow-soft border-0 animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl text-app-dark">Ajouter une commande</CardTitle>
        <CardDescription>
          Créez une nouvelle commande en remplissant les informations ci-dessous
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="reference">Référence</Label>
              <Input
                id="reference"
                name="reference"
                placeholder="CMD-23-xxx"
                value={values.reference}
                onChange={handleChange}
                required
                className="focus:ring-app-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="supplier">Fournisseur</Label>
              <Select 
                name="supplier" 
                value={values.supplier} 
                onValueChange={(value) => handleSelectChange('supplier', value)}
              >
                <SelectTrigger className="focus:ring-app-primary">
                  <SelectValue placeholder="Sélectionner un fournisseur" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Tech Supply Inc.">Tech Supply Inc.</SelectItem>
                  <SelectItem value="Office Solutions">Office Solutions</SelectItem>
                  <SelectItem value="Digital Partners">Digital Partners</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={values.date}
                onChange={handleChange}
                required
                className="focus:ring-app-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="amount">Montant</Label>
              <Input
                id="amount"
                name="amount"
                type="number"
                placeholder="0.00"
                min="0"
                step="0.01"
                value={values.amount}
                onChange={handleChange}
                required
                className="focus:ring-app-primary"
              />
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                placeholder="Description de la commande..."
                value={values.description}
                onChange={handleChange}
                className="focus:ring-app-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="status">Statut</Label>
              <Select 
                name="status" 
                value={values.status}
                onValueChange={(value) => handleSelectChange('status', value)}
              >
                <SelectTrigger className="focus:ring-app-primary">
                  <SelectValue placeholder="Sélectionner un statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">En attente</SelectItem>
                  <SelectItem value="processing">En cours</SelectItem>
                  <SelectItem value="completed">Complétée</SelectItem>
                </SelectContent>
              </Select>
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
                  Commande ajoutée
                </>
              ) : (
                'Ajouter la commande'
              )}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default CommandForm;
