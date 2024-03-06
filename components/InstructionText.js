import { View, StyleSheet,Text } from "react-native";
import Colors from "../contants/Colors";
function InstructionText({children}){
    return(
        <Text style={styles.instructionText}>{children}</Text>
            );
}
export default InstructionText;
const styles=StyleSheet.create({
    instructionText: {
        fontFamily:'open-sans',
        fontSize: 18,
        color: Colors.accent500,
        alignItems: 'center',
    },
});