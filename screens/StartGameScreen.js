import { TextInput, View, StyleSheet, Alert, Text, useWindowDimensions,KeyboardAvoidingView,
ScrollView } from "react-native";
import PrimaryButtom from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../contants/Colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

function StartGameScreen({ onPickedNumber }) {

    const [enterInputText, setEnterInputText] = useState('');

    const {width, height} = useWindowDimensions();

    function numberInputHandler(enterText) {
        setEnterInputText(enterText)
    }
    function resetInput() {
        setEnterInputText('')
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enterInputText)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid Number!!",
                "Number has to be a number between 1 ans 99",
                [{ text: "Okay", style: "destructive", onPress: resetInput }]);
            return;
        }
        onPickedNumber(chosenNumber)

    }

    const marginTopDimension = height < 380 ? 30 : 60

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={[styles.rootContainer,{marginTop:marginTopDimension}]}>
            <Title>Guess any Number</Title>
            <Card>
                <InstructionText>Enter a Number?</InstructionText>
                <TextInput style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    onChangeText={numberInputHandler}
                    value={enterInputText}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButtom onButtonPress={resetInput}>Reset</PrimaryButtom>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButtom onButtonPress={confirmInputHandler}>Confirm</PrimaryButtom>
                    </View>
                </View>
            </Card>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
    );

}
export default StartGameScreen;

const styles = StyleSheet.create({
   
   screen:{
    flex:1
   },
    rootContainer: {
        flex: 1,
        marginTop: 60,
        alignItems: 'center'
    },

    numberInput: {
        borderBottomColor: Colors.accent500,
        height: 50,
        width: 50,
        textAlign: "center",
        fontSize: 32,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",

    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    },

});