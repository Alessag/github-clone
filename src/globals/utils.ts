import moment from 'moment'

export function calculateDaysBetween (dayB = ''): number {
  const a = moment()
  const b = moment(dayB)
  return b.diff(a, 'days')
}

export function calculateDate (date: any): string {
  const calcDate = moment(date).format('DD MMM YYYY')
  return calcDate
}
