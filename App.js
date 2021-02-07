import * as React from "react";
import * as RN from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Singin from "./screens/Singin";
import { LinearGradient } from "expo-linear-gradient";
import Home from "./screens/Home";
import Membres from "./screens/Membres";
import Ag from "./screens/Ag";
import Agdate from "./screens/Agdate";
import Users from "./screens/Users";
import { User } from "./screens/Home";
import Profile from "./screens/Profile";
import Return from "./screens/Return";
//import UserMatTable from "./screens/UserMatTable";
import QRCode from "./screens/QRCode";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="signin" component={Singin} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="Membres" component={Membres} />
        <Stack.Screen name="Ag" component={Ag} />
        <Stack.Screen name="return" component={Return} />
        <Stack.Screen name="users" component={Users} />
        <Stack.Screen name="user" component={User} />
        <Stack.Screen name="Agd" component={Agdate} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="qrcode" component={QRCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
});
