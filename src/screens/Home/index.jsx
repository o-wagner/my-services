import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, TouchableOpacity, Image, ImageBackground, View, SafeAreaView, ScrollView, Platform } from 'react-native';
import Card from '../../components/Card';
import Header from '../../components/Header';
import React, {useState, useEffect} from 'react'
import { db } from '../../../firebase';
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
    const navigation = useNavigation();
    let userIcon = (true);
    const [pages, setPages] = useState([]);

    useEffect(() => {
        const readMarket = async () => {
            const querySnapshot = await getDocs(collection(db, "rotas"))
            setPages(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        readMarket();
    }, [])

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
                                <Card key={item.id} item={item} onPress={() => navigation.navigate(item.route)} />
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