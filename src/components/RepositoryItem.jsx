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
        <Image style={styles.avatarImg} source={{ uri: ownerAvatarUrl }} />
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
      <View style={styles.footerItemContainer}>
        <View style={styles.counterContainer}>
          <Text fontWeight={'bold'}>{counterKsuffix(forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.counterContainer}>
          <Text fontWeight={'bold'}>{counterKsuffix(stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.counterContainer}>
          <Text fontWeight={'bold'}>{counterKsuffix(ratingAverage)}</Text>
          <Text>Rating</Text>
        </View>
        <View style={styles.counterContainer}>
          <Text fontWeight={'bold'}>{counterKsuffix(reviewCount)}</Text>
          <Text>Reviews</Text>
        </View>
      </View>
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
  },
  avatarImg: { height: 80, width: 80, borderRadius: 7 },
  avatarTextContainer: {
    justifyContent: 'space-between',
    flexShrink: 1,
    marginLeft: 15,
  },
  languageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    padding: 4,
    borderRadius: 2,
  },
  textDescription: {
    flexShrink: 1,
  },
  counterContainer: { justifyContent: 'center', alignItems: 'center' },
  footerItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});
