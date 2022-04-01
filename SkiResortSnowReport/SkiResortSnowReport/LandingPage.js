import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Pressable, ImageBackground } from 'react-native';
import skiResorts from "./SkiResorts";

var resorts = [];

const LandingPage = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const skiResortData = require('./SkiResortData.json');

  var skiResortDetails = [];
  var id = 1001;
  var getResortDetails = async (query) => {
    try {
     var title = query.replace('+', ' ');
     title = title.replace(',', ', ');
     skiResortDetails.push([id, title, skiResortData[id].weather[0].totalSnowfall_cm])
     id++;
   } catch (error) {
     console.error(error);
   } finally {
    for (let i = 0; i < skiResortDetails.length; i++)
    {
      editResorts(skiResortDetails[i][0], skiResortDetails[i][1], (skiResortDetails[i][2]/4).toFixed(2))
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
  let skiResort = resorts.find(r => r.id === id);
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
      <ImageBackground source={require('./assets/images/fresh-powder-snow-on-ski-slope-of-sun-ryan-mcvay.jpg')} resizeMode="cover" style={styles.image}>
      <FlatList
        data={resorts.sort((a, b) => a.title.localeCompare(b.title))}
        keyExtractor={(item, index) => index}
        renderItem={({item}) =>(
          <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#055099' : '#6fbbd3',
            },
            styles.item,
          ]}
          onPress={() =>
            navigation.navigate('DetailPage', {id: item.id})
      }>
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
            </Pressable>
          )}
      />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  item: {
    backgroundColor: '#ADD8E6',
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

export default LandingPage;