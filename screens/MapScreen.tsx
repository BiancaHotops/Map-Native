import { useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function MapScreen() {
  const [latitude, setLatitude] = useState(-22.893210646979078)
  const [ longitude, setLongitude] = useState(-47.050620170899485)
  return (
<View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
      latitude: -22.893210646979078, 
      longitude: -47.050620170899485,
      latitudeDelta: 0.003,
      longitudeDelta: 0.003,
    }}>
      <Marker coordinate={{ latitude : latitude , longitude : longitude }}>
      <Callout>
        <Text>Confeitaria Romana</Text>
      </Callout>
      </Marker>
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
