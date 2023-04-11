import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import {
    View, Image,
    Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, TextInput
} from 'react-native';
import ContactCard from '../../components/ContactCard';
import HeaderSearch from '../../components/HeaderSearch';

export default function MarketRoute() {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
    
    const contactCard = [
        {
            id: 1,
            title: 'Supermercados Bicalho',
            phone: '(33)99898-0556',
            favorite: false,

        },
        {
            id: 2,
            title: 'Supermercado K&K',
            phone: '(33)99848-0356',
            favorite: false,
        },
        {
            id: 3,
            title: 'Mercadinho',
            phone: '(33)99499-6556',
            favorite: false,
        },
        {
            id: 4,
            title: 'Mercadão',
            phone: '(33)94499-6596',
            favorite: false,
        },
        {
            id: 5,
            title: 'Mercado da Dona Zilda',
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
                        <Text style={styles.title}>MERCADOS</Text>
                        
                        {ContactFilter.length > 0 ? 

                       ( ContactFilter.map((item) => {
                            return (
                                <ContactCard key={item.id} item={item} searchText={searchText}/>
                            )
                        }
                        )):
                        <View> 
                            <Text style={styles.title}>Não Achou</Text>
                        </View>
                    
                    }
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
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'

    },
    title: {
        color: '#fdfdfd',
        fontSize: 26,
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
        marginTop:20
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
