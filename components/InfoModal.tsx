import React from 'react';
import { X, Loader2 } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  isLoading: boolean;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, title, content, isLoading }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-gray-900 border border-orange-500/30 rounded-2xl shadow-2xl p-8 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
        >
          <X size={20} />
        </button>

        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
          {title}
        </h2>

        <div className="text-gray-200 text-lg leading-relaxed min-h-[100px] flex items-center justify-center">
          {isLoading ? (
            <div className="flex flex-col items-center gap-3 text-orange-400">
              <Loader2 className="animate-spin" size={32} />
              <span className="text-sm font-medium">Asking Gemini...</span>
            </div>
          ) : (
            <p className="animate-in slide-in-from-bottom-2 fade-in duration-500">
              {content}
            </p>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-full text-sm font-semibold transition-colors border border-white/10"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;