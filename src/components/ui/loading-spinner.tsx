
import React from 'react';
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'primary' | 'secondary' | 'circle';
  fullPage?: boolean;
}

const LoadingSpinner = ({
  size = 'md',
  variant = 'default',
  fullPage = false,
  className,
  ...props
}: LoadingSpinnerProps) => {
  // Map size values to actual pixel sizes
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  // Map variant to color classes
  const variantClasses = {
    default: 'text-gray-500',
    primary: 'text-app-primary',
    secondary: 'text-purple-500'
  };

  // Si la variante est "circle", on utilise notre composant personnalisé au lieu de l'icône Loader2
  if (variant === 'circle') {
    const circleSizeClasses = {
      sm: 'w-8 h-8',
      md: 'w-16 h-16',
      lg: 'w-20 h-20'
    };

    // Si fullPage, centrer le spinner sur la page
    if (fullPage) {
      return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
          <div className="flex flex-col items-center gap-2" {...props}>
            <div className={cn("loader-circle-50", circleSizeClasses[size], className)} />
            <p className="text-sm font-medium text-app-muted">Chargement...</p>
          </div>
        </div>
      );
    }

    // Spinner circle normal
    return (
      <div className={cn("flex items-center justify-center", className)} {...props}>
        <div className={cn("loader-circle-50", circleSizeClasses[size])} />
      </div>
    );
  }

  const spinnerClasses = cn(
    'animate-spin',
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  // Si fullPage, centrer le spinner sur la page
  if (fullPage) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
        <div className="flex flex-col items-center gap-2" {...props}>
          <Loader2 className={spinnerClasses} />
          <p className="text-sm font-medium text-app-muted">Chargement...</p>
        </div>
      </div>
    );
  }

  // Regular spinner
  return (
    <div className={cn("flex items-center justify-center", className)} {...props}>
      <Loader2 className={spinnerClasses} />
    </div>
  );
};

export { LoadingSpinner };
