import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center mb-6">
      <h1 className="text-4xl font-bold text-blue-800 text-center">BEM-VINDO</h1>
      <h2 className="text-lg font-medium text-blue-800 text-center -mt-1">AO MERCADO DE PROFISSÕES</h2>
    </header>
  );
};

export default Header; 