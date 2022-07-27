import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import Text from './Text';
import theme from '../theme';

const RepositoryItem = ({ repository }) => {
  const {
    id,
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
    url,
  } = repository;

  const counterKsuffix = (amount) => {
    return amount >= 1000
      ? `${Math.round(amount / 100) / 10}k`
      : String(amount);
  };
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          style={{ width: 80, height: 80, borderRadius: 8 }}
          source={{ uri: ownerAvatarUrl }}
        />
        <View style={styles.avatarTextContainer}>
          <Text fontWeight={'bold'} fontSize={'subheading'}>
            {fullName}
          </Text>

          <Text
            testID="repositoryDescription"
            style={styles.textDescription}
            color="textSecondary"
          >
            {description}
          </Text>

          <View style={styles.languageContainer}>
            <Text color={'textWhite'}>{language}</Text>
          </View>
        </View>
      </View>

      <Text>Forks: {counterKsuffix(forksCount)}</Text>
      <Text>Stars: {stargazersCount}</Text>
      <Text>Rating: {ratingAverage}</Text>
      <Text>Reviws: {reviewCount}</Text>
      <Text>Avatar: {ownerAvatarUrl}</Text>
    </View>
  );
};

export default RepositoryItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 5,
  },
  avatarContainer: {
    flexDirection: 'row',
    flexGrow: 0,
  },
  avatarTextContainer: {
    justifyContent: 'space-between',
    flexGrow: 1,
    flexShrink: 1,
    marginLeft: 15,
  },
  languageContainer: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    padding: 4,
    borderRadius: 2,
  },
  textDescription: {
    flexShrink: 1,
  },
});
