import { format, formatDistanceToNowStrict, isThisYear } from 'date-fns'

export const formatPostDate = (date) => {
  const formatShort = format(new Date(date), 'MMMM d').toUpperCase()

  const formatLong = format(new Date(date), 'MMMM d, yyy').toUpperCase()

  return isThisYear(new Date(date)) ? formatShort : formatLong
}

export const formatDateToNowShort = (date) => {
  return formatDistanceToNowStrict(new Date(date))
    .split(' ')
    .map((s, i) => (i === 1 ? s[0] : s))
    .join('')
}