
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Users } from 'lucide-react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const DashboardNav = () => {
  return (
    <div className="w-full mb-8 bg-white rounded-xl shadow-soft p-4">
      <NavigationMenu className="mx-auto max-w-none w-full justify-start">
        <NavigationMenuList className="space-x-2">
          <NavigationMenuItem>
            <Link to="/commands">
              <NavigationMenuLink className={cn(
                "group inline-flex h-10 w-full items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-app-primary focus:bg-gray-100 focus:text-app-primary focus:outline-none"
              )}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                <span>Commandes</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/suppliers">
              <NavigationMenuLink className={cn(
                "group inline-flex h-10 w-full items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-app-primary focus:bg-gray-100 focus:text-app-primary focus:outline-none"
              )}>
                <Users className="mr-2 h-5 w-5" />
                <span>Fournisseurs</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DashboardNav;
