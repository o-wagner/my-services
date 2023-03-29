import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Plus, ShoppingCart, ForkKnife, Phone , Drop , FirstAid } from 'phosphor-react-native';

export default function Card({ item, onPress}){
    return(
        <TouchableOpacity key={item.id} style={styles.card} onPress={onPress}>
            {item.icon === 'ShoppingCart' && <ShoppingCart size={55} color='#3b0e55' />}
            {item.icon === 'Phone' && <Phone size={55} color='#3b0e55' />}
            {item.icon === 'ForkKnife' && <ForkKnife size={55} color='#3b0e55' />}
            {item.icon === 'Drop' && <Drop size={55} color='#3b0e55' />}
            {item.icon === 'FirstAid' && <FirstAid size={55} color='#3b0e55' />}
            {item.icon === 'Plus' && <Plus size={55} color='#3b0e55' />}
            <Text style={styles.cardTitle}>{item.title}</Text>
        </TouchableOpacity>
        
    )

}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#dddddd' ,
        width: 135,
        height: 135,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 10,
    },
    cardTitle: {
        color: '#3b0e55',
        fontSize: 19,
        fontWeight: '600',
        textTransform: 'uppercase',
        marginTop: 10,
        textAlign: 'center'
    }

    }
)