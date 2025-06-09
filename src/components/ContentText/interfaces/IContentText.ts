import { ElementType } from 'react-spring';

export default interface IContentText {
  children: string | React.ReactNode;
  className?: string;
  marginAbsent?: boolean;
  tag?: ElementType;
  styleItems?: React.CSSProperties;
}
