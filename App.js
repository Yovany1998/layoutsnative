import React from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
} from 'react-native';


const App = () => {

  return (
  <>
    <ScrollView>
        <View style={ {flexDirection: 'row'}}>
          <Image
          style={styles.banner}
          source={ require('./assets/img/bg.jpg')}
          >
          </Image>
        </View>
        
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Que hacer en Paris</Text>
          <ScrollView
          horizontal
          >
              <View>
                  <Image
                  style={styles.ciudad}
                  source={require('./assets/img/actividad1.jpg')}
                  ></Image>
              </View>
              <View>
                  <Image
                  style={styles.ciudad}
                  source={require('./assets/img/actividad2.jpg')}
                  ></Image>
              </View>
              <View>
                  <Image
                  style={styles.ciudad}
                  source={require('./assets/img/actividad3.jpg')}
                  ></Image>
              </View>
              <View>
                  <Image
                  style={styles.ciudad}
                  source={require('./assets/img/actividad4.jpg')}
                  ></Image>
              </View>
              <View>
                  <Image
                  style={styles.ciudad}
                  source={require('./assets/img/actividad5.jpg')}
                  ></Image>
              </View>
          </ScrollView>
      <Text style={styles.titulo}>Los Mejores Alojamientos</Text>

      <View>
        <View>
          <Image
           style={styles.mejores}
           source={require('./assets/img/mejores1.jpg')}
          />
        </View>
        <View>
          <Image
           style={styles.mejores}
           source={require('./assets/img/mejores2.jpg')}
          />
        </View>
        <View>
          <Image
           style={styles.mejores}
           source={require('./assets/img/mejores3.jpg')}
          />
        </View>
    


      </View>
        <Text style={styles.titulo}>Hospedaje en LA</Text>
          <View
          style={styles.listado}
          >
                <View style={styles.listadoItem}>
                    <Image
                    style={styles.mejores}
                    source={require('./assets/img/hospedaje1.jpg')}
                    />
                  </View>

                  <View style={styles.listadoItem}>
                    <Image
                    style={styles.mejores}
                    source={require('./assets/img/hospedaje2.jpg')}
                    />
                  </View>

                  <View style={styles.listadoItem}>
                    <Image
                    style={styles.mejores}
                    source={require('./assets/img/hospedaje3.jpg')}
                    />
                  </View>

                  <View style={styles.listadoItem}>
                    <Image
                    style={styles.mejores}
                    source={require('./assets/img/hospedaje4.jpg')}
                    />
                  </View>
          </View>
          
    </View>

    </ScrollView>
 
  </>
   
  );
};

const styles = StyleSheet.create({
  contenedor:{
    marginHorizontal: 10,
  },
  banner:{
    height: 250,
    flex : 1
  },
  titulo:{
    fontWeight:  'bold',
    fontSize: 24,
    marginVertical: 20
  },
  ciudad:{
    width: 250,
    height: 300,
    marginRight:10
  },
  mejores:{
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listado:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  listadoItem:{
    flexBasis:'49%'
  }
});

export default App;
