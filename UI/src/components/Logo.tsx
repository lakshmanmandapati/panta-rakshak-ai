import React from 'react';
import { Shield, Leaf } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <Shield className="w-8 h-8 text-green-600" />
        <Leaf className="w-4 h-4 text-green-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-green-800 leading-tight">Panta Rakshak</span>
        <span className="text-xs text-green-600 leading-tight">పంట రక్షక్</span>
      </div>
    </div>
  );
};

export default Logo;