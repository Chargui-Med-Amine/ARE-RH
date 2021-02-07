import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  Dimensions,
} from "react-native";
import { Appbar, Button, Divider, TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Ag = ({ navigation }) => {
  const Ag = [1212, 545, 465, 48, 79, 9, 7, 78];

  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [listVisible, setListVisible] = useState(false);
  const [mName, setMName] = useState("");

  return (
    <LinearGradient colors={["rgba(0, 0, 0, 1)", "rgba(226, 172, 13, 0.9)"]}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Ag table" />
        {/* <Appbar.Action icon="magnify" onPress={() => { console.log("pressed") }} /> */}
      </Appbar.Header>
      <Button
        style={styles.btn}
        mode="contained"
        onPress={() => setModalAdd(true)}
      >
        New Ag
      </Button>

      <View style={styles.container}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ width: "40%" }}>Sujet</Text>
          <Text style={{ width: "15%" }}>Date</Text>
          <Text style={{ width: "15%" }}>Type</Text>
          <Text style={{ width: "15%" }}>Pole</Text>
          <Text>Actions</Text>
        </View>
        <Divider style={{ height: 1, backgroundColor: "black" }} />
        <ScrollView style={{ height: Dimensions.get("screen").height / 1.5 }}>
          {Ag.map((data) => {
            return (
              <View>
                <View style={styles.line}>
                  <TouchableOpacity onPress={() => setListVisible(true)}>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ paddingLeft: 2 }}>AG</Text>
                    </View>
                  </TouchableOpacity>
                  <Text>02/02/2020</Text>
                  <Text>General</Text>
                  <Text>Tous</Text>

                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("qrcode")}
                    >
                      <Entypo
                        name="add-user"
                        size={24}
                        color="black"
                        style={{ paddingRight: 15 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalDelete(true)}>
                      <Entypo name="trash" size={24} color="red" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <Modal visible={modalAdd} animationType="slide" transparent={true}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>New Ag</Text>
          <TextInput
            label="Name"
            value={mName}
            onChangeText={(text) => setMName(text)}
            style={{ backgroundColor: "transparent" }}
          />
          <TextInput
            label="Groupe"
            value={mName}
            onChangeText={(text) => setMName(text)}
            style={{ backgroundColor: "transparent" }}
          />
          <TextInput
            label="Pole"
            value={mName}
            onChangeText={(text) => setMName(text)}
            style={{ backgroundColor: "transparent" }}
          />
          <Button style={{ marginTop: 30 }} mode="contained">
            <TouchableOpacity
              onPress={() => navigation.navigate("Agd")}
            ></TouchableOpacity>
            Date
          </Button>

          <View
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 30,
            }}
          >
            <Button mode="text">ADD</Button>
            <Button mode="text" onPress={() => setModalAdd(false)}>
              Close
            </Button>
          </View>
        </View>
      </Modal>
      <Modal visible={modalEdit} animationType="slide" transparent={true}>
        <View style={{ ...styles.modalView }}>
          <Text style={styles.modalTitle}>Edit Ag</Text>
          <TextInput
            label="Name"
            value={mName}
            onChangeText={(text) => setMName(text)}
            style={{ backgroundColor: "transparent" }}
          />
          <TextInput
            label="Groupe"
            value={mName}
            onChangeText={(text) => setMName(text)}
            style={{ backgroundColor: "transparent" }}
          />
          <TextInput
            label="Pole"
            value={mName}
            onChangeText={(text) => setMName(text)}
            style={{ backgroundColor: "transparent" }}
          />

          <Button style={{ marginTop: 30 }} mode="contained">
            Date
          </Button>
          <View
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 30,
            }}
          >
            <Button mode="text">SAVE</Button>
            <Button mode="text" onPress={() => setModalEdit(false)}>
              Close
            </Button>
          </View>
        </View>
      </Modal>
      <Modal visible={modalDelete} animationType="slide" transparent={true}>
        <View style={{ ...styles.modalView, marginTop: "40%" }}>
          <Text style={styles.modalTitle}>Delete Ag</Text>
          <Text>Are you sure you want to delete this Ag ?</Text>
          <View
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 30,
            }}
          >
            <Button mode="text">Yes</Button>
            <Button mode="text" onPress={() => setModalDelete(false)}>
              No
            </Button>
          </View>
        </View>
      </Modal>
      <Modal visible={listVisible} animationType="slide" transparent={true}>
        <View style={{ ...styles.modalView, marginTop: "40%" }}>
          <Text style={styles.modalTitle}>Ag</Text>
          <View>
            <Text>name : Folen falten</Text>
            <Text>Groupe : E</Text>
            <Text>Pole : Media</Text>
            <Text>Nombre d'Absence : 2</Text>
            <Text>Tache en cours: </Text>
            <Text> Pole : page Facebook</Text>
            <Text> Robocup: Ami de Groupe</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 30,
            }}
          >
            <Button mode="text" onPress={() => setListVisible(false)}>
              OK
            </Button>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
  },
  container: {
    backgroundColor: "#E1DBBD",
    marginTop: 50,
    marginEnd: "2%",
    marginStart: "2%",
  },
  btn: {
    marginLeft: "5%",
    marginRight: "5%",
    padding: 15,
    backgroundColor: "rgba(226, 172, 13, 0.5)",
    marginTop: 50,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
  },
  line: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  modalTitle: {
    fontSize: 40,
  },
});

export default Ag;
