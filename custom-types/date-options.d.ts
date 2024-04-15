declare module 'date-options' {
  interface IItemOption {
    id: string;
    label: string;
  }

  interface IDateOptionFlip {
    id: string;
    label: string;
    options?: IItemOption[];
    isFlipped?: boolean;
  }
}
