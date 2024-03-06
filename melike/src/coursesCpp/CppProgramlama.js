import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

export default function CppProgramlama({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("Programlama Nedir");
  };
  const handlePress2 = () => {
    navigation.navigate("Programlama Aşamaları");
  };
  const handlePress3 = () => {
    navigation.navigate("Programlama Örneği");
  };
  const handlePress4 = () => {
    navigation.navigate("Programlama Dilleri");
  };
  return (
    <ScrollView>
      <TouchableOpacity onPress={handlePress1}>
      <Text style={styles.title}>Programlama Nedir</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title}>Programlama Aşamaları</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress3}>
      <Text style={styles.title}>Programlama Örneği</Text>
      </TouchableOpacity >
      <TouchableOpacity onPress={handlePress4}>
      <Text style={styles.title}>Programlama Dilleri</Text>
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
