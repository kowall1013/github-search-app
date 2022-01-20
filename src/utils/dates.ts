import { format } from 'date-fns-tz';

const DATA_FORMAT = 'yyyy-MM-dd'

export function formatDate(date: string, timeZone = 'UTC') {
  try {
    return format(new Date(date), DATA_FORMAT)
  } catch (error) {
    return date
  }
}