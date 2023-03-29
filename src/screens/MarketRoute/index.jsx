import { useNavigation } from '@react-navigation/native';
import { View, Image ,
        Text, StyleSheet , TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import ContactCard from '../../components/ContactCard';
import Logo from '../../components/imgs/Vector.png';

export default function MarketRoute(){
    const navigation = useNavigation();

    const contactCard = [
        {
            id: 1,
            title: 'Supermercados Bicalho',
            phone: '(33)99898-0556'

        },
        {
            id: 2,
            title: 'K&K',
            phone: '(33)99848-0356'
        },
        {
            id: 3,
            title: 'Mercadinho',
            phone: '(33)99499-6556'
        },
        {
            id: 4,
            title: 'Mercadão',
            phone: '(33)94499-6596'
        },
        {
            id: 5,
            title: 'Mercado da Dona Zilda',
            phone: '(33)94499-6596'
        },
        

    ]

    return(
        
        <View style={styles.container}>
        
            <View style={styles.header}>
                <Image source={Logo} style={{width:'50%', marginLeft: 30, marginTop: 60}} resizeMode='contain'/>
            </View>
            
            <SafeAreaView>
            
            
        <ScrollView >

            <View style={styles.cardArea}>
                    {contactCard.map((item) => {
                        return (
                            <ContactCard item={item} />
                        )
                    })}
            </View>

            {/* <View style={{justifyContent: 'center', alignItems:'center'}}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>   
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View> */}
            </ScrollView>
        </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '333333',
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    container2:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        backgroundColor: '#cacaca',
        width: '100%',
        height: '24%',
        marginBottom: 20,
        justifyContent: 'left',
        flexDirection: 'row'
    }, 

    market:{

        // marginBottom:25,
        marginRight: 45,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
 
    },
    title:  {
        color: '#fdfdfd',
        fontSize: 35,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 10,
        marginRight: 10,
        marginLeft:25
    },

    button: {
        borderRadius: 7,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems:'center',
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
        justifyContent:'space-between',
        flexDirection: 'Column',
        flexWrap:'nowrap',
        justifyContent : 'center',
        alignItems: 'center',
        marginBottom: 200,


    },
})
