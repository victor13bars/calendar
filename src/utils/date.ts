export const formatDate = (date: Date): string => {
    console.log(date)
    const year = date.getFullYear()
    const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    console.log(year)
    console.log(month)
    console.log(day)
    return `${year}.${month}.${day}`
}