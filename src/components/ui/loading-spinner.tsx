
import React from 'react';
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'primary' | 'secondary';
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

  const spinnerClasses = cn(
    'animate-spin',
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  // If fullPage, center the spinner in the page
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
