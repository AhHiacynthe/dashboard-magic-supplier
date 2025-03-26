
import React from 'react';
import { ArrowRight, Clock, Package, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  }
];

const CommandList = () => {
  return (
    <div className="bg-white rounded-xl shadow-soft p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-app-dark">Commandes récentes</h3>
        <Link 
          to="/commands" 
          className="text-app-primary text-sm font-medium flex items-center hover:text-blue-600 transition-colors"
        >
          Voir tout
          <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
      
      <div className="space-y-4 stagger-animate">
        {sampleCommands.map((command) => {
          const statusDetails = getStatusDetails(command.status);
          const StatusIcon = statusDetails.icon;
          
          return (
            <div 
              key={command.id}
              className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-soft transition-all duration-300 bg-white animate-slide-up opacity-0"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${statusDetails.color}`}>
                  <StatusIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-app-dark">{command.reference}</p>
                  <p className="text-sm text-app-muted">{command.supplier}</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-medium text-app-dark">{command.amount.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</p>
                <p className="text-sm text-app-muted">{new Date(command.date).toLocaleDateString('fr-FR')}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommandList;
