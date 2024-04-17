import { FunctionComponent, useEffect, useState } from 'react';
import CardFLip from '../components/card/CardFlip';
import { IDateType } from 'date-types';

interface DateOptionsProps {
  dateType: IDateType;
  onFlip: (id: string, optionId: string) => void;
}

const DateCardOptions: FunctionComponent<DateOptionsProps> = ({
  dateType,
  onFlip,
}) => {
  const dateTypeList = dateType?.options?.map((option) => ({
    ...option,
    isFlipped: false,
    disabled: false,
  }));
  const [dateTypeFlip, setdateTypeFlip] = useState<IDateType[]>(
    dateTypeList ?? [],
  );

  const handleFlip = (optionId: string, isFlipped: boolean) => {
    setdateTypeFlip((prev) =>
      prev.map((item) =>
        item.id === optionId
          ? { ...item, isFlipped, disabled: true }
          : { ...item, disabled: true },
      ),
    );
    onFlip(dateType?.id, optionId);
  };

  useEffect(() => {
    setdateTypeFlip(dateTypeList ?? []);
  }, [dateType]);

  return (
    <div className="flex flex-col w-full h-[100vh] items-center justify-center">
      <h1>{dateType.question}</h1>
      <div className="flex w-full items-center justify-center">
        {dateTypeFlip?.map(({ id, label, isFlipped, disabled }) => (
          <CardFLip
            id={id}
            label={label}
            isFlipped={isFlipped}
            onFlip={handleFlip}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
};

DateCardOptions.displayName = 'DateCardOptions';
export default DateCardOptions;
