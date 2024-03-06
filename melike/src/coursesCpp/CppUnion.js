import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CppUnion({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ Unions");
  };
  const handlePress2 = () => {
    navigation.navigate("Union ve Struct arasındaki farklar");
  };
  return (
    <ScrollView>
      <TouchableOpacity onPress={handlePress1}>
        <Text style={styles.title}>C++ Unions</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title}>Union ve Struct arasındaki farklar</Text>
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