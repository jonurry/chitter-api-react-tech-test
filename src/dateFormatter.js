export default class DateFormatter {
  // formats dates as 'DD-MM-YYYY hh(24):mm' e.g. '23-06-2018 13:21'
  formatDate(date) {
    return `${date.getDate()}-${String(date.getMonth() + 1).padStart(
      2,
      '0'
    )}-${date.getFullYear()} ${String(date.getHours()).padStart(
      2,
      '0'
    )}:${String(date.getMinutes()).padStart(2, '0')}`;
  }
}
