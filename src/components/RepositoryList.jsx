import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
];

const ItemSeparator = () => <View style={styles.separator} />;

//Forma 1 crear la funcion de render y la pasas a la prop
// const renderItem = ({ item }) => (
//     <RepositoryItem item={item} />
//   );

const RepositoryList = () => {
  // const [repositories, setRepositories] = useState();
  const { repositories } = useRepositories();

  // const fetchRepositories = async () => {
  //   try {
  //     // Replace the IP address part with your own IP address!
  //     const response = await fetch(
  //       'http://192.168.200.110:5000/api/repositories'
  //     );
  //     const json = await response.json();
  //     console.log(json);
  //     setRepositories(json);
  //   } catch (error) {
  //     console.log({ error });
  //     throw new Error('Error fetching');
  //   }
  // };

  // useEffect(() => {
  //   fetchRepositories();
  // }, []);

  // Get the nodes from the edges array

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      // other props
      renderItem={({ item }) => <RepositoryItem repository={item} />} //llamas directo en la prop al Item importado
    />
  );
};

export default RepositoryList;
