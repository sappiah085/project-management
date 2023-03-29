export interface InfoProps {
  parent: string;
  name: string;
  _id?: string;
  cookie?: string;
  getValue: (arg: any) => void;
}
