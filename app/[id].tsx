import {
  ActivityIndicator,
  Text,
  View,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import { Screen } from '../components/Screen';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Title } from '../components/Title';
import React, { useEffect, useState } from 'react';
import { getGameDetails } from '../lib/metacritic';
import { GameInfo } from '../lib/definitions';
import { getScoreColor } from '../lib/helpers';
import { BulletIcon } from '../components/Icons';
import { ReleaseDate } from '../components/ReleaseDate';
import { Score } from '../components/Score';

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState<GameInfo>(null);

  const scoreColor = getScoreColor(gameInfo?.score);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then((data) => setGameInfo(data));
    }
  }, [id]);

  const handleRefresh = () => {
    getGameDetails(id).then((data) => setGameInfo(data));
  };

  if (gameInfo?.error) {
    return (
      <Screen padding>
        <Title className="mb-5">Detail</Title>
        <Text className="text-white text-base text-center ">
          {'There was an error fetching the data. Please try again later. :('}
        </Text>
        <Button title="Try Again" onPress={handleRefresh} />
      </Screen>
    );
  }

  return (
    <Screen padding={false}>
      <Stack.Screen
        options={{
          headerTitle: gameInfo ? gameInfo.title : 'Detail',
          headerRight: null,
          headerLeft: null,
          headerTitleStyle: { color: 'white' }, // Add this line to set header title color to white
        }}
      />
      {gameInfo === null ? (
        <ActivityIndicator color="white" size="large" />
      ) : (
        <ScrollView>
          <Image source={{ uri: gameInfo.img }} className="w-full h-52" />
          <View
            className={`flex-row py-5 px-3 justify-normal items-center ${scoreColor}`}
          >
            <Text className="font-semibold text-lg text-black">
              {gameInfo.rating}
            </Text>
            <View className="px-2">
              <BulletIcon />
            </View>
            <Text className="font-semibold text-lg text-black">
              {gameInfo.publisher}
            </Text>
          </View>
          <View className="mx-4 pt-4 border-b border-white">
            <Title className="pb-5">{gameInfo.title}</Title>
            <Text className="font-bold text-2xl text-white">
              {gameInfo.platform}
            </Text>
            <ReleaseDate date={gameInfo.releaseDate} />
          </View>
          <View className="px-4 py-5">
            <View className="flex-row justify-between items-center pb-8">
              <View>
                <Text className="text-white font-sans uppercase tracking-widest">
                  Metascore
                </Text>
                <Text className="text-white capitalize text-lg font-bold">
                  {gameInfo.sentiment}
                </Text>
                <Text className="text-white text-lg">
                  Based on x Critic Reviews
                </Text>
              </View>
              <Score score={gameInfo.score} size="large" />
            </View>
            <Text className="font-semibold text-lg text-white mb-2">
              Summary
            </Text>
            <Text className="text-white text-base">{gameInfo.description}</Text>
          </View>
        </ScrollView>
      )}
    </Screen>
  );
}
