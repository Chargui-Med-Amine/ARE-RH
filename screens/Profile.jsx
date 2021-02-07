import React, { useState } from "react";
import { View, Text, StyleSheet, Picker, Modal } from "react-native";
import { Appbar } from "react-native-paper";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  TextInput,
} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const Profile = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [qty, setQty] = useState("");

  const [modalProfile, setModalProfile] = useState(false);

  return (
    <LinearGradient
      colors={["rgba(0, 0, 0, 1)", "rgba(226, 172, 13, 0.9)"]}
      style={styles.container}
    >
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Profile" />
      </Appbar.Header>

      <Card
        style={{
          backgroundColor: "#E1DBBD",
          marginTop: "30%",
          marginLeft: "3%",
          marginRight: "3%",
        }}
      >
        <Card.Content>
          <Avatar.Image size={80} source={require("../assets/membre.png")} />

          <Text></Text>
          <Text>Name : Folen falten</Text>
          <Text>Groupe : E</Text>
          <Text>Pole : Media</Text>
          <Text>Nombre d'Absence : 2</Text>
          <Text>Tache en cours: </Text>
          <Text>Pole : page Facebook</Text>
          <Text>Robocup: Ami de Groupe</Text>
        </Card.Content>
      </Card>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
  },
  input: {
    backgroundColor: "white",
    height: 50,
  },
  container: {
    flex: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
  },
  modalTitle: {
    fontSize: 30,
  },
});

export default Profile;
