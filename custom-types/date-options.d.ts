declare module 'date-types' {
  interface IDateType {
    id: string;
    label: string;
    question?: string;
    options?: IDateType[];
    isFlipped?: boolean;
    disabled?: boolean;
    answerId?: string | null;
  }
}
