// @ts-nocheck

import { CSSProperties, FunctionComponent, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody } from '@material-tailwind/react';

interface CardFLipProps {
  id: string;
  label: string;
  isFlipped?: boolean;
  onFlip?: (id: string, isFlipped: boolean) => void;
  onFlipComplete?: (optionId: string) => void;
  disabled?: boolean;
  customStyle: CSSProperties;
}

const CardFLip: FunctionComponent<CardFLipProps> = ({
  id,
  label,
  isFlipped = false,
  onFlip = () => null,
  onFlipComplete = () => null,
  disabled = false,
  customStyle = {},
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = (id: string, isFlipped: boolean) => {
    if (!isAnimating) {
      onFlip(id, !isFlipped);
      setIsAnimating(true);
      onFlipComplete(id);
    }
  };

  return (
    <Card
      shadow={false}
      placeholder={''}
      className={`flip-card h-[540px] w-[350px] max-w-[350px] rounded-md ${disabled && !isFlipped ? 'opacity-50' : 'cursor-pointer'}`}
      {...(!disabled ? { onClick: () => handleFlip(id, isFlipped) } : {})}
      style={{ ...customStyle }}
    >
      <motion.div
        className="flip-card-inner w-[100%] h-[100%]"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: 'normal' }}
        onAnimationComplete={() => {
          setIsAnimating(false);
        }}
      >
        <CardBody
          className="absolute inset-0 m-0 rounded-none w-[100%] h-[100%] rounded-lg flip-card-back bg-card-back bg-cover"
          children={<></>}
        />
        <CardBody
          style={{ backgroundImage: `url('/images/${id}.png')` }}
          className={`absolute inset-0 m-0 rounded-none w-[100%] h-[100%] rounded-lg flip-card-front bg-cover bg-center bg-opacity-25 p-4 border-[3px] border-red-400 flex justify-center items-center`}
        >
          {true && (
            <div className="bg-clip-content bg-white p-3 border-4 border-pink-300 border-dashed bg-opacity-75 drop-shadow-xl">
              <div className="text-5xl font-extrabold ...">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500 drop-shadow-xl">
                  {label}
                </span>
              </div>
            </div>
          )}
        </CardBody>
      </motion.div>
    </Card>
  );
};

export default CardFLip;
