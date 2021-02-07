import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Menu, Provider } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";

const Home = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["rgba(0, 0, 0, 1)", "rgba(226, 172, 13,6)"]}
      style={styles.container}
    >
      {/* <Text style={{color:"white"}}>Welcome User</Text> */}
      <Image
        style={{
          width: "50%",
          height: 200,
          position: "absolute",
          right: 0,
          marginTop: 60,
          zIndex: 100,
        }}
        source={require("../assets/robot.png")}
      />
      <View style={styles.homeBar}>
        <Text style={styles.title}>We are ARE</Text>
        <Text style={styles.title}>We are family</Text>
      </View>
      <Button
        style={styles.btn}
        mode="contained"
        onPress={() => navigation.navigate("Membres")}
      >
        Membres
      </Button>

      <Button
        style={styles.btn}
        mode="contained"
        onPress={() => navigation.navigate("Ag")}
      >
        Calendare
      </Button>

      <Button
        style={styles.btn}
        mode="contained"
        onPress={() => navigation.goBack()}
      >
        Logout
      </Button>
    </LinearGradient>
  );
};

export const User = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <LinearGradient
      colors={["rgba(0, 0, 0, 1)", "rgba(226, 172, 13, 0.9)"]}
      style={styles.container}
    >
      {}
      <Image
        style={{
          width: "50%",
          height: 200,
          position: "absolute",
          right: 0,
          marginTop: 60,
          zIndex: 100,
        }}
        source={require("../assets/robot.png")}
      />

      <View style={styles.homeBar}>
        <Text style={styles.title}>We are ARE</Text>
        <Text style={styles.title}>We are family</Text>
      </View>
      <Button
        style={styles.btn}
        mode="contained"
        onPress={() => navigation.navigate("Profile")}
      >
        Profile
      </Button>

      <Button
        style={styles.btn}
        mode="contained"
        onPress={() => navigation.goBack()}
      >
        Logout
      </Button>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  homeBar: {
    height: 100,
    backgroundColor: "white",
    width: "100%",
    marginTop: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 30,
    paddingLeft: 30,
  },
  btn: {
    marginLeft: "20%",
    marginRight: "20%",
    padding: 15,
    backgroundColor: "rgba(226, 172, 13, 0.5)",
    marginTop: 20,
  },
  container: {
    flex: 1,
  },
});

export default Home;
