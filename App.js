import { Image, SafeAreaView, Text, View } from "react-native";
import Home from "./src/screens/Home";
import Pets from "./src/screens/Pets";
import PetDetails from "./src/screens/PetDetails";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./src/navigation/HomeNav/HomeNavigation";
import { useState } from "react";
import ModalContext from "./src/context/ModalContext";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const queryClient = new QueryClient();
  return (
    <NavigationContainer>
      <ModalContext.Provider value={{ modalVisible, setModalVisible }}>
        <QueryClientProvider client={queryClient}>
          <HomeNavigation />
        </QueryClientProvider>
      </ModalContext.Provider>
    </NavigationContainer>
  );
}
