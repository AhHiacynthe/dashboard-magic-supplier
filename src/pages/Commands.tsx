
import React from 'react';
import Navbar from '@/components/Navbar';
import CommandForm from '@/components/Commands/CommandForm';
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
  ClipboardList, 
  Clock, 
  Package, 
  CheckCircle, 
  Search,
  PlusCircle,
  Filter,
  ArrowUpDown
} from 'lucide-react';

type CommandStatus = 'pending' | 'processing' | 'completed';

interface Command {
  id: string;
  reference: string;
  supplier: string;
  date: string;
  amount: number;
  status: CommandStatus;
}

const getStatusDetails = (status: CommandStatus) => {
  switch (status) {
    case 'pending':
      return { label: 'En attente', icon: Clock, color: 'text-yellow-500 bg-yellow-50' };
    case 'processing':
      return { label: 'En cours', icon: Package, color: 'text-blue-500 bg-blue-50' };
    case 'completed':
      return { label: 'Complétée', icon: CheckCircle, color: 'text-green-500 bg-green-50' };
    default:
      return { label: 'En attente', icon: Clock, color: 'text-yellow-500 bg-yellow-50' };
  }
};

const sampleCommands: Command[] = [
  {
    id: '1',
    reference: 'CMD-23-001',
    supplier: 'Tech Supply Inc.',
    date: '2023-10-15',
    amount: 2450.75,
    status: 'completed'
  },
  {
    id: '2',
    reference: 'CMD-23-002',
    supplier: 'Office Solutions',
    date: '2023-10-20',
    amount: 1275.30,
    status: 'processing'
  },
  {
    id: '3',
    reference: 'CMD-23-003',
    supplier: 'Digital Partners',
    date: '2023-10-25',
    amount: 3680.50,
    status: 'pending'
  },
  {
    id: '4',
    reference: 'CMD-23-004',
    supplier: 'Global Tech',
    date: '2023-11-02',
    amount: 5950.25,
    status: 'pending'
  },
  {
    id: '5',
    reference: 'CMD-23-005',
    supplier: 'Office Solutions',
    date: '2023-11-10',
    amount: 1850.60,
    status: 'processing'
  }
];

const Commands = () => {
  const [showForm, setShowForm] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container px-4 sm:px-6 lg:px-8 mx-auto pt-24 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-app-dark">Commandes</h1>
            <p className="text-app-muted mt-2">Gérez vos commandes et suivez leur statut</p>
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
                  Nouvelle commande
                </>
              )}
            </Button>
          </div>
        </div>
        
        {/* Command Form (conditionally rendered) */}
        {showForm && (
          <div className="mb-8 animate-slide-up opacity-0">
            <CommandForm />
          </div>
        )}
        
        {/* Search and Filters */}
        <Card className="mb-8 border-0 shadow-soft">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-app-muted" size={18} />
                <Input 
                  placeholder="Rechercher une commande..." 
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
        
        {/* Commands Table */}
        <Card className="border-0 shadow-soft overflow-hidden animate-fade-in">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 hover:bg-gray-50">
                  <TableHead className="font-semibold">Référence</TableHead>
                  <TableHead className="font-semibold">Fournisseur</TableHead>
                  <TableHead className="font-semibold">Date</TableHead>
                  <TableHead className="font-semibold text-right">Montant</TableHead>
                  <TableHead className="font-semibold">Statut</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleCommands.map((command) => {
                  const statusDetails = getStatusDetails(command.status);
                  const StatusIcon = statusDetails.icon;
                  
                  return (
                    <TableRow 
                      key={command.id}
                      className="hover:bg-gray-50 group transition-colors cursor-pointer animate-slide-up opacity-0"
                    >
                      <TableCell className="font-medium">{command.reference}</TableCell>
                      <TableCell>{command.supplier}</TableCell>
                      <TableCell>{new Date(command.date).toLocaleDateString('fr-FR')}</TableCell>
                      <TableCell className="text-right">
                        {command.amount.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <div className={`p-1 rounded-full ${statusDetails.color} mr-2`}>
                            <StatusIcon className="w-4 h-4" />
                          </div>
                          <span>{statusDetails.label}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Commands;
