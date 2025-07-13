import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { motion } from 'framer-motion';

interface CropSelectorProps {
  selectedCrop: string;
  onCropChange: (crop: string) => void;
}

const CropSelector: React.FC<CropSelectorProps> = ({ selectedCrop, onCropChange }) => {
  const { t } = useTranslation();

  return (
    <motion.div 
      className="w-full max-w-md mx-auto px-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <label className="block text-green-700 font-medium mb-3">
        {t('selectCrop')}
      </label>
      <select
        value={selectedCrop}
        onChange={(e) => onCropChange(e.target.value)}
        className="w-full bg-white border border-green-300 rounded-lg px-4 py-3 text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 hover:border-green-400 shadow-sm"
      >
        <option value="potato">{t('cropOptions.potato')}</option>
      </select>
    </motion.div>
  );
};

export default CropSelector;