import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";

export default function ContactCard({item}){


    return(
        <TouchableOpacity key={item.id} style={styles.contact}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardPhone}>{item.phone}</Text>
    
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    contact:{
        backgroundColor: "#D9D9D9",
        height: 140,
        width: 350,
        borderRadius: 15,
        textAlign: 'center',
        margin: 12,
        padding: 20,
    },
    cardTitle: {
        color: "#000000",
        fontSize: 22,
        fontWeight: '700',
        textTransform: 'uppercase',
       
    }, 
    cardPhone: {
        color: '#ffffff',
        fontSize: 18,
        textTransform: 'uppercase',
        alignContent:'right'

    }
} 
)
