import React, { useRef } from 'react';
import { Camera, Upload, Leaf } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { motion } from 'framer-motion';

interface UploadInterfaceProps {
  onFileSelect: (file: File) => void;
  isLoading: boolean;
}

const UploadInterface: React.FC<UploadInterfaceProps> = ({ onFileSelect, isLoading }) => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  const handleCameraClick = () => {
    // Clear any previous file selection
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    fileInputRef.current?.click();
  };

  const handleGalleryClick = () => {
    // Clear any previous file selection
    if (galleryInputRef.current) {
      galleryInputRef.current.value = '';
    }
    galleryInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <motion.div 
        className="bg-white rounded-2xl shadow-lg border border-green-100 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
        <p className="text-green-700 text-lg font-medium mb-8">
          {t('uploadInstructions')}
        </p>
        
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          capture="user"
          onChange={handleFileChange}
          className="hidden"
        />
        
        <input
          ref={galleryInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        
        {isLoading ? (
          <motion.div 
            className="flex flex-col items-center justify-center py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-4"
            >
              <Leaf className="w-12 h-12 text-green-600" />
            </motion.div>
            <p className="text-green-700 font-medium">{t('analyzing')}</p>
            <motion.div 
              className="w-32 h-1 bg-green-100 rounded-full mt-4 overflow-hidden"
            >
              <motion.div
                className="h-full bg-green-500 rounded-full"
                animate={{ x: [-128, 128] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        ) : (
          <div className="space-y-4">
            <motion.button
              onClick={handleCameraClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
            >
              <Camera size={24} />
              📸 Capture Photo
            </motion.button>
            
            <motion.button
              onClick={handleGalleryClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-green-100 hover:bg-green-200 text-green-700 font-medium py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3"
            >
              <Upload size={20} />
              Or upload from gallery
            </motion.button>
          </div>
        )}
      </div>
      </motion.div>
    </div>
  );
};

export default UploadInterface;