import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../contants/Colors";

function PrimaryButtom({ children, onButtonPress }) {
    function onPressHandler() {
         onButtonPress()
    }

    return (
        <View style={style.buttonOuterContainer}>
            <Pressable style={({ pressed }) => pressed ? [style.buttonInnerContainer, style.pressed]
             : style.buttonInnerContainer
            }
              onPress={onPressHandler}
               android_ripple={{ color: Colors.primary600 }}>
                <Text style={style.buttonText}>{children}</Text>
            </Pressable>
        </View>

    )
}
export default PrimaryButtom;

const style = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 5,
        overflow: "hidden"

    },

    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    },
    pressed: {
        opacity: 0.75,
    }
});