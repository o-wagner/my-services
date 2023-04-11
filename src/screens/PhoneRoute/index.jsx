import { useNavigation } from '@react-navigation/native';
import {useState} from 'react'
import {
    View, Image,
    Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, TextInput
} from 'react-native';
import ContactCard from '../../components/ContactCard';
import HeaderSearch from '../../components/HeaderSearch';
import Logo from '../../components/imgs/Vector.png';

export default function PhoneRoute() {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('')
    const contactCard = [
        {
            id: 1,
            title: 'Prefeitura',
            phone: '(33)99898-0556',
            favorite: false,

        },
        {
            id: 2,
            title: 'Caixa Econômica',
            phone: '(33)99848-0356',
            favorite: false,
        },
        {
            id: 3,
            title: 'Hospital',
            phone: '(33)99499-6556',
            favorite: false,
        },
        {
            id: 4,
            title: 'Biblioteca Municipal',
            phone: '(33)94499-6596',
            favorite: false,
        },
        {
            id: 5,
            title: 'Caps',
            phone: '(33)94499-6596',
            favorite: false,
        },
    ]

    const ContactFilter = contactCard.filter(contact => {
        return contact.title.toLowerCase().includes(searchText.toLowerCase());
      });

    return (<ImageBackground
        style={styles.background}
        source={{
            uri:
                'https://png.pngtree.com/thumb_back/fh260/background/20210722/pngtree-dark-purple-gradient-wallpaper-background-image_750294.jpg',
        }}
        resizeMode="stretch"
    >
        <HeaderSearch searchText={searchText} setSearchText={setSearchText} />
 
        <SafeAreaView>
            <ScrollView >
                <View style={styles.cardArea}>
                    <Text style={styles.title}>Serviços Locais</Text>
                    {ContactFilter.map((item) => {
                        return (
                            <ContactCard key={item.id} item={item} searchText={searchText}/>
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


    market: {
        // marginBottom:25,
        marginRight: 45,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'

    },
    title: {
        color: '#fdfdfd',
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 20,
        marginRight: 10,
        marginLeft: 25
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
        flexDirection: 'Column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 200,
        marginTop: 20
    },
    inputSearch: {
        width: '100%',
        backgroundColor: 'rgba(255,255,255)',
        borderwidth: 1,
        borderColor: 'white'

    },
    searchArea: {
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)'
    },

})
