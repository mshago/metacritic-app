import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  Pressable,
} from 'react-native';
import { Score } from './Score';
import { Link } from 'expo-router';
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);

export const Card = ({ title, image, description, score, slug }) => {
  return (
    <Link href={`/${slug}`} asChild>
      <StyledPressable className="active:opacity-75">
        <View key={slug} className="mb-14 flex-row">
          <Image
            source={{ uri: image }}
            style={styles.gameImage}
            className="mr-4"
          />
          <View className="flex-shrink">
            <Text className="font-semibold text-lg text-gray-200 text-ellipsis mb-2">
              {title}
            </Text>
            <Score score={score} />
            <Text className="mt-2" numberOfLines={3} style={styles.description}>
              {description}
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
};

export function AnimatedCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      delay: index * 200,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }} className="max-w-max">
      <Card {...game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  gameImage: {
    width: 107,
    height: 147,
    borderRadius: 3,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    color: '#E0E0E0',
    marginBottom: 5,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 5,
  },
  score: {
    color: 'green',
    fontSize: 18,
    fontWeight: '700',
  },
  description: {
    color: '#E0E0E0',
    fontSize: 14,
  },
});
