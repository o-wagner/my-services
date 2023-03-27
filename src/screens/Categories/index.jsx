import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet , TouchableOpacity } from 'react-native';

export default function Categories(){
    const navigation = useNavigation();
    return(
        <ImageBackground
            style={styles.container}
            source={{
                uri:
                    'https://png.pngtree.com/thumb_back/fh260/background/20210722/pngtree-dark-purple-gradient-wallpaper-background-image_750294.jpg',
            }}
            resizeMode="stretch"
        >

        <View style={styles.container}>
            <Text style={styles.title}>Categorias</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:  {
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
    }

})
