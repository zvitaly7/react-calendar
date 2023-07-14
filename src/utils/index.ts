import {Dayjs} from "dayjs";

export const formatDate = (date: Dayjs | null): string => {
    return `${date?.toDate().getFullYear()}.${date?.toDate().getMonth()}.${date?.toDate().getDate()}`
}
