import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, QrCode, Smartphone } from 'lucide-react';

const QRCodeGenerator: React.FC = () => {
  const [androidQR, setAndroidQR] = useState<string>('');
  const [iosQR, setIosQR] = useState<string>('');

  const generateQRCode = async (url: string, platform: 'android' | 'ios') => {
    try {
      // Using a free QR code API service
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
      
      if (platform === 'android') {
        setAndroidQR(qrUrl);
      } else {
        setIosQR(qrUrl);
      }
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  const downloadQRCode = (qrUrl: string, platform: string) => {
    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = `gfit-${platform}-qr.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Generate QR Codes for App Downloads
      </h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Android QR Code */}
        <div className="text-center">
          <h4 className="text-xl font-semibold mb-4 text-green-600 flex items-center justify-center gap-2">
            <Smartphone className="text-green-500" size={24} />
            Android App
          </h4>
          
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter Google Play Store URL"
              defaultValue="https://play.google.com/store/apps/details?id=com.gdinexus.gfit"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => generateQRCode('https://play.google.com/store/apps/details?id=com.gdinexus.gfit', 'android')}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold mb-4 flex items-center justify-center gap-2 mx-auto"
          >
            <QrCode size={20} />
            Generate QR Code
          </motion.button>
          
          {androidQR && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-3"
            >
              <img src={androidQR} alt="Android QR Code" className="mx-auto border-2 border-gray-200 rounded-lg" />
              <button
                onClick={() => downloadQRCode(androidQR, 'android')}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 mx-auto"
              >
                <Download size={16} />
                Download QR Code
              </button>
            </motion.div>
          )}
        </div>

        {/* iOS QR Code */}
        <div className="text-center">
          <h4 className="text-xl font-semibold mb-4 text-blue-600 flex items-center justify-center gap-2">
            <Smartphone className="text-blue-500" size={24} />
            iOS App
          </h4>
          
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter App Store URL"
              defaultValue="https://apps.apple.com/app/gfit/id123456789"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => generateQRCode('https://apps.apple.com/app/gfit/id123456789', 'ios')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold mb-4 flex items-center justify-center gap-2 mx-auto"
          >
            <QrCode size={20} />
            Generate QR Code
          </motion.button>
          
          {iosQR && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-3"
            >
              <img src={iosQR} alt="iOS QR Code" className="mx-auto border-2 border-gray-200 rounded-lg" />
              <button
                onClick={() => downloadQRCode(iosQR, 'ios')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 mx-auto"
              >
                <Download size={16} />
                Download QR Code
              </button>
            </motion.div>
          )}
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h5 className="font-semibold text-gray-700 mb-2">Instructions:</h5>
        <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
          <li>Enter your actual app store URLs above</li>
          <li>Click "Generate QR Code" for each platform</li>
          <li>Download the generated QR codes</li>
          <li>Replace the placeholder QR codes in the AppDownloadSection component</li>
          <li>Update the app store links with your actual URLs</li>
        </ol>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
