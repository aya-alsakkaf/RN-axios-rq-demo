import { SafeAreaView, ScrollView, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import PetItem from "../components/PetItem";
import AddPet from "../components/AddPet";
// import pets from "../data/petsData";
import { getAllPets } from "../api/pets";
const Pets = () => {
  const [search, setSearch] = useState("");
  const [pets, setPets] = useState([]);
  const filteredPets = pets
    .filter((pet) => pet.name.toLowerCase().includes(search.toLowerCase()))
    .map((pet) => <PetItem key={pet.id} pet={pet} />);

  useEffect(() => {
    const fetchPets = async () => {
      const res = await getAllPets();
      setPets(res);
    };
    fetchPets();
  }, []);

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
      >
        {filteredPets}
      </ScrollView>
      <AddPet />
    </SafeAreaView>
  );
};

export default Pets;
