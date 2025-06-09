export interface IIcon {
  data:{
    attributes: {
      url: string;
    }
  }
}
export interface IHolidays {
  icon: IIcon;
  date: string;
  nameHoliday: string;
}
export interface INationalHolidaysAttributes {
  title: string;
  year: number;
  description: string;
  holidays: IHolidays[];
}

export interface INationalHolidays {
  id: number;
  attributes: INationalHolidaysAttributes;
}

export interface INationalHolidaysList {
  data: INationalHolidays[] | undefined;
}
