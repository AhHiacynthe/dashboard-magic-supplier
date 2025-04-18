import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Overview from '@/components/Dashboard/Overview';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Users, TrendingUp, Activity } from 'lucide-react';
import LoadingSpinnerDemo from '@/components/LoadingSpinnerDemo';

const Index = () => {
  // Sample stats data
  const stats = [
    {
      title: 'Total Commandes',
      value: '187',
      icon: ShoppingCart,
      change: '+12.5%',
      trend: 'up',
      color: 'from-blue-50 to-indigo-50',
      link: '/commands'
    },
    {
      title: 'Fournisseurs',
      value: '32',
      icon: Users,
      change: '+3.2%',
      trend: 'up',
      color: 'from-purple-50 to-pink-50',
      link: '/suppliers'
    },
    {
      title: 'Dépenses Mensuelle',
      value: '12,450 €',
      icon: TrendingUp,
      change: '-2.4%',
      trend: 'down',
      color: 'from-green-50 to-teal-50',
      link: '#'
    },
    {
      title: 'Activité Récente',
      value: '24',
      icon: Activity,
      change: '+18.7%',
      trend: 'up',
      color: 'from-orange-50 to-amber-50',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container px-4 sm:px-6 lg:px-8 mx-auto pt-24 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-app-dark">Tableau de bord</h1>
            <p className="text-app-muted mt-2">Bienvenue sur votre espace de gestion</p>
          </div>
        </div>
        
        {/* Menu de navigation déplacé ici */}
        <div className="w-full mb-8 bg-white rounded-xl shadow-soft p-4">
          <div className="flex flex-wrap gap-4">
            <Link to="/commands" className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-app-primary focus:bg-gray-100 focus:text-app-primary focus:outline-none">
              <ShoppingCart className="mr-2 h-5 w-5" />
              <span>Commandes</span>
            </Link>
            
            <Link to="/suppliers" className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-app-primary focus:bg-gray-100 focus:text-app-primary focus:outline-none">
              <Users className="mr-2 h-5 w-5" />
              <span>Fournisseurs</span>
            </Link>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Link 
                key={index} 
                to={stat.link}
                className="block transition-transform hover:-translate-y-1 duration-300"
              >
                <Card className="border-0 shadow-soft overflow-hidden">
                  <CardContent className={`p-6 bg-gradient-to-br ${stat.color}`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-app-muted text-sm font-medium">{stat.title}</p>
                        <p className="text-app-dark text-2xl font-bold mt-2">{stat.value}</p>
                        <div className={`mt-2 text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                          {stat.change} {stat.trend === 'up' ? '↑' : '↓'}
                        </div>
                      </div>
                      <div className="p-3 rounded-full bg-white/80 backdrop-blur-sm">
                        <Icon className="w-6 h-6 text-app-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
        
        {/* Loading Spinner Demo */}
        <div className="mb-8">
          <LoadingSpinnerDemo />
        </div>
        
        {/* Overview Section - maintenant en bas */}
        <Overview />
      </main>
    </div>
  );
};

export default Index;
