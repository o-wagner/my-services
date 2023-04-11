import React, { useState } from "react";
import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";
import { Heart } from 'phosphor-react-native'

export default function ContactCard(props) {

    const [favorite, setFavorite] = useState(props.item.favorite);
    const changeFavorite = () => {
        setFavorite(!favorite)
        props.item.favorite = !favorite
    }


    return (<View>

        <TouchableOpacity key={props.item.id} style={styles.contact}>
            <View style={styles.nome}>
                <Text style={styles.cardTitle}>{props.item.title}</Text>
                <Text style={styles.cardPhone}>{props.item.phone}</Text>
            </View>

            <View style={{ flex: 1 }}>
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
        shadowColor: 'black',
        // shadowOffset: {width: 3, height: 8},
        shadowOpacity: 0.3,
        shadowRadius: 8,
        flexDirection: 'row'

    },
    cardTitle: {
        color: "#000000",
        fontSize: 22,
        fontWeight: '700',
        textTransform: 'uppercase',


    },
    cardPhone: {
        color: "#000000",
        fontSize: 20,
        textTransform: 'uppercase',
        marginTop: 6
    },
    nome: {
        width: '70%',
        alignItems: 'left'

    }

}
)
