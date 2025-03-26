
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Users, 
  Menu, 
  X 
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const routes = [
    {
      name: 'Tableau de Bord',
      path: '/',
      icon: <LayoutDashboard className="w-5 h-5" />
    },
    {
      name: 'Commandes',
      path: '/commands',
      icon: <ShoppingCart className="w-5 h-5" />
    },
    {
      name: 'Fournisseurs',
      path: '/suppliers',
      icon: <Users className="w-5 h-5" />
    }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-app-lightest fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-opacity-80 border-b border-gray-200">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-app-dark font-medium text-xl"
          >
            <span className="text-app-primary">Buy</span>
            <span>Brilliance</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={cn(
                  "flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-300",
                  location.pathname === route.path 
                    ? "text-app-primary bg-blue-50" 
                    : "text-app-muted hover:text-app-primary hover:bg-blue-50"
                )}
              >
                {route.icon}
                <span>{route.name}</span>
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-app-muted hover:text-app-dark hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-app-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === route.path 
                    ? "text-app-primary bg-blue-50" 
                    : "text-app-muted hover:text-app-primary hover:bg-blue-50"
                )}
                onClick={() => setIsOpen(false)}
              >
                {route.icon}
                <span>{route.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
