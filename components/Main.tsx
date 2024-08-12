import { Text, FlatList, Button } from 'react-native';
import { getLatestGames } from '../lib/metacritic';
import { useState, useEffect } from 'react';
import { AnimatedCard } from './Card';
import { Screen } from './Screen';
import { Title } from './Title';

export function Main() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((data) => {
      setGames(data);
    });
  }, []);

  const handleRefresh = () => {
    getLatestGames().then((data) => {
      setGames(data);
    });
  };

  console.log(games);

  if (games?.error) {
    return (
      <Screen padding>
        <Title className="mb-5">Best Games</Title>
        <Text className="text-white text-base text-center ">
          {'There was an error fetching the data. Please try again later. :('}
        </Text>
        <Button title="Try Again" onPress={handleRefresh} />
      </Screen>
    );
  }

  return (
    <Screen padding>
      <Title className="mb-5">Best Games</Title>
      {games.length === 0 ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedCard game={item} index={index} />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Screen>
  );
}
