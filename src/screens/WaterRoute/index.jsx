import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react'
import {View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import ContactCard from '../../components/ContactCard';
import HeaderSearch from '../../components/HeaderSearch';
import { MaskSad } from 'phosphor-react-native';
import { db } from '../../../firebase';
import { collection, getDocs } from "firebase/firestore";

export default function WaterRoute() {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('')
    const [contactCard, setContactCard] = useState([]);
    let nome = ('Gás & Água');
    let icon = ('Drop');


    useEffect(() => {
        const readWater = async () => {
            const querySnapshot = await getDocs(collection(db, "gaseagua"));
            setContactCard(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        readWater();
    }, [])


    const ContactFilter = contactCard.filter(contact => {
        return contact.title.toLowerCase().includes(searchText.toLowerCase())
    });

    return (<ImageBackground
        style={styles.background}
        source={{
            uri:
                'https://png.pngtree.com/thumb_back/fh260/background/20210722/pngtree-dark-purple-gradient-wallpaper-background-image_750294.jpg',
        }}
        resizeMode="stretch"
    >
        <HeaderSearch nome={nome} icon={icon} searchText={searchText} setSearchText={setSearchText} />
            <ScrollView >
                <View style={styles.cardArea}>
                    {ContactFilter.length > 0 ?
                        (ContactFilter.map((item) => {
                            return (
                                <ContactCard key={item.id} item={item} searchText={searchText} />
                            )
                        }
                        )) :
                        <View style={{marginHorizontal: 30, marginVertical: 15, alignItems:'center', padding: 20}} >
                            <MaskSad style={{marginBottom: 10}} size={35} color='#d8d8d8'/>
                            <Text style={{fontSize: 18, color: 'white', textAlign: 'justify'}}>Desculpe, Não encontramos nada em nossos registros...</Text>
                        </View>
                    }
                </View>
            </ScrollView>

    </ImageBackground>
    )
}

const styles = StyleSheet.create({

    background: {
        flex: 1,
    },
    market: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    title: {
        color: '#fdfdfd',
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 10,

    },
    button: {
        borderRadius: 7,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginVertical: 15,
        height: 35,
        width: '85%'
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '800',

    },
    cardArea: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20
    },
})
