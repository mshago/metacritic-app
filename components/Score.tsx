import { View, Text } from 'react-native';
import { getScoreColor } from '../lib/helpers';

export function Score({
  score,
  maxScore = 100,
  size = 'small',
}: {
  score: number;
  maxScore?: number;
  size?: 'small' | 'medium' | 'large';
}) {
  const className = getScoreColor(score, maxScore);

  const sizeMap = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  const textSizeMap = {
    small: 'text-base',
    medium: 'text-lg',
    large: 'text-3xl',
  };

  return (
    <View
      className={`${sizeMap[size]} justify-center items-center rounded-md ${className}`}
    >
      <Text className={`text-white font-bold text-base ${textSizeMap[size]}`}>
        {score}
      </Text>
    </View>
  );
}
