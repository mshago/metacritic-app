import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export function Screen({ children, padding = true }) {
  const paddingClass = padding ? 'px-2' : '';

  return (
    <View className={`flex-1 pt-4 bg-neutral-900 ${paddingClass}`}>
      <StatusBar style="light" />
      {children}
    </View>
  );
}
