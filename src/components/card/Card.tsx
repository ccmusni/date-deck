import {
  Card as MaterialCard,
  CardHeader,
  CardBody,
} from '@material-tailwind/react';

export function Card() {
  return (
    <MaterialCard
      shadow={false}
      className="relative grid h-[540px] w-full max-w-[350px] items-end justify-center overflow-hidden text-center"
      placeholder={''}
      onPointerEnterCapture={() => null}
      onPointerLeaveCapture={() => null}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-card-back bg-cover bg-center"
        placeholder={''}
        onPointerEnterCapture={() => null}
        onPointerLeaveCapture={null}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full" />
      </CardHeader>
      <CardBody
        className="relative"
        placeholder={undefined}
        onPointerEnterCapture={() => null}
        onPointerLeaveCapture={null}
        children={null}
      />
    </MaterialCard>
  );
}
