import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

export default function CppWhile({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ While Döngüsü");
  };
  const handlePress2 = () => {
    navigation.navigate("Do While Döngüsü");
  };
  return (
    <ScrollView>
      <TouchableOpacity onPress={handlePress1}>
        <Text style={styles.title}>C++ While Döngüsü</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title}>Do While Döngüsü</Text>
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