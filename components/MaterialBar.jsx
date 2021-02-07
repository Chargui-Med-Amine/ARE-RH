import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-paper'
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";



const MaterialBar = () => {
    return (
        <View>
            <View style={styles.line}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Avatar.Image size={60} source={require("../assets/sensor.jpg")} />
                    <Text style={{ paddingLeft: 2 }}>Sound Sensor 8.2</Text>
                </View>
                <Text>5</Text>
                <Text>15</Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Entypo name="edit" size={24} color="black" style={{ paddingRight: 15 }} />
                    <Entypo name="trash" size={24} color="red" />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

})
export default MaterialBar
