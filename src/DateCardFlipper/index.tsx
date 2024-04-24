import { ReactNode, useState } from 'react';
import dateTypes from '../constants/date-types';
import DateCardOptions from './DateCardOptions';
import { IDateType } from 'date-types';
import DateCardAnswers from './DateCardAnswers';

const DateCardFlipper = () => {
  const [dateTypeList, setDateTypeList] = useState(dateTypes);
  const [answerIds, setAnswerIds] = useState<string[]>([]);

  const handleOnFlip = (id: string, answerId: string) => {
    setTimeout(() => {
      setDateTypeList((prev) => {
        return prev.map((dt) => (dt.id === id ? { ...dt, answerId } : dt));
      });
      setAnswerIds((prev) => [...prev, answerId]);
    }, 2000);
  };

  const renderDateTypeOptions = (dt: IDateType | undefined) =>
    dt && <DateCardOptions dateType={dt} onFlip={handleOnFlip} />;

  const renderDateTypeList = (dtl: IDateType[]): ReactNode => {
    if (dtl?.length < 1) return;

    let rendered = false;
    for (var i = 0; i < dtl.length; i++) {
      const iDataTypeList = dtl[i];
      if (!iDataTypeList.answerId && !rendered) {
        rendered = true;
        return renderDateTypeOptions(iDataTypeList);
      } else if (iDataTypeList.options && iDataTypeList.options?.length > 0) {
        const newOptions = iDataTypeList.options.find(
          (item) => item.id === iDataTypeList.answerId,
        );

        if (newOptions) {
          setDateTypeList([newOptions]);
        }

        break;
      }
    }
  };
  return (
    <>
      {answerIds?.length === 3 ? (
        <div style={{ height: '100vh', width: '100%' }}>
          <DateCardAnswers answerIds={answerIds} />
        </div>
      ) : (
        renderDateTypeList(dateTypeList)
      )}
    </>
  );
};

DateCardFlipper.displayName = 'DateCardFlipper';
export default DateCardFlipper;
