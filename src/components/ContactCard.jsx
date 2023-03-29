import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";
import { Heart } from 'phosphor-react-native'

export default function ContactCard({item}){
    return(
        <TouchableOpacity key={item.id} style={styles.contact}>
            <View style={styles.nome}>
                <Text style={styles.cardTitle}>{item.title}</Text>
            <TouchableOpacity>
                <Heart style={{marginLeft: 10}} size={18} />
            </TouchableOpacity>
            </View>
            
            <Text style={styles.cardPhone}>{item.phone}</Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    contact:{
        backgroundColor: '#dddddd',
        height: 140,
        width: 350,
        borderRadius: 15,
        textAlign: 'center',
        margin: 12,
        padding: 20,
        shadowColor: 'black',
        shadowOffset: {width: 3, height: 8},
        shadowOpacity: 0.3,
        shadowRadius: 8,

    },
    cardTitle: {
        color: "#000000",
        fontSize: 22,
        fontWeight: '700',
        textTransform: 'uppercase',

       
    }, 
    cardPhone: {
        color: "#000000",
        fontSize: 18,
        textTransform: 'uppercase',
        alignContent:'right'
    },
    nome:{
    flexDirection:'row',
    alignItems: 'center'

    }

} 
)
