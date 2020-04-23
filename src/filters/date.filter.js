export default function dateFilter (value, format = 'date') {
  console.log(value)
  const options = {}

  // Intl.DateTimeFormat https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat

  if (format.includes('date')) {
    options.day = '2-digit'
    options.month = 'long'
    options.year = 'numeric'
  }

  if (format.includes('time')) {
    options.hour = '2-digit'
    options.minute = '2-digit'
    options.second = '2-digit'
  }

  return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
}
