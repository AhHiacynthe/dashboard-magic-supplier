
import React, { useState } from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LoadingSpinnerDemo = () => {
  const [loading, setLoading] = useState(false);
  const [fullPageLoading, setFullPageLoading] = useState(false);
  const [circleLoading, setCircleLoading] = useState(false);
  const [fullPageCircleLoading, setFullPageCircleLoading] = useState(false);

  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const simulateFullPageLoading = () => {
    setFullPageLoading(true);
    setTimeout(() => setFullPageLoading(false), 2000);
  };

  const simulateCircleLoading = () => {
    setCircleLoading(true);
    setTimeout(() => setCircleLoading(false), 2000);
  };

  const simulateFullPageCircleLoading = () => {
    setFullPageCircleLoading(true);
    setTimeout(() => setFullPageCircleLoading(false), 2000);
  };

  return (
    <Card className="shadow-soft border-0">
      <CardHeader>
        <CardTitle>Démo du Spinner de Chargement</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Tailles (Icône)</h3>
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
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Variantes (Icône)</h3>
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <LoadingSpinner variant="default" />
                <span className="text-xs">Défaut</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <LoadingSpinner variant="primary" />
                <span className="text-xs">Primaire</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <LoadingSpinner variant="secondary" />
                <span className="text-xs">Secondaire</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Animation de cercle</h3>
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <LoadingSpinner variant="circle" size="sm" />
                <span className="text-xs">Petit</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <LoadingSpinner variant="circle" size="md" />
                <span className="text-xs">Moyen</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <LoadingSpinner variant="circle" size="lg" />
                <span className="text-xs">Grand</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button onClick={simulateLoading} className="bg-app-primary">
            {loading ? (
              <>
                <LoadingSpinner size="sm" variant="default" className="mr-2" />
                Chargement...
              </>
            ) : (
              'Tester dans un bouton'
            )}
          </Button>
          
          <Button onClick={simulateFullPageLoading} variant="outline">
            Tester en plein écran
          </Button>

          <Button onClick={simulateCircleLoading} className="bg-app-primary">
            {circleLoading ? (
              <>
                <LoadingSpinner size="sm" variant="circle" className="mr-2" />
                Chargement cercle...
              </>
            ) : (
              'Tester cercle dans bouton'
            )}
          </Button>
          
          <Button onClick={simulateFullPageCircleLoading} variant="outline">
            Tester cercle en plein écran
          </Button>
        </div>
        
        {fullPageLoading && <LoadingSpinner fullPage />}
        {fullPageCircleLoading && <LoadingSpinner variant="circle" fullPage />}
      </CardContent>
    </Card>
  );
};

export default LoadingSpinnerDemo;
