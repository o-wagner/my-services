import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Logo from '../../components/imgs/Vector.png';

export default function Home() {
    const navigation = useNavigation();
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
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Categories')}>
                <Text style={styles.buttonText}>Categorias</Text>
            </TouchableOpacity>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'orange',
        fontSize: 50,
        fontWeight: 'bold'
    },
    buttonText: {
        backgroundColor: 'grey',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 15,
        marginTop: 10
    },
    logo: {
        height: 50,
        bottom: 200,
    },

    categoria:{
        
    }

})