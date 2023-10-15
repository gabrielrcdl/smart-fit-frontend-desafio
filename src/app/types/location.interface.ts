import { ScheduleInterface } from './schedule.interface';

export interface LocationInterface {
  id: number;
  title: string;
  content: string;
  opened: boolean;
  mask: string;
  towel: string;
  fountain: string;
  locker_room: string;
  schedules: ScheduleInterface[];
}
