import dayjs from "dayjs";

export function getMonth(date = dayjs()) {
    const month = date.month();
    const year = date.year();
    const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
    let currentMonthCount = 0 - firstDayOfMonth;
    return new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map( () => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        })
    })
};

export function isDaysEqual(dayFromMonth: dayjs.Dayjs, day = dayjs()) {
    return dayFromMonth.format("YYYY-MM-DD") === day.format("YYYY-MM-DD");
}

export function parseStringToDay(day: string) {
    const splitDate = day.split("-");
    const datesToInt = splitDate.map(item => parseInt(item));
    return dayjs(new Date(datesToInt[0], datesToInt[1]-1, datesToInt[2]))
}