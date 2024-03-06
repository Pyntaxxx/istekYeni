import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CppAlgoritma({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("Algoritma Nedir");
  };
  const handlePress2 = () => {
    navigation.navigate("Algoritma Örnek");
  };
  return (
    <ScrollView style={styles.main}>
      <TouchableOpacity onPress={handlePress1}>
        <Text style={styles.title}>Algoritma Nedir</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title}>Algoritma Örnek</Text>
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