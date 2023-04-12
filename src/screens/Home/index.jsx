import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, TouchableOpacity, Image, ImageBackground, View, SafeAreaView, ScrollView, } from 'react-native';
import Card from '../../components/Card';
import Header from '../../components/Header';
import React, {useState} from 'react'


export default function Home() {
    const navigation = useNavigation();
    const [userIcon, setUserIcon] = useState(true);
    const pages = [
        {
            key: 1,
            title: 'Mercados',
            route: 'MarketRoute',
            icon: 'ShoppingCart',
        },
        {
            key: 2,
            title: 'Serviços Locais',
            route: 'PhoneRoute',
            icon: 'Phone',

        },
        {
            key: 3,
            title: 'Restaurantes',
            route: 'FoodRoute',
            icon: 'ForkKnife',
        },
        {
            key: 4,
            title: 'Gás & Água',
            route: 'WaterRoute',
            icon: 'Drop',
        },
        {
            key: 5,
            title: 'Emergência',
            route: 'EmergecyRoute',
            icon: 'FirstAid',
        },
        {
            key: 6,
            title: 'Mais',
            route: 'MaisRoute',
            icon: 'Plus',
        }
    ]

    return (
        <ImageBackground
            style={styles.background}
            source={{
                uri:
                    'https://png.pngtree.com/thumb_back/fh260/background/20210722/pngtree-dark-purple-gradient-wallpaper-background-image_750294.jpg',
            }}
            resizeMode="stretch"
        >

            <Header userIcon={userIcon} />
            <SafeAreaView style={{ flex: 1 }}>
                
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.cardArea}>
                        {pages.map((item) => {
                            return (
                                <Card key={item.key} item={item} onPress={() => navigation.navigate(item.route)} />
                            )
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>


    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    user: {
        marginTop: 26,
        marginLeft: 35,
    },
    menu: {
        marginTop: 26,
        marginLeft: 8,
    },


    header: {
        paddingTop: 60,
        paddingBottom: 18,
        // backgroundColor:'#2d0b4d',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',

    },

    logo: {
        width: 180,
        height: 60,
        marginBottom: 10,
        marginTop: 15,
        marginLeft: 60,
    },

    cardArea: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 10,
        padding: 0,

    },

    card: {
        backgroundColor: '#bcb8b8',
        width: 120,
        height: 120,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    cardTitle: {
        color: '#43425D',
        fontSize: 20,
        fontWeight: '700',
        textTransform: 'uppercase',
        marginTop: 10,
    },


    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 18,
    },
})