import { useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, {Marker, Callout, LatLng, MapMarkerProps, MarkerPressEvent} from 'react-native-maps';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Dialog from 'react-native-dialog'

export default function MapScreen() {

  // const [latitude, setLatitude] = useState(-22.893210646979078)
  // const [ longitude, setLongitude] = useState(-47.050620170899485)

  let coord : LatLng = {latitude: 0, longitude : 0};
  const [ coordenadas, setCoordenadas] = useState(coord);
  const [ visible, setVisible] = useState(false);
  const [ nome, setNome] = useState('')

  const [list, setLista] = useState(
  [{nome: "Pão de Açúcar", lat:-22.89651152580656, long:-47.05166240434368 }, 
                {nome: "Padaria Croissant D'or", lat:-22.896417969804343, long:-47.04965490430873},
                {nome: "Shopping Iguatemi", lat:-22.8917626606111, long:-47.02762263024173},
                {nome: "E.E. Carlos Gomes", lat:-22.896804076504957, long:-47.05712614981367},
                {nome: "Outlet Cambuí", lat:-22.897634265788685, long:-47.04818903612985
}]
)

  const pinColor = '#3CB371';

  const addMarcador = (e : LatLng) => {
    setCoordenadas(e)
    setVisible(true)
  };;

  const handleCancel = () => {
    setVisible(false);
  };

  const deletarMarcador = (e : MarkerPressEvent ) => {
    alert(e.nativeEvent.coordinate.longitude)
    let novaLista = [...list as any]
    let posicaoItem = novaLista.findIndex(x =>
                                          x.lat == e.nativeEvent.coordinate.latitude &&
                                          x.long == e.nativeEvent.coordinate.longitude)
    novaLista.splice(posicaoItem, 1)

    setLista(novaLista)
    
  }

  const handleOK = () => {
    let novaLista = [... list as any]
    novaLista.push({
      lat: coordenadas.latitude,
      long: coordenadas.longitude,
      nome: nome
    })
    setLista(novaLista)
    setVisible(false)
  }

  return (
<View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
      latitude: -22.893210646979078, 
      longitude: -47.050620170899485,
      latitudeDelta: 0.003,
      longitudeDelta: 0.003,
    }}
    onPress={ e => addMarcador(e.nativeEvent.coordinate)}>

{list.map((item)=> (
    <Marker key={item.nome} coordinate={{latitude: item.lat, longitude: item.long}}
    onPress={e => deletarMarcador(e)}
    pinColor = {pinColor}>
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
    <View>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Inserir marcador</Dialog.Title>
        <Dialog.Description>
          Informe abaixo o nome deste marcador
        </Dialog.Description>
        <Dialog.Input onChange={(e) => setNome(e.nativeEvent.text)}/>
        <Dialog.Button onPress={() => handleCancel()} label='Cancel'/>
        <Dialog.Button onPress={() => handleOK()} label='Adicionar'/>
      </Dialog.Container>
    </View>
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
