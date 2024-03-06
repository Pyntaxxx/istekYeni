import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

export default function CppAkisDiyagram({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("Akış Diyagramı Nedir");
  };
  const handlePress2 = () => {
    navigation.navigate("Kullanılan şekiller ve görevleri");
  };
  const handlePress3 = () => {
    navigation.navigate("Operatörler");
  };
  const handlePress4 = () => {
    navigation.navigate("Akış Şeması Örnek");
  };
  
  return (
    <ScrollView>
      <TouchableOpacity onPress={handlePress1}>
      <Text style={styles.title}>Akış Diyagramı Nedir</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title}>Kullanılan şekiller ve görevleri</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress3}>
      <Text style={styles.title}>Operatörler</Text>
      </TouchableOpacity >
      <TouchableOpacity onPress={handlePress4}>
      <Text style={styles.title}>Akış Şeması Örnek</Text>
      </TouchableOpacity>
    </ScrollView>
  )
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
})