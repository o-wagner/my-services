import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';


export default function Home() {
    const navigation = useNavigation();

    const pages = {
        id: '1',
        title: 'Market',
        Route: 'MarketRoute',
        icon: 'user'
    }
    {
        id: '2',
        title: 'Water',
        Route: 'WaterRoute',
        icon: 'user'
    }
    {
        id: '3',
        title: 'Ambulance',
        Route: 'AmbulanceRoute',
        icon: {Ambulance},
    }

    return (

        <ImageBackground
            style={styles.container}
            source={{
                uri:
                    'https://png.pngtree.com/thumb_back/fh260/background/20210722/pngtree-dark-purple-gradient-wallpaper-background-image_750294.jpg',
            }}
            resizeMode="stretch"
        >
            <Image source={Logo} resizeMode="contain" style={styles.logo} />
            <Text style={styles.title}>CATEGORIAS</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>

            </TouchableOpacity>
            
{/*             
            <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Categories')}>

            </TouchableOpacity>


            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Categories')}>

            </TouchableOpacity>

            <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate('Categories')}>

            </TouchableOpacity>

            <TouchableOpacity style={styles.button4} onPress={() => navigation.navigate('Categories')}>
            <Image source={Box} resizeMode='stretch' style={styles.categoria4} />
            </TouchableOpacity> */}

        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    backArrow:{
        position: 'absolute',
        bottom: 193,
        right: 100,
        width: 30,
    },

    logo: {
        width: 180,
        position: 'absolute',
        height: 100,
        top: 90,
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

    button1:{
        backgroundColor: '#D9D9D9',
        height: 120,
        width: 120,
        borderRadius: 8,
        marginTop: 30,
        position: 'absolute',
        top: 280,
        left: 60,
        justifyContent: 'center',
    },

    button2:{
        backgroundColor: '#d9d9d9',
        height: 120,
        width: 120,
        borderRadius: 8,
        marginTop: 30,
        position: 'absolute',
        top: 280,
        left: 210,
        justifyContent: 'center',
    },
    button3:{
        backgroundColor: '#d9d9d9',
        height: 120,
        width: 120,
        borderRadius: 8,
        marginTop: 30,
        position: 'absolute',
        top: 430,
        left: 60,
        justifyContent: 'center',
    },

    button4:{
        backgroundColor: '#d9d9d9',
        height: 120,
        width: 120,
        borderRadius: 8,
        marginTop: 30,
        position: 'absolute',
        top: 430,
        left: 210,
        justifyContent: 'center',
    },

    categoria1:{
        position: 'absolute',
        width: 55,
        height: 55,
        right: 34,
    },
    categoria2:{
        position: 'absolute',
        width: 55,
        height: 55,
        left: 34,
    },
    categoria3:{
        position: 'absolute',
        width: 55,
        height: 55,
        right: 34,
    },

    categoria4:{
        position: 'absolute',
        width: 60,
        height: 60,
        left: 30,
    },
    

})