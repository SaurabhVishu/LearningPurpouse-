import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Button} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './style';

interface HomeScreenProps {
  navigation: any;
}

interface Movie {
  id: string;
  title: string;
  releaseYear: string;
}

const HomeScreen = (props: HomeScreenProps) => {
  const {navigation} = props;
  const count = useSelector((store: any) => store.count.count);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log('data======>', data);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.moveButton}
          onPress={() => navigation.navigate('RandomScreen')}>
          <Text style={styles.moveBtnTxt}>Move to WebApp</Text>
        </TouchableOpacity>
        <Text style={styles.headingText}>Movie name from Api</Text>
        <Text>{count}</Text>
        {data.map((item: Movie, index: number) => {
          return (
            <View key={index}>
              <View
                style={{
                  backgroundColor: 'white',
                  padding: 8,
                  marginVertical: 10,
                  borderRadius: 5,
                  elevation: 5,
                }}>
                <Text style={{color: 'black', fontSize: 18}}>{item.title}</Text>
                <Text style={{color: 'red'}}>{item.releaseYear}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
