import { Image, SafeAreaView, Text, View } from "react-native";
import Home from "./src/screens/Home";
import Pets from "./src/screens/Pets";
import PetDetails from "./src/screens/PetDetails";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./src/navigation/HomeNav/HomeNavigation";
import { useState } from "react";
import ModalContext from "./src/context/ModalContext";
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <NavigationContainer>
      <ModalContext.Provider value={{ modalVisible, setModalVisible }}>
        <HomeNavigation />
      </ModalContext.Provider>
    </NavigationContainer>
  );
}
