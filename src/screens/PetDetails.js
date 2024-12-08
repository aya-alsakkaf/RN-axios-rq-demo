import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { getPetById, deletePet } from "../api/pets";
import { useNavigation } from "@react-navigation/native";

const PetDetails = ({ route }) => {
  const navigation = useNavigation();
  const { pet } = route.params;
  const [petDetails, setPetDetails] = useState(pet);
  useEffect(() => {
    const fetchPetDetails = async () => {
      const res = await getPetById(pet.id);
      setPetDetails(res);
    };
    fetchPetDetails();
  }, []);

  const deletePetHandler = async () => {
    await deletePet(pet.id);
    // navigation.navigate("Pets");
  };
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
          uri: petDetails.image,
        }}
        style={{ width: 200, height: 200, marginBottom: 10 }}
      />
      <Text style={{ fontSize: 18, fontWeight: "semibold", marginBottom: 10 }}>
        Name: {petDetails.name}
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 10, fontWeight: "semibold" }}>
        Type: {petDetails.type}
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
        onPress={() => {
          deletePetHandler();
          navigation.goBack();
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PetDetails;
