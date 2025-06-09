import { INationalHolidays } from '../../../interfaces/INationalHolidays';

export interface INationalHolidaysMainBlock {
  selector: boolean;
  onClick: (selector: boolean) => void;
  year?: boolean;
  holidays: INationalHolidays[];
}
