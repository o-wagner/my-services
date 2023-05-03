import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { ShoppingCart, ForkKnife, Phone , Drop , FirstAid, CaretRight, Hamburger } from 'phosphor-react-native';

export default function Card({ key , item, onPress}){
    return(
        <TouchableOpacity key={key} style={styles.card} onPress={onPress}>
            <View style={styles.iconTitle}>
            {item.icon === 'ShoppingCart' && <ShoppingCart size={35} color='#d8d8d8' />}
            {item.icon === 'Phone' && <Phone size={35} color='#d8d8d8' />}
            {item.icon === 'ForkKnife' && <ForkKnife size={35} color='#d8d8d8' />}
            {item.icon === 'Drop' && <Drop size={35} color='#d8d8d8' />}
            {item.icon === 'FirstAid' && <FirstAid size={35} color='#d8d8d8' />}
            {item.icon === 'Hamburger' && <Hamburger size={35} color='#d8d8d8' />}
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