
import React from 'react';
import Navbar from '@/components/Navbar';
import SupplierForm from '@/components/Suppliers/SupplierForm';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  BadgeCheck, 
  Search,
  PlusCircle,
  Filter,
  ArrowUpDown,
  Mail,
  Phone
} from 'lucide-react';

interface Supplier {
  id: string;
  name: string;
  contact: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
}

const sampleSuppliers: Supplier[] = [
  {
    id: '1',
    name: 'Tech Supply Inc.',
    contact: 'John Smith',
    email: 'john@techsupply.com',
    phone: '+33 1 23 45 67 89',
    status: 'active'
  },
  {
    id: '2',
    name: 'Office Solutions',
    contact: 'Emma Johnson',
    email: 'emma@officesolutions.com',
    phone: '+33 1 98 76 54 32',
    status: 'active'
  },
  {
    id: '3',
    name: 'Digital Partners',
    contact: 'Michael Brown',
    email: 'michael@digitalpartners.com',
    phone: '+33 6 12 34 56 78',
    status: 'inactive'
  },
  {
    id: '4',
    name: 'Global Tech',
    contact: 'Sophie Martin',
    email: 'sophie@globaltech.com',
    phone: '+33 7 89 01 23 45',
    status: 'active'
  },
  {
    id: '5',
    name: 'Innovative Supplies',
    contact: 'Thomas Dubois',
    email: 'thomas@innovative.com',
    phone: '+33 6 54 32 10 98',
    status: 'active'
  }
];

const Suppliers = () => {
  const [showForm, setShowForm] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container px-4 sm:px-6 lg:px-8 mx-auto pt-24 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-app-dark">Fournisseurs</h1>
            <p className="text-app-muted mt-2">Gérez votre réseau de fournisseurs</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button 
              onClick={() => setShowForm(!showForm)}
              className={`px-4 py-2 rounded-lg shadow-sm transition-colors ${
                showForm 
                  ? 'bg-gray-100 text-app-dark hover:bg-gray-200' 
                  : 'bg-app-primary text-white hover:bg-blue-700'
              }`}
            >
              {showForm ? (
                <>Fermer le formulaire</>
              ) : (
                <>
                  <PlusCircle className="inline-block w-4 h-4 mr-2" />
                  Nouveau fournisseur
                </>
              )}
            </Button>
          </div>
        </div>
        
        {/* Supplier Form (conditionally rendered) */}
        {showForm && (
          <div className="mb-8 animate-slide-up opacity-0">
            <SupplierForm />
          </div>
        )}
        
        {/* Search and Filters */}
        <Card className="mb-8 border-0 shadow-soft">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-app-muted" size={18} />
                <Input 
                  placeholder="Rechercher un fournisseur..." 
                  className="pl-10 focus:ring-app-primary"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter size={16} />
                  Filtres
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowUpDown size={16} />
                  Trier
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Suppliers Table */}
        <Card className="border-0 shadow-soft overflow-hidden animate-fade-in">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 hover:bg-gray-50">
                  <TableHead className="font-semibold">Nom</TableHead>
                  <TableHead className="font-semibold">Contact</TableHead>
                  <TableHead className="font-semibold">Email</TableHead>
                  <TableHead className="font-semibold">Téléphone</TableHead>
                  <TableHead className="font-semibold">Statut</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleSuppliers.map((supplier) => (
                  <TableRow 
                    key={supplier.id}
                    className="hover:bg-gray-50 group transition-colors cursor-pointer animate-slide-up opacity-0"
                  >
                    <TableCell className="font-medium">{supplier.name}</TableCell>
                    <TableCell>{supplier.contact}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-app-muted" />
                        <a 
                          href={`mailto:${supplier.email}`}
                          className="text-app-primary hover:underline"
                        >
                          {supplier.email}
                        </a>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-app-muted" />
                        <a 
                          href={`tel:${supplier.phone.replace(/\s/g, '')}`}
                          className="hover:underline"
                        >
                          {supplier.phone}
                        </a>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        supplier.status === 'active' 
                          ? 'bg-green-50 text-green-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {supplier.status === 'active' && (
                          <BadgeCheck className="w-3 h-3 mr-1" />
                        )}
                        {supplier.status === 'active' ? 'Actif' : 'Inactif'}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Suppliers;
