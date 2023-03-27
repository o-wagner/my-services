import { useNavigation } from '@react-navigation/native';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Logo from '../../components/imgs/Vector.png';
import BackArrow from '../../components/imgs/BackArrow.png';
import { Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity } from 'react-native';



export default function Home() {
    const navigation = useNavigation();

    const pages = [
        {
            id: '1',
            title: 'Mercados',
            Route: 'MarketRoute',
            icon: 'ShoppingCart'
        },
        {
            id: '2',
            title: 'Emergência',
            Route: 'AmbulanceRoute',
            icon: 'FirstAid',
            
        },
        {
            id: '3',
            title: 'Comida',
            Route: 'FoodRoute',
            icon: 'ForkKnife',
        },
        {
            id: '4',
            title: 'Mais',
            Route: 'PlusRoute',
            icon: 'Plus'
        }
    ]

    return (

        <ImageBackground
            style={styles.container}
            source={{
                uri:
                    'https://png.pngtree.com/thumb_back/fh260/background/20210722/pngtree-dark-purple-gradient-wallpaper-background-image_750294.jpg',
            }}
            resizeMode="stretch"
        >
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={BackArrow} style={styles.backArrow} resizeMode="stretch"/>
                </TouchableOpacity>

                <Image source={Logo} resizeMode="contain" style={styles.logo} />
                <Text style={styles.title}>CATEGORIAS</Text>
                
                
                
            </View>
            

            <View style={styles.cardArea}>
                {pages.map((item) => {
                    return (
                        <Card key={item.id} item={item} onPress={() => navigation.navigate(item.route)} />
                    )
                })}
            </View>
            
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    backArrow:{
        height: 35,
        width: 35,
        position:'absolute',
        right: 100,
        top: 35,
    },
    header:{
        marginTop: 80,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },

    logo: {
        width: 180,

    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 18,
    },
    cardArea:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        margin: 30,
    }
  
    

})