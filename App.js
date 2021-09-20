import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      {/* Banner */}
      <View>
        <View style={{flexDirection: 'row'}}>
          <Image style={style.banner} source={require('./assets/img/bg.jpg')} />
        </View>

        {/* contenido*/}
        <View style={style.contenedor}>
          {/* seccion1 */}
          <Text style={style.titulo}>Que hacer en Paris?</Text>

          <ScrollView horizontal>
            <View>
              <Image
                style={style.ciudad}
                source={require('./assets/img/actividad1.jpg')}
              />
            </View>

            <View>
              <Image
                style={style.ciudad}
                source={require('./assets/img/actividad2.jpg')}
              />
            </View>

            <View>
              <Image
                style={style.ciudad}
                source={require('./assets/img/actividad3.jpg')}
              />
            </View>

            <View>
              <Image
                style={style.ciudad}
                source={require('./assets/img/actividad4.jpg')}
              />
            </View>

            <View>
              <Image
                style={style.ciudad}
                source={require('./assets/img/actividad5.jpg')}
              />
            </View>
          </ScrollView>

          {/* seccion 2 */}

          <Text style={style.titulo}>Los mejores alojamientos</Text>
          <View>
            <View>
              <Image
                style={style.destinos}
                source={require('./assets/img/mejores1.jpg')}
              />
            </View>

            <View>
              <Image
                style={style.destinos}
                source={require('./assets/img/mejores2.jpg')}
              />
            </View>

            <View>
              <Image
                style={style.destinos}
                source={require('./assets/img/mejores3.jpg')}
              />
            </View>
          </View>

          {/* seccion 3 */}

          <Text style={style.titulo}>Alojamientos en LA</Text>
          <View style={style.listado}>
            <View style={style.listadoItem}>
              <Image
                style={style.destinos}
                source={require('./assets/img/hospedaje1.jpg')}
              />
            </View>

            <View style={style.listadoItem}>
              <Image
                style={style.destinos}
                source={require('./assets/img/hospedaje2.jpg')}
              />
            </View>

            <View style={style.listadoItem}>
              <Image
                style={style.destinos}
                source={require('./assets/img/hospedaje3.jpg')}
              />
            </View>

            <View style={style.listadoItem}>
              <Image
                style={style.destinos}
                source={require('./assets/img/hospedaje4.jpg')}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  destinos: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listado: {
    flexDirection: 'row',
    flexWrap:"wrap",
    justifyContent:"space-between"
  },
  listadoItem: {
    flexBasis: '49%',
  },
});

export default App;
