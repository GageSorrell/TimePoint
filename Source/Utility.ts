import { FMeridiem, FMilitaryHour, FMilitaryHourNumber, FMilitaryTimePoint, FStandardHour, FStandardTimePoint, FTimePoint } from "./Types";

export const EmptyMilitaryTimePoint: FMilitaryTimePoint =
{
    Hour: undefined,
    Meridiem: undefined,
    Minute: undefined
};

export const EmptyStandardTimePoint: FStandardTimePoint =
{
    Hour: undefined,
    Meridiem: null,
    Minute: undefined
};

export const IsMilitaryTime = (TimePoint: FTimePoint): TimePoint is FMilitaryTimePoint =>
{
    return TimePoint.Meridiem === undefined;
};

export const IsMilitaryHour = (Hour: FStandardHour | FMilitaryHour): Hour is FMilitaryHour =>
{
    return Hour.Meridiem === undefined;
};

export const IsStandardHour = (Hour: FStandardHour | FMilitaryHour): Hour is FStandardHour =>
{
    return Hour.Meridiem !== undefined;
};

export const IsStandardTime = (TimePoint: FTimePoint): TimePoint is FStandardTimePoint =>
{
    return TimePoint.Meridiem !== undefined;
};

export const ToMilitaryTime = (TimePoint: FTimePoint): FMilitaryTimePoint =>
{
    if (IsMilitaryTime(TimePoint))
    {
        return TimePoint;
    }
    else
    {
        const OutTimePoint: FMilitaryTimePoint = { ...EmptyMilitaryTimePoint };
        OutTimePoint.Minute = TimePoint.Minute;

        if (TimePoint.Hour)
        {
            const IsMidnight: boolean = TimePoint.Hour === 12 && TimePoint.Meridiem === "AM";
            if (IsMidnight)
            {
                OutTimePoint.Hour = 0;
            }
            else
            {
                OutTimePoint.Hour = TimePoint.Hour + (TimePoint.Meridiem === "PM" ? 12 : 0) as FMilitaryHourNumber;
            }
        }

        return OutTimePoint;
    }
};

/**
 * Is an FTimePoint defined for all properties?
 * 
 * @param TimePoint
 * @returns Whether the FTimePoint has no undefined properties.
 */
export const IsTimePointComplete = (TimePoint: FTimePoint): boolean =>
{
    return TimePoint.Hour !== undefined && TimePoint.Minute !== undefined && TimePoint.Meridiem !== undefined;
};

export const HourToMilitary = (Hour: FMilitaryHour | FStandardHour): FMilitaryHour =>
{
    if (IsMilitaryHour(Hour))
    {
        return Hour;
    }
    else
    {
        const OutHour: FMilitaryHour = { Hour: undefined, Meridiem: undefined };
        if (Hour.Hour !== undefined)
        {
            OutHour.Hour = Hour.Hour + (Hour.Meridiem === "PM" ? 12 : 0) as FMilitaryHourNumber;
        }

        return OutHour;
    }
};

export const GetHour = ({ Hour, Meridiem }: FTimePoint): FMilitaryHour | FStandardHour =>
{
    return { ...{ Hour, Meridiem } as FMilitaryHour | FStandardHour};
};

export const HourToStandard = (Hour: FMilitaryHour | FStandardHour): FStandardHour =>
{
    if (Hour.Hour === undefined)
    {
        return { Hour: undefined, Meridiem: null };
    }

    let OutHour: number = Hour.Hour;
    let { Meridiem }: FMeridiem = { Meridiem: "AM" };

    if (Hour.Hour === 0)
    {
        OutHour = 12;
    }
    else if (Hour.Hour > 12)
    {
        OutHour -= 12;
        Meridiem = "PM";
    }

    return { Hour: OutHour, Meridiem } as unknown as FStandardHour;
};

export const ApplyTimePointToDate = (TimePoint: FTimePoint, ReferenceDate: Date): void =>
{
    const Hour: FMilitaryHour = HourToMilitary(GetHour(TimePoint));
    let HourNumber: number;

    if (Hour.Hour)
    {
        HourNumber = Hour.Hour;
        ReferenceDate.setHours(HourNumber);
    }

    if (TimePoint.Minute)
    {
        ReferenceDate.setMinutes(TimePoint.Minute);
    }
};
