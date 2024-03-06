import { Text, StyleSheet, View } from "react-native";
import Colors from "../../contants/Colors";
function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 18,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:12
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
        //fontWeight: 'bold',
        fontFamily:'open-sans-bold'
    }
});