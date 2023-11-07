/* File:      Types.ts
 * Author:    Gage Sorrell <gage@sorrell.sh>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 */

export type FMilitaryTimePoint = FTimePointMinute & FMilitaryHour;

export type FMeridiem =
{
    Meridiem: null | "AM" | "PM";
};

export type FStandardTimePoint = FTimePointMinute & FStandardHour;

export type FTimePointMinute = 
{
    Minute: undefined | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59;
};

export type FMilitaryHour = 
{
    Hour: FMilitaryHourNumber;
    Meridiem: undefined;
};

export type FStandardHour = FMeridiem &
{
    Hour: FStandardHourNumber;
};

export type FStandardHourNumber = undefined | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type FMilitaryHourNumber = undefined | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;

export type FTimePoint = FStandardTimePoint | FMilitaryTimePoint;
