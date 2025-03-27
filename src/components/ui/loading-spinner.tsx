
import React from 'react';
import { cn } from "@/lib/utils";

export interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  fullPage?: boolean;
}

const LoadingSpinner = ({
  size = 'md',
  fullPage = false,
  className,
  ...props
}: LoadingSpinnerProps) => {
  // Map size values to actual sizes for circle
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
};

export { LoadingSpinner };
