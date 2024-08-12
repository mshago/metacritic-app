import { Text } from 'react-native';

export function Title({ children, ...props }) {
  return (
    <Text className="text-3xl font-bold text-white" {...props}>
      {children}
    </Text>
  );
}
