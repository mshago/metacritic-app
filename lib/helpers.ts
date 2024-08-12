export const getScoreColor = (score: number, maxScore = 100) => {
  const percentage = (score / maxScore) * 100;
  if (percentage < 50) {
    return 'bg-red-500';
  } else if (percentage < 75) {
    return 'bg-yellow-500';
  }
  return 'bg-green-500';
};
