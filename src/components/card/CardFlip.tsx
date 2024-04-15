import { FunctionComponent, useState } from 'react';
import { motion } from 'framer-motion';

interface CardFLipProps {
  id: string;
  label: string;
  isFlipped?: boolean;
  onFlip?: (id: string, isFlipped: boolean) => void;
  disabled?: boolean;
}

const CardFLip: FunctionComponent<CardFLipProps> = ({
  id,
  label,
  isFlipped = false,
  onFlip = () => null,
  disabled = false,
}) => {
  // const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = (id: string, isFlipped: boolean) => {
    if (!isAnimating) {
      onFlip(id, !isFlipped);
      // setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };

  return (
    <div
      className={`flip-card h-[540px] w-full max-w-[350px] rounded-md ${!disabled ? 'cursor-pointer' : ''}`}
      {...(!disabled ? { onClick: () => handleFlip(id, isFlipped) } : {})}
    >
      <motion.div
        className="flip-card-inner w-[100%] h-[100%]"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: 'normal' }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div className="flip-card-front w-[100%] h-[100%] bg-card-back bg-cover rounded-lg" />
        <div className="flip-card-back w-[100%] h-[100%] text-gray rounded-lg p-4 border-[1px]">
          <h1 className="text-2xl font-bold/">{label}</h1>
        </div>
      </motion.div>
    </div>
  );
};

export default CardFLip;
