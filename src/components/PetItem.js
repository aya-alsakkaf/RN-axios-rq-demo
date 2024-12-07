import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const PetItem = ({ pet }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#f9e3be", alignItems: "center" }}
    >
      <View
        style={{
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{pet.name}</Text>
        <Image
          source={{
            uri: pet.image,
          }}
          style={{ width: 200, height: 200 }}
        />
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
          }}
          onPress={() => navigation.navigate("PetDetails", { pet })}
        >
          <Text>View</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PetItem;
