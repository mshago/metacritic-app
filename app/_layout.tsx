import { Stack } from 'expo-router';
import { View } from 'react-native';
import { Logo } from '../components/Logo';
import { COLORS } from '../lib/colors';

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: COLORS.dark },
          headerTitle: '',
          headerStyle: {
            backgroundColor: COLORS.dark,
          },
          headerLeft: () => <Logo />,
        }}
      />
    </View>
  );
}
