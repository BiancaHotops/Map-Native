import { useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function MapScreen() {

  const list=[{nome: "Pão de Açúcar", lat:-22.89651152580656, long:-47.05166240434368 }, 
                {nome: "Padaria Croissant D'or", lat:-22.896417969804343, long:-47.04965490430873},
                {nome: "Shopping Iguatemi", lat:-22.8917626606111, long:-47.02762263024173},
                {nome: "E.E. Carlos Gomes", lat:-22.896804076504957, long:-47.05712614981367},
                {nome: "Outlet Cambuí", lat:-22.897634265788685, long:-47.04818903612985}]

  // const [latitude, setLatitude] = useState(-22.893210646979078)
  // const [ longitude, setLongitude] = useState(-47.050620170899485)
  return (
<View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
      latitude: -22.893210646979078, 
      longitude: -47.050620170899485,
      latitudeDelta: 0.003,
      longitudeDelta: 0.003,
    }}>

{list.map((item)=> (
    <Marker key={item.nome} coordinate={{latitude: item.lat, longitude: item.long}}>
      <Callout>
        <Text>{item.nome}</Text>
      </Callout>
      </Marker>
  ))
  }
      {/* <Marker coordinate={{ latitude : latitude , longitude : longitude }}>
      <Callout>
        <Text>Confeitaria Romana</Text>
      </Callout>
      </Marker> */}
    </MapView>
    </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
