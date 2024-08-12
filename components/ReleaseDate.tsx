import { View, Text } from 'react-native';

export function ReleaseDate({ date }: { date: string }) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <View className="flex-row py-3">
      <Text className="text-white font-semibold text-lg">Released On: </Text>
      <Text className="text-white text-lg">{formattedDate}</Text>
    </View>
  );
}
