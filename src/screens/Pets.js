import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import PetItem from "../components/PetItem";
import AddPet from "../components/AddPet";
import pets from "../data/petsData";
import { getAllPets } from "../api/pets";
import { useQuery } from "@tanstack/react-query";
const Pets = () => {
  const [search, setSearch] = useState("");
  // const [category, setCategory] = useState("");
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["fetchAllPets"],
    queryFn: () => getAllPets(),
  });

  console.log(data);

  const filteredPets = data
    ?.filter((pet) => pet.name?.toLowerCase().includes(search.toLowerCase()))
    .map((pet) => <PetItem key={pet.id} pet={pet} />);

  if (isLoading) {
    return (
      <Text
        style={{
          fontSize: 31,
        }}
      >
        LOADING
      </Text>
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#f9e3be",
        padding: 10,
        alignItems: "center",
      }}
    >
      <TextInput
        placeholder="Search"
        style={{
          // flex: 1,
          width: "90%",
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
          marginBottom: 10,
          backgroundColor: "#fff",
        }}
        onChangeText={(value) => setSearch(value)}
      />
      {/* <ScrollView
        horizontal
        style={{
          // flex: 1,
          maxHeight: 70,
        }}
      >
        <Pressable
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            margin: 10,
            justifyContent: "center",
          }}
          onPress={() => {
            setCategory("Cat");
          }}
        >
          <Text>Cat</Text>
        </Pressable>
        <Pressable
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            margin: 10,
            justifyContent: "center",
          }}
          onPress={() => {
            setCategory("Dog");
          }}
        >
          <Text>Dog</Text>
        </Pressable>
        <View
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            margin: 10,
            justifyContent: "center",
          }}
        >
          <Text>Rabbit</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            margin: 10,
            justifyContent: "center",
          }}
        >
          <Text>Horse</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            margin: 10,
            justifyContent: "center",
          }}
        >
          <Text>Snake</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            margin: 10,
            justifyContent: "center",
          }}
        >
          <Text>Lizard</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            margin: 10,
            justifyContent: "center",
          }}
        >
          <Text>Fish</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            margin: 10,
            justifyContent: "center",
          }}
        >
          <Text>Cat</Text>
        </View>
      </ScrollView> */}
      <ScrollView
        style={{ flex: 2, width: "100%" }}
        contentContainerStyle={{
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {filteredPets}
      </ScrollView>
      <AddPet fetchPets={refetch} />
    </SafeAreaView>
  );
};

export default Pets;
