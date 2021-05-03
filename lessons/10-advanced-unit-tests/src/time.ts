export const getUTCDatetime = () => formatDatetime(new Date())

const formatDatetime = (date: Date) => `${formatDate(date)} ${formatTime(date)}`

const formatDate = (date: Date) =>
  `${date.getUTCFullYear()}-${padZero(date.getUTCMonth() + 1)}-${padZero(date.getUTCDate())}`

const formatTime = (date: Date) =>
  `${padZero(date.getUTCHours())}:${padZero(date.getUTCMinutes())}:${padZero(date.getUTCSeconds())}`

const padZero = (value: number) => value < 10 ? "0" + value : value.toString()
