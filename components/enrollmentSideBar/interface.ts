export interface SideBarProps {
  handleActive: (arg: number) => void;
  openNav: boolean;
  active: number;
  completed: number[];
  cookie: string;
  handleOpen: () => void;
}
