import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: '1001',
    title: 'Sugarbush Resort, VT',
  },
  {
    id: '1002',
    title: 'Stowe, VT',
  },  {
    id: '1003',
    title: 'Keystone, CO',
  },
  {
    id: '1004',
    title: 'Taos Ski Valley, NM',
  },
  {
    id: '1005',
    title: 'Sun Valley, ID',
  },  {
    id: '1006',
    title: 'Palisades Tahoe Ski Resort, CA',
  },
  {
    id: '1007',
    title: 'Big Sky Resort, MT',
  },
  {
    id: '1008',
    title: 'Steamboat, CO',
  },  {
    id: '1009',
    title: 'Deer Valley, UT',
  },
  {
    id: '1010',
    title: 'Beaver Creek, CO',
  },
  {
    id: '1011',
    title: 'Breckenridge Ski Resort, CO',
  },  {
    id: '1012',
    title: 'Jackson Hole Mountain Resort, WY',
  },
  {
    id: '1013',
    title: 'Telluride Ski Resort, CO',
  },
  {
    id: '1014',
    title: 'Park City Mountain Resort, UT',
  },
  {
    id: '1015',
    title: 'Snowbird, UT',
  },
  {
    id: '1016',
    title: 'Aspen/Snowmass, CO',
  },
  {
    id: '1017',
    title: 'Vail Ski Resort, CO',
  },  
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;