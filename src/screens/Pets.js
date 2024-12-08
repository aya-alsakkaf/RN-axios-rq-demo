import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import PetItem from "../components/PetItem";
import AddPet from "../components/AddPet";
// import pets from "../data/petsData";
import { getAllPets } from "../api/pets";
import { useQuery } from "@tanstack/react-query";
const Pets = () => {
  const [search, setSearch] = useState("");
  // const [pets, setPets] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const {
    data: pets,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["fetchPets"],
    queryFn: getAllPets,
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);

    refetch();
  }, []);
  const filteredPets = pets
    ?.reverse()
    ?.filter((pet) => pet.name.toLowerCase().includes(search.toLowerCase()))
    .map((pet) => <PetItem key={pet.id} pet={pet} />);

  // const fetchPets = async () => {
  //   const data = await getAllPets();
  //   setPets(data);
  // };

  // useEffect(() => {
  //   fetchPets();
  // });

  // console.log(query);
  if (isLoading)
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#f9e3be",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
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
          width: "90%",
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
          marginBottom: 10,
          backgroundColor: "#fff",
        }}
        onChangeText={(value) => setSearch(value)}
      />
      <ScrollView
        style={{ flex: 1, width: "100%" }}
        contentContainerStyle={{
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {filteredPets}
      </ScrollView>
      <AddPet refetch={refetch} />
    </SafeAreaView>
  );
};

export default Pets;
