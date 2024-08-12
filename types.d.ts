import 'react-native';

// Extend ViewProps to include className for NativeWind
declare module 'react-native' {
  interface ViewProps {
    className?: string;
  }

  interface TextProps {
    className?: string;
  }

  interface ImageProps {
    className?: string;
  }

  // You can extend other components similarly if needed
}
