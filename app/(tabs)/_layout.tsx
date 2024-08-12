import { Tabs } from 'expo-router';

import { HomeIcon, InfoIcon } from '../../components/Icons';
import { COLORS } from '../../lib/colors';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.dark,
        },
        tabBarActiveTintColor: COLORS.primary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <InfoIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
