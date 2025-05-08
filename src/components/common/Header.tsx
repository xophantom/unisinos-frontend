import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center mb-6">
      <h1 className="text-6xl font-bold text-center" style={{ color: '#194db2' }}>BEM-VINDO</h1>
      <h2 className="text-2xl font-medium  text-center -mt-1" style={{ color: '#194db2' }}>AO MERCADO DE PROFISSÕES</h2>
    </header>
  );
};

export default Header; 