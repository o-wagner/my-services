import { TouchableOpacity, Text , StyleSheet} from 'react-native'

export default function Button({ label, onPress, style, textStyle }) {

    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.buttonText, textStyle]}>{label}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6700B8',
        height: 40,
        borderRadius: 8,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
}
)
