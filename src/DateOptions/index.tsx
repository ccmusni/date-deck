import { FunctionComponent, useState } from 'react';
import CardFLip from '../components/card/CardFlip';
import dateOptions from '../constants/date-options';
import { IDateOptionFlip } from 'date-options';

interface DateOptionsProps {}

const DateOptions: FunctionComponent<DateOptionsProps> = () => {
  const dateOptionList = dateOptions.map((obj) => ({
    ...obj,
    isFlipped: false,
  }));
  const [dateOptionFlip, setDateOptionFlip] =
    useState<IDateOptionFlip[]>(dateOptionList);

  const handleFlip = (id: string, isFlipped: boolean) => {
    setDateOptionFlip((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isFlipped } : item)),
    );
  };

  return (
    <div className="flex w-full h-[100vh] items-center justify-center">
      {dateOptionFlip?.map((option) => (
        <CardFLip
          id={option.id}
          label={option?.label}
          isFlipped={option?.isFlipped}
          onFlip={handleFlip}
        />
      ))}
    </div>
  );
};

export default DateOptions;
