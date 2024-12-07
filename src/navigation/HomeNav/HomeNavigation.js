import { TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import Pets from "../../screens/Pets";
import PetDetails from "../../screens/PetDetails";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import ModalContext from "../../context/ModalContext";

const Stack = createNativeStackNavigator();
const HomeNavigation = () => {
  const { setModalVisible } = useContext(ModalContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f9e3be",
        },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Pets"
        component={Pets}
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => setModalVisible(true)}
              >
                <FontAwesome6 name="add" size={24} color="black" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen name="PetDetails" component={PetDetails} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
