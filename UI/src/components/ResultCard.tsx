import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { motion } from 'framer-motion';

interface DiagnosisResult {
  class: string;
  confidence: string;
}

interface ResultCardProps {
  result: DiagnosisResult;
  onReset: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, onReset }) => {
  const { t } = useTranslation();

  const getStatusColor = (disease: string) => {
    if (disease.toLowerCase().includes('healthy')) return 'text-green-600';
    if (disease.toLowerCase().includes('early')) return 'text-yellow-600';
    if (disease.toLowerCase().includes('late')) return 'text-red-600';
    return 'text-gray-600';
  };

  const getBackgroundColor = (disease: string) => {
    if (disease.toLowerCase().includes('healthy')) return 'bg-green-50 border-green-200';
    if (disease.toLowerCase().includes('early')) return 'bg-yellow-50 border-yellow-200';
    if (disease.toLowerCase().includes('late')) return 'bg-red-50 border-red-200';
    return 'bg-gray-50 border-gray-200';
  };

  const getAdvice = (disease: string) => {
    const diseaseKey = Object.keys(t('diseases')).find(key => 
      key.toLowerCase() === disease.toLowerCase()
    ) || 'Healthy';
    
    return t(`advice.${diseaseKey}`) || [];
  };

  const translatedDisease = t(`diseases.${result.class}`) || result.class;
  const advice = getAdvice(result.class);

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <motion.div 
        className={`bg-white border-2 rounded-2xl p-8 shadow-xl ${getBackgroundColor(result.class)}`}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            className="mb-4"
          >
            {result.class.toLowerCase().includes('healthy') && (
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-6xl"
              >
                🟢
              </motion.div>
            )}
            {result.class.toLowerCase().includes('early') && (
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-6xl"
              >
                🟡
              </motion.div>
            )}
            {result.class.toLowerCase().includes('late') && (
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-6xl"
              >
                🔴
              </motion.div>
            )}
          </motion.div>
          <h2 className={`text-2xl font-bold mb-2 ${getStatusColor(result.class)}`}>
            {translatedDisease}
          </h2>
          <p className="text-gray-600">
            {t('confidence')}: {result.confidence}
          </p>
        </div>

        <motion.div 
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-green-800 mb-3">
            {t('whatToDoNext')}
          </h3>
          <ul className="space-y-2">
            {Array.isArray(advice) && advice.map((item: string, index: number) => (
              <motion.li 
                key={index} 
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
              >
                <span className="text-green-600 text-lg leading-none">•</span>
                <span className="text-green-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <p className="text-sm text-gray-500 italic">
            {t('disclaimer')}
          </p>
        </motion.div>

        <motion.button
          onClick={onReset}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
        >
          {t('checkAnother')}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ResultCard;