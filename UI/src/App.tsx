import React, { useState } from 'react';
import Header from './components/Header';
import CropSelector from './components/CropSelector';
import UploadInterface from './components/UploadInterface';
import ResultCard from './components/ResultCard';
import { predictDisease } from './services/api';
import { useTranslation } from './hooks/useTranslation';

interface DiagnosisResult {
  class: string;
  confidence: string;
}

function App() {
  const { currentLanguage } = useTranslation();
  const [selectedCrop, setSelectedCrop] = useState('potato');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [forceUpdate, setForceUpdate] = useState(0);

  // Force re-render when language changes
  React.useEffect(() => {
    const handleLanguageChange = () => {
      setForceUpdate(prev => prev + 1);
    };
    
    window.addEventListener('languageChanged', handleLanguageChange);
    return () => window.removeEventListener('languageChanged', handleLanguageChange);
  }, []);
  const handleFileSelect = async (file: File) => {
    setIsLoading(true);
    try {
      const diagnosisResult = await predictDisease(file);
      setResult(diagnosisResult);
    } catch (error) {
      // Error is already handled in the API service with fallback
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setIsLoading(false);
  };

  return (
    <div key={`${currentLanguage}-${forceUpdate}`} className="min-h-screen bg-gradient-to-br from-green-25 to-green-50" style={{ background: 'linear-gradient(135deg, #f0f9f0 0%, #fafafa 100%)' }}>
      <Header />
      
      <main className="py-8">
        {!result && !isLoading && (
          <>
            <CropSelector 
              selectedCrop={selectedCrop}
              onCropChange={setSelectedCrop}
            />
            <UploadInterface 
              onFileSelect={handleFileSelect}
              isLoading={isLoading}
            />
          </>
        )}

        {isLoading && (
          <div className="w-full max-w-md mx-auto px-4">
            <UploadInterface 
              onFileSelect={handleFileSelect}
              isLoading={true}
            />
          </div>
        )}

        {result && (
          <ResultCard 
            result={result}
            onReset={handleReset}
          />
        )}
      </main>
    </div>
  );
}

export default App;