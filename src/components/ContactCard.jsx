import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Heart } from 'phosphor-react-native'

export default function ContactCard(props) {

    // const [favorite, setFavorite] = useState(props.item.favorite);

    const changeFavorite = () => {
        setFavorite(!favorite)
        props.item.favorite = !favorite
    }

    return (
        <View>
            <TouchableOpacity style={styles.contact}>
                <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>{props.item.title}</Text>
                    <Text style={styles.cardPhone}>{props.item.phone}</Text>
                    <Text style={styles.cardPhone2}>{props.item.secphone}</Text>
                </View>

                {/* <View style={styles.favorite}>
                    <TouchableOpacity onPress={() => changeFavorite()}>
                        {favorite === false ? (
                        <Heart color={'#8d8d8d'} size={25} weight={'fill'} />
                        ) : (
                        <Heart color={'#4f1294'} size={25} weight={'fill'} />
                        )}
                </TouchableOpacity>
                </View> */}
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
    favorite: { 
        width: 20, 
        height: 20, 
        position: 'absolute', 
        right: 20, 
        top: 15
    },

    cardTitle: {
        color: "#000000",
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'left'
    },
    cardPhone: {
        color: "#000000",
        fontSize: 16,
        marginTop: 6,
        textAlign: 'left'
    },
    cardPhone2: {
        color: "#000000",
        fontSize: 16,
        marginTop: 2,
        textAlign: 'left'
        
    },
    cardInfo: {
        width: '70%',
        alignItems: 'flex-start',

    }

}
)
