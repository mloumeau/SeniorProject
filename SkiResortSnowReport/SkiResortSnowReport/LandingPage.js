import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';
import skiResorts from "./SkiResorts";

var resorts = [
  // {
  //   id: '1001',
  //   title: 'Sugarbush Resort, VT',
  //   snowFall: "",
  // },
  // {
  //   id: '1002',
  //   title: 'Stowe, VT',
  // },
  // {
  //   id: '1003',
  //   title: 'Keystone, CO',
  // },
  // {
  //   id: '1004',
  //   title: 'Taos Ski Valley, NM',
  // },
  // {
  //   id: '1005',
  //   title: 'Sun Valley, ID',
  // },
  // {
  //   id: '1006',
  //   title: 'Palisades Tahoe Ski Resort, CA',
  // },
  // {
  //   id: '1007',
  //   title: 'Big Sky Resort, MT',
  // },
  // {
  //   id: '1008',
  //   title: 'Steamboat, CO',
  // },
  // {
  //   id: '1009',
  //   title: 'Deer Valley, UT',
  // },
  // {
  //   id: '1010',
  //   title: 'Beaver Creek, CO',
  // },
  // {
  //   id: '1011',
  //   title: 'Breckenridge Ski Resort, CO',
  // },
  // {
  //   id: '1012',
  //   title: 'Jackson Hole Mountain Resort, WY',
  //   snowFall: "",
  // },
  // {
  //   id: '1013',
  //   title: 'Telluride Ski Resort, CO',
  // },
  // {
  //   id: '1014',
  //   title: 'Park City Mountain Resort, UT',
  // },
  // {
  //   id: '1015',
  //   title: 'Snowbird, UT',
  //   snowFall: "",
  // },
  // {
  //   id: '1016',
  //   title: 'Aspen/Snowmass, CO',
  // },
  // {
  //   id: '1017',
  //   title: 'Vail Ski Resort, CO',
  // },
];

const Item = ({title, snowFall}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>{snowFall}</Text>
  </View>
);

const App = () => {


  const renderItem = ({ item }) => (
    <Item title={item.title} snowFall={hourlyArray[0]} />
  );

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  var hourlyArray = [];
  var id = 1001;
  var getResortDetails = async (query) => {
    try {
     const response = await fetch('https://api.worldweatheronline.com/premium/v1/ski.ashx?key=fc1107fe96584732ba6231607222803&q=' + query + '&format=JSON');
     const json = await response.json();
     var adjustedTitle = query.replace('+', ' ');
     var title = adjustedTitle.replace(',', ', ');
     hourlyArray.push([id, title, json.data.weather[0].totalSnowfall_cm])
     id++;
     setData(json.data.weather[0].hourly);
   } catch (error) {
     console.error(error);
   } finally {
    for (let i = 0; i < hourlyArray.length; i++)
    {
      editResorts(hourlyArray[i][0], hourlyArray[i][1], (hourlyArray[i][2]/4).toFixed(2))
    }
     setLoading(false);
   }
 }

 useEffect(() => {
    for(let i = 0; i < skiResorts.length; i++){
        getResortDetails(skiResorts[i]);
	}
 }, []);

 function editResorts(id, title, snowFall) {
  var skiResort = resorts.find(r => r.id === id);
  if (skiResort) {
    skiResort.id = id,
    skiResort.title = title,
    skiResort.snowFall = snowFall
  } else {
    resorts.push({ id, title, snowFall });
  }
}

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={resorts.sort((a, b) => a.title.localeCompare(b.title))}
        keyExtractor={(item, index) => index}
        renderItem={({item}) =>(
            <View style={styles.item}>
              <View style={styles.title}>
              <Text style={{textAlign:'left'}}>
               {item.title} 
              </Text>
              </View>
              <View style={styles.snowFall}>
                <Text style={{textAlign:'right'}}>
                {item.snowFall}
               </Text>
              </View>
            </View>
          )}
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
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  snowFall:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default App;