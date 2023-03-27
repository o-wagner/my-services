import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, TouchableOpacity, Image, ImageBackground , View } from 'react-native';
import Card from '../../components/Card';
import BackArrow from '../../components/imgs/BackArrow.png';
import Logo from '../../components/imgs/Vector.png';


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
            title: 'Serviços Locais',
            Route: 'PhoneRoute',
            icon: 'Phone'
        },
        {
            id: '3',
            title: 'Comida',
            Route: 'ComidaRoute',
            icon: 'ForkKnife',
        },
        {
            id: '4',
            title: 'Gás & Água',
            Route: 'WaterRoute',
            icon: 'Drop'

        },
        {
            id: '5',
            title: 'Emergência',
            Route: 'EmergecyRoute',
            icon: 'FirstAid'

        },
        {
            id: '6',
            title: 'Mais',
            Route: 'MaisRoute',
            icon: 'Plus'

        },

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
                <Image source={Logo} resizeMode="contain" style={styles.logo} />
                <Text style={styles.title}>CATEGORIAS</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Image source={BackArrow} style={styles.backArrow} resizeMode="contain" />
                </TouchableOpacity>
            </View>
            <View style={styles.cardArea}>
                {pages.map((item) => {
                    return (
                        <Card item={item} onPress={() => navigation.navigate(item.route)} />
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

    backArrow: {
        position: 'absolute',
        bottom: -10,
        right: 120,
        width: 30,
    },

    header:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 10,
        padding: 85,
    },
    cardArea: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // padding: 120,
        marginTop: 250,
        margin: 40,
    },
    card: {
        backgroundColor: '#bcb8b8',
        width: 120,
        height: 120,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    cardTitle: {
        color: '#43425D',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: 10,
    },
    logo: {
        width: 180,
        height: 100,
    },

    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        top: 170,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 18,
    },



})