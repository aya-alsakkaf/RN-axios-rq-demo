import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPetbyId } from "../api/pets";

const PetDetails = ({ route }) => {
  const { pet } = route.params;

  const id = pet.id;

  // console.log("pet", pet);

  const { data: petBE, isLoading } = useQuery({
    queryKey: ["getOnePet", pet.id],
    queryFn: () => getPetbyId(pet.id),
  });

  // console.log("data", petBE);

  if (isLoading)
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "f9e3be",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
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
          uri: petBE?.image
            ? petBE.image
            : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        }}
        style={{ width: 200, height: 200, marginBottom: 10 }}
      />
      <Text style={{ fontSize: 18, fontWeight: "semibold", marginBottom: 10 }}>
        Name: {petBE?.name}
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 10, fontWeight: "semibold" }}>
        Type: {petBE?.type}
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
