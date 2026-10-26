export default function ({ percentage, previousPercentage }) {
  if (percentage > previousPercentage) {
    return `verbessert gegenüber 2025 (${previousPercentage} %)`;
  }

  if (percentage < previousPercentage) {
    return `verschlechtert gegenüber 2025 (${previousPercentage} %)`;
  }

  return 'unverändert gegenüber 2025';
}
