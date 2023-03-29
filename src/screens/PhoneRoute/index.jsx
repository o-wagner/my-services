import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet , TouchableOpacity } from 'react-native';

export default function PhoneRoute(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Serviços Locais</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
        </View>
    
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
        fontSize: 35,
        fontWeight:'800',
        textTransform: 'uppercase',
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
