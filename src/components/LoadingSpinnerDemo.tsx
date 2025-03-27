
import React, { useState } from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LoadingSpinnerDemo = () => {
  const [loading, setLoading] = useState(false);
  const [fullPageLoading, setFullPageLoading] = useState(false);

  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const simulateFullPageLoading = () => {
    setFullPageLoading(true);
    setTimeout(() => setFullPageLoading(false), 2000);
  };

  return (
    <Card className="shadow-soft border-0">
      <CardHeader>
        <CardTitle>Démo du Spinner de Chargement</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Tailles</h3>
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <LoadingSpinner size="sm" />
                <span className="text-xs">Petit</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <LoadingSpinner size="md" />
                <span className="text-xs">Moyen</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <LoadingSpinner size="lg" />
                <span className="text-xs">Grand</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button onClick={simulateLoading} className="bg-app-primary">
            {loading ? (
              <>
                <LoadingSpinner size="sm" className="mr-2" />
                Chargement...
              </>
            ) : (
              'Tester dans un bouton'
            )}
          </Button>
          
          <Button onClick={simulateFullPageLoading} variant="outline">
            Tester en plein écran
          </Button>
        </div>
        
        {fullPageLoading && <LoadingSpinner fullPage />}
      </CardContent>
    </Card>
  );
};

export default LoadingSpinnerDemo;
