import React,{useState} from 'react'
import { View, Text, StyleSheet, ScrollView, Modal, Dimensions, TouchableOpacity } from 'react-native'
import { Appbar, Button, Divider,TextInput } from 'react-native-paper';
import MaterialBar from '../components/MaterialBar';
import { Avatar } from 'react-native-paper'
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";



const Users = ({navigation}) => {

    const materials = [1212, 545, 465, 48, 79, 9]
    const [username,setUsername] = useState("")
    const [modalAdd, setModalAdd] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const [modalDelete, setModalDelete] = useState(false)
    const [listVisible, setListVisible] = useState(false)

    return (
        <LinearGradient
            colors={["rgba(0, 0, 0, 1)", "rgba(226, 172, 13, 0.9)"]}
        >
            <Appbar.Header style={styles.header}>
                <Appbar.BackAction onPress={() => navigation.goBack() } />
                <Appbar.Content title="Users list" />
                {/* <Appbar.Action icon="magnify" onPress={() => { console.log("pressed") }} /> */}
            </Appbar.Header>
            <Button style={styles.btn} mode="contained" onPress={() =>setModalAdd(true)}>
                Add User
            </Button>

            <View style={styles.container}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={{ width: "15%",marginLeft:5 }}>id</Text>
                    <Text style={{ width: "50%" }}>Name</Text>
                    <Text style={{ width: "20%" }}>Material</Text>
                    <Text>Actions</Text>
                </View>
                <Divider style={{ height: 1, backgroundColor: "black" }} />
                <ScrollView style={{ height: Dimensions.get("screen").height / 1.5 } }>
                    {materials.map((data) => {
                        return (
                            <View>
                                <View style={styles.line}>
                                    <Text style={{marginLeft:5}}>5</Text>
                                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                        <Avatar.Image size={60} source={require("../assets/sensor.jpg")} />
                                        <Text style={{ paddingLeft: 2 }}>Foulen Fouleni</Text>
                                    </View>
                                    <TouchableOpacity onPress={()=>{setListVisible(true)}}>
                                    <MaterialIcons name="settings-input-component" size={24} color="black" />
                                    </TouchableOpacity>
                                    <View style={{ display: "flex", flexDirection: "row" }}>
                                        <TouchableOpacity onPress={()=>{setModalEdit(true)}}>
                                        <Entypo name="edit" size={24} color="black" style={{ paddingRight: 15 }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=>{ setModalDelete(true)}}>
                                        <Entypo name="trash" size={24} color="red" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>

            </View>
            <Modal visible={modalAdd} animationType="slide" transparent={true}>
                <View style={{...styles.modalView}}>
                    <Text>Add new Member</Text>
                    <TextInput
                        label="Username"
                        value={username}
                        onChangeText={text => setUsername(text)}
                        style={{ backgroundColor: "transparent" }}
                    />
                    <TextInput
                        label="User id"
                        value={username}
                        onChangeText={text => setUsername(text)}
                        style={{ backgroundColor: "transparent" }}
                    />
                    <TextInput
                        label="Password"
                        value={username}
                        onChangeText={text => setUsername(text)}
                        style={{ backgroundColor: "transparent" }}
                    />
                    <TextInput
                        label="Class"
                        value={username}
                        onChangeText={text => setUsername(text)}
                        style={{ backgroundColor: "transparent" }}
                    />

                    <Button style={{ marginTop: 30 }} mode="contained">Upload Photo</Button>
                    <View style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row", marginTop: 30 }}>
                        <Button mode="text" color="green"><Text style={{color:"green"}}>ADD</Text></Button>
                        <Button mode="text" color="red" onPress={() => setModalAdd(false)}><Text style={{color:"red"}}>Close</Text></Button>
                    </View>
                </View>
            </Modal>
            <Modal visible={modalEdit} animationType="slide" transparent={true}>
                <View style={{...styles.modalView}}>
                    <Text style={styles.modalTitle}>Edit Material</Text>
                    <TextInput
                        label="Username"
                        value={username}
                        onChangeText={text => setUsername(text)}
                        style={{ backgroundColor: "transparent" }}
                    />
                    <TextInput
                        label="Password"
                        value={username}
                        onChangeText={text => setUsername(text)}
                        style={{ backgroundColor: "transparent" }}
                    />

                    {/* <Button style={{ marginTop: 30 }} mode="contained">Upload Photo</Button> */}
                    <View style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row", marginTop: 30 }}>
                        <Button mode="text" color="green"><Text style={{color:"green"}}>SAVE</Text></Button>
                        <Button mode="text" color="red" onPress={() => setModalEdit(false)}><Text style={{color:"red"}}>Close</Text></Button>
                    </View>
                </View>
            </Modal>
            <Modal visible={modalDelete} animationType="slide" transparent={true}>
                <View style={{...styles.modalView,marginTop:'40%'}}>
                    <Text style={styles.modalTitle}>Delete an item</Text>
                    <Text>Are you sure you want to delete this member ?</Text>
                    <View style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row", marginTop: 30 }}>
                        <Button mode="text" color="green"><Text style={{color:"green"}}>Yes</Text></Button>
                        <Button mode="text" color="red" onPress={() => setModalDelete(false)}><Text style={{color:"red"}}>No</Text></Button>
                    </View>
                </View>
            </Modal>
            <Modal visible={listVisible} animationType="slide" transparent={true}>
                <View style={{...styles.modalView,marginTop:'40%'}}>
                    <Text style={styles.modalTitle}>Material List</Text>
                    <View>
                        <Text>* Sensor x2124</Text>
                        <Text>* Sensor x2124</Text>
                        <Text>* Sensor x2124</Text>
                        <Text>* Sensor x2124</Text>
                    </View>
                    <View style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row", marginTop: 30 }}>
                        <Button mode="text" onPress={() => setListVisible(false)}>OK</Button>
                    </View>
                </View>
            </Modal>



        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "white",
    },
    container: {
        backgroundColor: "#E1DBBD",
        marginTop: 50,
        marginEnd: "2%",
        marginStart: "2%"
    },
    btn: {
        marginLeft: "2%",
        marginRight: "2%",
        padding: 15,
        backgroundColor: "rgba(226, 172, 13, 0.5)",
        marginTop: 50,
    },
    line: {
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 10
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",

    },
    modalTitle:{
        fontSize:40
    }
})


export default Users
