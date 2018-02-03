import { WorkDayCategory } from './work-day-category';

export class WorkDay {
    
    id: number;
    code: string;
    description: string;
    workDayCategory: WorkDayCategory;
    startTime: Date;
    endTime: Date;

    constructor() {}
        
}