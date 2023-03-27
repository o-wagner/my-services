import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Plus, ShoppingCart, ForkKnife, Phone , Drop , FirstAid } from 'phosphor-react-native';

export default function Card({ item, onPress}){
    return(
        <TouchableOpacity key={item.id} style={styles.card} onPress={onPress}>
            {item.icon === 'ShoppingCart' && <ShoppingCart size={50} color="#43425D" />}
            {item.icon === 'Phone' && <Phone size={50} color="#43425D" />}
            {item.icon === 'ForkKnife' && <ForkKnife size={50} color="#43425D" />}
            {item.icon === 'Drop' && <Drop size={50} color="#43425D" />}
            {item.icon === 'FirstAid' && <FirstAid size={50} color="#43425D" />}
            {item.icon === 'Plus' && <Plus size={50} color="#43425D" />}
            <Text style={styles.cardTitle}>{item.title}</Text>
        </TouchableOpacity>
        
    )

}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#bcb8b8',
        width: 120,
        height: 120,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 10
    },
    cardTitle: {
        color: '#43425D',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: 10,
        textAlign: 'center'
    }




    }
)