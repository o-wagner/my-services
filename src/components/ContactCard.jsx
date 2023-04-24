import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Heart } from 'phosphor-react-native'

export default function ContactCard(props) {

    const [favorite, setFavorite] = useState(props.item.favorite);
    const changeFavorite = () => {
        setFavorite(!favorite)
        props.item.favorite = !favorite
    }
    return (
    <View>
        <TouchableOpacity key={props.item.id} style={styles.contact}>
            <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{props.item.title}</Text>
                <Text style={styles.cardPhone}>{props.item.phone}</Text>
            </View>

            <View style={{position: 'absolute', right: 18, top:20}}>
                <TouchableOpacity style={{ alignSelf: "flex-end" }} onPress={() => setFavorite(!favorite)}>
                    <Heart color={favorite ? '#3b065a' : ''} size={22} weight={favorite ? 'fill' : 'duotone'} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    </View>

    );
}

const styles = StyleSheet.create({
    contact: {
        backgroundColor: '#dadadabe',
        height: 140,
        width: 350,
        borderRadius: 15,
        textAlign: 'center',
        margin: 8,
        padding: 20,
    },
    cardTitle: {
        color: "#000000",
        fontSize: 20,
        fontWeight: '700',
        textTransform: 'uppercase',
        textAlign: 'left'
    },
    cardPhone: {
        color: "#000000",
        fontSize: 18,
        textTransform: 'uppercase',
        marginTop: 6,
        textAlign: 'left'
    },
    cardInfo: {
        width: '70%',
        alignItems: 'flex-start',

    }

}
)
