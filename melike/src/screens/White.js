import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function White({navigation}) {

  const handlePress = () => {
    navigation.navigate("Anasayfa");
  };
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Anasayfa');
    }, 3000); // 1 saniye sonra otomatik olarak geçiş yapacak
    return () => clearTimeout(timeout); // Component unmount olduğunda timeout'u temizle
  }, [navigation]);

  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondText(true);
    }, 1000);

    return () => clearTimeout(timer); // Temizleme işlemi, bileşen sona erdiğinde zamanlayıcıyı temizler
  }, []);

  return (
    <LinearGradient colors={['#ff1493', '#7b68ee', '#87cefa']}>
      <View style={styles.wrapper}>
        <Text onPress={handlePress} style={styles.style2}>ISTEK</Text>
        {showSecondText && (
          <Text onPress={handlePress} style={styles.style3}>Ders Doküman Programı</Text>
        )}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  style2: {
    color: 'white',
    fontSize: 100,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 250,
    textShadowColor: "#000",
textShadowOffset: {width: 10, height: 3},
textShadowRadius: 3
  },
  style3: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  wrapper: {
    width: '100%',
    height: '100%',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});