import isValid from 'date-fns/isValid'

export type timeLeft = {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
} | null

export const calculateTimeLeft = (date: any) => {
    if (!isValid(date)) return null
    const difference = new Date(date).getTime() - new Date().getTime()
    let timeLeft: timeLeft = null

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        }
    }

    return timeLeft
}


//补0
export const addZero = (num: number) => {
    return num < 10 ? '0' + num : num
}