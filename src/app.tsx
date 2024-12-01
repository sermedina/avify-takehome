import React from 'react';
import EnergyChart from './components/EnergyChart';

function App ()  {
    return (
    <div className="flex h-screen">
        <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white overflow-y-auto">
        <EnergyChart />
        </main>
    </div>
      )
}
export {
    App
}

