import { Dialog, DialogContent } from './dialog';
import { X } from 'lucide-react';
import { Button } from './button';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export default function Lightbox({ isOpen, onClose, imageSrc, imageAlt }: LightboxProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl p-0 bg-black/95 border-none">
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
        >
          <X className="h-6 w-6" />
        </Button>
        
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto max-h-[90vh] object-contain"
        />
      </DialogContent>
    </Dialog>
  );
}
