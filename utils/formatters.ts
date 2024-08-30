import {number_format} from "@/core/utils/php";

export const MOMENT_FOR_FILENAME = "YYYYMMDDHHmmss";

export const MOMENT_DATE_MYSQL = "YYYY-MM-DD HH:mm:ss";

export const formatMoney = (value: string | number) => {
    if(!value) value = 0;
    return `${number_format(typeof value === 'string' ? parseFloat(value) : value, 2, '.', ' ')} руб.`;
}
