import { Fragment, FunctionComponent, useEffect, useState } from 'react';
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
  const [dateTypeFlip, setDateTypeFlip] = useState<IDateType[]>(
    dateTypeList ?? [],
  );

  const handleFlip = (optionId: string, isFlipped: boolean) => {
    setDateTypeFlip((prev) => {
      return prev.map((item) =>
        item.id === optionId
          ? { ...item, isFlipped, disabled: true }
          : { ...item, disabled: true },
      );
    });
    onFlip(dateType?.id, optionId);
  };

  useEffect(() => {
    setDateTypeFlip(dateTypeList ?? []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateType]);

  return (
    <div className="flex flex-col w-full h-[100vh] items-center justify-center">
      <h1 style={{ fontSize: 36 }}>
        {dateType.question?.split(/\r\n|\n|\r/gm).map((line) => {
          return (
            <Fragment>
              {line}
              <br />
            </Fragment>
          );
        })}
      </h1>

      <div className="flex w-full items-center justify-center">
        {dateTypeFlip?.map(({ id, label, isFlipped, disabled }) => (
          <CardFLip
            key={id}
            id={id}
            label={label}
            isFlipped={isFlipped}
            onFlip={handleFlip}
            disabled={disabled}
            customStyle={{ margin: 20 }}
          />
        ))}
      </div>
    </div>
  );
};

DateCardOptions.displayName = 'DateCardOptions';
export default DateCardOptions;
