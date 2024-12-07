import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f9e3be",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <Image
        source={{
          uri: "https://img.freepik.com/premium-vector/cute-petshop-logo-with-cat-dog_454510-56.jpg",
        }}
        style={{
          width: 200,
          height: 200,
        }}
      />

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Welcome to theeeee best pets shop
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#4ade80",
          padding: 10,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate("Pets")}
      >
        <Text style={{ fontWeight: "bold" }}>View Pets</Text>
      </TouchableOpacity>
    </View>
  );
}
