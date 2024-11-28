export interface IWork {
  title: string;
  color: string;
  width?: number;
  events: string[];
}

export interface IPlanItem {
  left: number;
  width: number;
  works: IWork[];
}