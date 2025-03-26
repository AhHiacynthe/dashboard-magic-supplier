
import React from 'react';
import CommandList from './CommandList';
import ExpenseAnalysis from './ExpenseAnalysis';

const Overview = () => {
  return (
    <div className="w-full mt-8">
      <h2 className="text-xl font-semibold mb-4 text-app-dark">Vue d'ensemble</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CommandList />
        <ExpenseAnalysis />
      </div>
    </div>
  );
};

export default Overview;
