import { Link } from 'expo-router';
import { ScrollView, Text } from 'react-native';
import { Screen } from '../../components/Screen';

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Text className="text-3xl font-bold text-white">About</Text>
        <Text className="text-white text-base mb-2">
          This is a simple app that shows the best games of the year. It uses
          the RAWG API to fetch the data. The app shows the title, image, score,
          and description of the games.
        </Text>
        <Text className="text-white text-base mb-2">
          Using React Native, with the Expo framework, and Tailwind CSS for
          styling.
        </Text>
        <Text className="text-white font-semibold text-base mb-2">
          This app was created for educational purposes only.
        </Text>
        <Text className="text-white text-base">
          The source code of this app is available in the following GitHub
          repository:
        </Text>
        <Link href="" className="text-blue-400 text-base mb-2">
          Metacritic App Repository
        </Link>
        <Text className="text-white text-base">
          I also used the following tutorial to create this app (React Native)
          (this tutorial is in Spanish):
        </Text>
        <Link
          href="https://www.youtube.com/watch?v=U23lNFm_J70"
          className="text-blue-400 text-base"
        >
          React Native Tutorial
        </Link>
        <Text className="text-white text-base">
          If you have any questions, feel free to contact me at:
        </Text>
        <Link
          href="https://www.linkedin.com/in/miguel-luna-24ba26172/"
          className="text-blue-400 text-base"
        >
          Contact Me
        </Link>
      </ScrollView>
    </Screen>
  );
}
