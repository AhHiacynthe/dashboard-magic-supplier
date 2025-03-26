
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

interface MonthData {
  month: string;
  expenses: number;
  budget: number;
}

const monthlyData: MonthData[] = [
  { month: 'Jan', expenses: 4500, budget: 5000 },
  { month: 'Fév', expenses: 5200, budget: 5000 },
  { month: 'Mar', expenses: 4800, budget: 5000 },
  { month: 'Avr', expenses: 4900, budget: 5000 },
  { month: 'Mai', expenses: 5700, budget: 6000 },
  { month: 'Juin', expenses: 5400, budget: 6000 },
  { month: 'Juil', expenses: 6200, budget: 6000 },
  { month: 'Août', expenses: 5900, budget: 6000 },
  { month: 'Sep', expenses: 6100, budget: 6500 },
  { month: 'Oct', expenses: 6700, budget: 6500 },
  { month: 'Nov', expenses: 7000, budget: 7000 },
  { month: 'Déc', expenses: 7200, budget: 7000 },
];

// Données pour le graphique en camembert des dépenses par catégorie
const categoryData = [
  { name: 'Équipement', value: 35000 },
  { name: 'Fournitures', value: 25000 },
  { name: 'Services', value: 18000 },
  { name: 'Logiciels', value: 12000 },
  { name: 'Autres', value: 10000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const ExpenseAnalysis = () => {
  const totalExpenses = monthlyData.reduce((sum, item) => sum + item.expenses, 0);
  const averageExpenses = totalExpenses / monthlyData.length;
  
  const formatter = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  
  return (
    <div className="bg-white rounded-xl shadow-soft p-6 animate-fade-in">
      <h3 className="text-lg font-semibold text-app-dark mb-6">Analyse des dépenses mensuelles</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
          <p className="text-sm text-app-muted">Dépenses totales</p>
          <p className="text-2xl font-semibold text-app-dark">{formatter.format(totalExpenses)}</p>
        </div>
        <div className="p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
          <p className="text-sm text-app-muted">Moyenne mensuelle</p>
          <p className="text-2xl font-semibold text-app-dark">{formatter.format(averageExpenses)}</p>
        </div>
      </div>
      
      <div className="h-64 mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
        <h4 className="text-md font-medium text-app-dark mb-2">Évolution mensuelle</h4>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={monthlyData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12, fill: '#86868B' }}
              axisLine={{ stroke: '#E5E5EA' }}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#86868B' }}
              axisLine={{ stroke: '#E5E5EA' }}
              tickLine={false}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip 
              formatter={(value) => formatter.format(Number(value))}
              contentStyle={{ 
                borderRadius: '8px', 
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
                border: 'none' 
              }}
            />
            <Area 
              type="monotone" 
              dataKey="budget" 
              stroke="#8884d8" 
              strokeWidth={2}
              fill="url(#colorBudget)" 
              dot={false}
            />
            <Area 
              type="monotone" 
              dataKey="expenses" 
              stroke="#0066CC" 
              strokeWidth={2}
              fill="url(#colorExpenses)" 
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
            <defs>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0066CC" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#0066CC" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorBudget" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      {/* Nouveau graphique pour les dépenses par catégorie */}
      <div className="h-72 animate-slide-up opacity-0" style={{ animationDelay: '0.5s' }}>
        <h4 className="text-md font-medium text-app-dark mb-2">Dépenses par catégorie</h4>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => formatter.format(Number(value))}
              contentStyle={{ 
                borderRadius: '8px', 
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
                border: 'none' 
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseAnalysis;
