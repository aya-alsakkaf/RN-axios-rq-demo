import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const PetDetails = ({ route }) => {
  const { pet } = route.params;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f9e3be",
        padding: 10,
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: pet.image,
        }}
        style={{ width: 200, height: 200, marginBottom: 10 }}
      />
      <Text style={{ fontSize: 18, fontWeight: "semibold", marginBottom: 10 }}>
        Name: {pet.name}
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 10, fontWeight: "semibold" }}>
        Type: {pet.type}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#4ade80",
          padding: 10,
          borderRadius: 10,
          width: "90%",
          marginBottom: 10,
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Adopt Now
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#f43f5e",
          padding: 10,
          borderRadius: 10,
          width: "90%",
          marginBottom: 10,
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PetDetails;
