import { View, StyleSheet } from "react-native";
import Colors from "../contants/Colors";
function Card({children}){
    return(
        <View style={styles.card}>{children}</View>
    );}
export default Card;
const styles=StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: 16,
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 6

    },
});