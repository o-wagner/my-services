import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { Plus, ShoppingCart, ForkKnife, Phone , Drop , FirstAid, CaretRight } from 'phosphor-react-native';

export default function Card({ item, onPress}){
    return(
        <TouchableOpacity key={item.key} style={styles.card} onPress={onPress}>
            <View style={styles.iconTitle}>
            {item.icon === 'ShoppingCart' && <ShoppingCart size={35} color='#d8d8d8' />}
            {item.icon === 'Phone' && <Phone size={35} color='#d8d8d8' />}
            {item.icon === 'ForkKnife' && <ForkKnife size={35} color='#d8d8d8' />}
            {item.icon === 'Drop' && <Drop size={35} color='#d8d8d8' />}
            {item.icon === 'FirstAid' && <FirstAid size={35} color='#d8d8d8' />}
            {item.icon === 'Plus' && <Plus size={35} color='#d8d8d8' />}
            <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
            
            <CaretRight size={30} color='#d8d8d8'/>
        </TouchableOpacity>
        
    )

}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#0000003b' ,
        width: "100%",
        height: 110,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 6,
        shadowColor: 'black',
        shadowOffset: {width: 8, height: 10},
        shadowColor: 'rgba(0,0,0, 0.1)',
        shadowOpacity: 0.6,
        shadowRadius: 7,
        justifyContent: 'space-between',
        paddingHorizontal: 35,

    },
    iconTitle:{
        flexDirection: 'row',
        alignItems: 'center',
 
    },

    cardTitle: {
        color: '#d8d8d8',
        fontSize: 17,
        fontWeight: '600',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginLeft: 23,
    }

    }
)