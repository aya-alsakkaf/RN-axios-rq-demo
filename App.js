import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./src/navigation/HomeNav/HomeNavigation";
import { useState } from "react";
import ModalContext from "./src/context/ModalContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const queryClient = new QueryClient(); //declared big boss || pupeteer
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
