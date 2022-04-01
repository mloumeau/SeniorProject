import { SafeAreaView, Text, StyleSheet, StatusBar, View, ImageBackground } from 'react-native';

const DetailPage = ({ route, navigation }) => {
    const { id } = route.params;
    const skiResortData = require('./SkiResortData.json');

    function toTitleCase(str) {
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
      }
      try {
        var bottomMinF = skiResortData[id].weather[0].bottom[0].mintempF
        var bottomMaxF = skiResortData[id].weather[0].bottom[0].maxtempF
        var midMinF = skiResortData[id].weather[0].mid[0].mintempF
        var midMaxF = skiResortData[id].weather[0].mid[0].maxtempF
        var topMinF = skiResortData[id].weather[0].top[0].mintempF
        var topMaxF = skiResortData[id].weather[0].top[0].maxtempF
        var skyCondition = skiResortData[id].weather[0].hourly[skiResortData[id].weather[0].hourly.length-1].top[0].weatherDesc[0].value
        var windSpeedMph = skiResortData[id].weather[0].hourly[skiResortData[id].weather[0].hourly.length-1].top[0].windspeedMiles
        
     } catch (error) {
       console.error(error);
     } finally {
     }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('./assets/images/snow-light-outdoors-sunlight.jpg')} resizeMode="cover" style={styles.image}>
                <View style={styles.item}>
                    <Text style={{textDecorationLine: 'underline'}}>Bottom</Text>
                    <Text>Min: {bottomMinF}°F{"\n"}Max: {bottomMaxF}°F</Text>
                </View>

                <View style={styles.item}>
                    <Text style={{textDecorationLine: 'underline'}}>Mid-Mountain</Text>
                    <Text>Min:{midMinF}°F{"\n"}Max:{midMaxF}°F</Text>
                </View>

                <View style={styles.item}>
                    <Text style={{textDecorationLine: 'underline'}}>Top</Text>
                    <Text>Min: {topMinF}°F{"\n"}Max: {topMaxF}°F</Text>
                </View>
                <Text style={styles.item}>Condition: {toTitleCase(skyCondition)}</Text>
                <Text style={styles.item}>Wind Speed: {windSpeedMph} mph</Text>
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
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 15,
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

  export default DetailPage;