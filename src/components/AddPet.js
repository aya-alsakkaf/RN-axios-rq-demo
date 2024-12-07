import { View, Text, Modal, TextInput, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import ModalContext from "../context/ModalContext";

const AddPet = () => {
  const { modalVisible, setModalVisible } = useContext(ModalContext);
  const [petInfo, setPetInfo] = useState({});
  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            gap: 10,
            width: "90%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ fontWeight: "bold" }}>Close</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}
          >
            Add Pet
          </Text>
          <TextInput
            placeholder="Pet Name"
            style={{ padding: 10, borderWidth: 1, borderRadius: 10 }}
            onChangeText={(value) => setPetInfo({ ...petInfo, name: value })}
          />
          <TextInput
            placeholder="Pet Type"
            style={{ padding: 10, borderWidth: 1, borderRadius: 10 }}
            onChangeText={(value) => setPetInfo({ ...petInfo, type: value })}
          />
          <TextInput
            placeholder="Pet Image"
            style={{ padding: 10, borderWidth: 1, borderRadius: 10 }}
            onChangeText={(value) => setPetInfo({ ...petInfo, image: value })}
          />
          <TextInput
            placeholder="Pet Adopted?"
            style={{ padding: 10, borderWidth: 1, borderRadius: 10 }}
            onChangeText={(value) => setPetInfo({ ...petInfo, adopted: value })}
          />
          <TouchableOpacity
            style={{
              padding: 10,
              borderRadius: 10,
              backgroundColor: "#4ade80",
              alignItems: "center",
            }}
            onPress={() => {
              console.log(petInfo);
              setModalVisible(false);
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Add Pet</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddPet;
