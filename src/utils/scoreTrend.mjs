export default function scoreTrend(
  points,
  maxPoints,
  previousPoints,
  previousMaxPoints,
) {
  if (typeof points !== 'number' || typeof maxPoints !== 'number') {
    return null;
  }

  if (
    typeof previousPoints !== 'number' ||
    typeof previousMaxPoints !== 'number'
  ) {
    return null;
  }

  if (!maxPoints || !previousMaxPoints) {
    return null;
  }

  return Math.sign(points * previousMaxPoints - previousPoints * maxPoints);
}
