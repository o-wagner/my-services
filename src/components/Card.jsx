import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Plus, ShoppingCart, ForkKnife, Phone , Drop , FirstAid } from 'phosphor-react-native';

export default function Card({ item, onPress}){
    return(
        <TouchableOpacity key={item.id} style={styles.card} onPress={onPress}>
            {item.icon === 'ShoppingCart' && <ShoppingCart size={55} color='#d8d8d8' />}
            {item.icon === 'Phone' && <Phone size={55} color='#d8d8d8' />}
            {item.icon === 'ForkKnife' && <ForkKnife size={55} color='#d8d8d8' />}
            {item.icon === 'Drop' && <Drop size={55} color='#d8d8d8' />}
            {item.icon === 'FirstAid' && <FirstAid size={55} color='#d8d8d8' />}
            {item.icon === 'Plus' && <Plus size={55} color='#d8d8d8' />}
            <Text style={styles.cardTitle}>{item.title}</Text>
        </TouchableOpacity>
        
    )

}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#0000003b' ,
        width: 135,
        height: 135,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 10,
        shadowColor: 'black',
        shadowOffset: {width: 8, height: 10},
        shadowOpacity: 0.6,
        shadowRadius: 7,
    },
    cardTitle: {
        color: '#d8d8d8',
        fontSize: 17,
        fontWeight: '600',
        textTransform: 'uppercase',
        marginTop: 10,
        textAlign: 'center'
    }

    }
)