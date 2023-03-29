import { useNavigation } from '@react-navigation/native';
import {
    View, Image,
    Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, TextInput
} from 'react-native';
import ContactCard from '../../components/ContactCard';
import HeaderSearch from '../../components/HeaderSearch';
import Logo from '../../components/imgs/Vector.png';

export default function PhoneRoute() {
    const navigation = useNavigation();

    const contactCard = [
        {
            id: 1,
            title: 'Prefeitura',
            phone: '(33)99898-0556'

        },
        {
            id: 2,
            title: 'Caixa Econômica',
            phone: '(33)99848-0356'
        },
        {
            id: 3,
            title: 'Hospital',
            phone: '(33)99499-6556'
        },
        {
            id: 4,
            title: 'Biblioteca Municipal',
            phone: '(33)94499-6596'
        },
        {
            id: 5,
            title: 'Caps',
            phone: '(33)94499-6596'
        },
    ]

    return (<ImageBackground
        style={styles.background}
        source={{
            uri:
                'https://png.pngtree.com/thumb_back/fh260/background/20210722/pngtree-dark-purple-gradient-wallpaper-background-image_750294.jpg',
        }}
        resizeMode="stretch"
    >
        <HeaderSearch>
            <Image source={Logo} style={styles.logo} />
        </HeaderSearch>
        <SafeAreaView>
            <ScrollView >
                <View style={styles.cardArea}>
                    <Text style={styles.title}>Serviços Locais</Text>
                    {contactCard.map((item) => {
                        return (
                            <ContactCard item={item} />
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
