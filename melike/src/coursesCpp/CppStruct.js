import { StyleSheet, Text, View , ScrollView, TouchableOpacity  } from 'react-native'
import React from 'react'

export default function CppStruct({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ Structures (struct)");
  };
  const handlePress2 = () => {
    navigation.navigate("Struct Üyelerine Erişim");
  };
  const handlePress3 = () => {
    navigation.navigate("Çoklu Değişkenlerde Tek Struct");
  };
  const handlePress4 = () => {
    navigation.navigate("Adlandırılmış Struct");
  };
  return (
    <ScrollView> 
      <TouchableOpacity onPress={handlePress1}>
      <Text style={styles.title}>C++ Structures (struct)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title}>Struct Üyelerine Erişim</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress3}>
      <Text style={styles.title}>Çoklu Değişkenlerde Tek Struct</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress4}>
      <Text style={styles.title}>Adlandırılmış Struct</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginVertical: 7,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff0f5",
    color: "black",
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 15,
  },
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  }
});