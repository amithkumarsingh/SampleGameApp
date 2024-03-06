import { Text, View, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButtom from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import { Ionicons } from "@expo/vector-icons"
import GuessLogNumber from "../components/Game/GuessLogNumber";
function generateRandomBetween(min, max, exclude) {
    const ranNum = Math.floor(Math.random() * (max - min)) + min;
    if (ranNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return ranNum;
    }
}

let minBoundry = 1;
let maxBoundry = 100;
function GameScreen({ userNumber1, gameOver }) {
    const initialNum = generateRandomBetween(1, 100, userNumber1);
    const [currentGuess, setCurrentGuess] = useState(initialNum);
    const [guessRounds, setGuessRounds] = useState([initialNum]);
    const { width, height } = useWindowDimensions();


    useEffect(() => {
        if (currentGuess == userNumber1) {
            gameOver(guessRoundsListLength);
        }
    })
    useEffect(() => {
        minBoundry = 1;
        maxBoundry = 100;
    }, [])

    function nextGuessHandler(direction) { // "lower", "greater"
        if ((direction === 'lower' && currentGuess < userNumber1) ||
            direction === 'greater' && currentGuess > userNumber1) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [{
                text: 'sorry!', style: 'cancel'
            }])
            return;
        }
        if (direction === 'lower') {
            maxBoundry = currentGuess;
        } else if (direction == 'greater') {
            minBoundry = currentGuess + 1;
        }
        const newRanNum = generateRandomBetween(minBoundry, maxBoundry, currentGuess);
        setCurrentGuess(newRanNum)
        setGuessRounds(previousGuessNumber => [newRanNum, ...previousGuessNumber])
    }

    const guessRoundsListLength = guessRounds.length;

    let content = <>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButtom onButtonPress={nextGuessHandler.bind(this, "lower")}>
                        <Ionicons name="md-remove-circle" size={24} />
                    </PrimaryButtom>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButtom onButtonPress={nextGuessHandler.bind(this, "greater")}>
                        <Ionicons name="md-add-circle" size={24} />

                    </PrimaryButtom>
                </View>
            </View>
        </Card>
    </>

    if (width > 500) {
        content = <>
            <InstructionText style={styles.instructionText}>Higher or Lower?
            </InstructionText>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButtom onButtonPress={nextGuessHandler.bind(this, "lower")}>
                        <Ionicons name="md-remove-circle" size={24} />
                    </PrimaryButtom>
                </View>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <PrimaryButtom onButtonPress={nextGuessHandler.bind(this, "greater")}>
                        <Ionicons name="md-add-circle" size={24} />

                    </PrimaryButtom>
                </View>
            </View>
        </>

    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Number</Title>
            {content}
            <View>
                {/* {guessRounds.map(guessRounds => <Text key={guessRounds}>{guessRounds}</Text>)} */}
                <FlatList data={guessRounds}
                    renderItem={(itemData) => <GuessLogNumber roundNum={guessRoundsListLength - itemData.index}
                        guess={itemData.item} />}
                    keyExtractor={(item) => item} />
            </View>
        </View>
    )
}
export default GameScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        margin: 16,
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    },
    instructionText: {
        marginTop: 5,
        marginBottom: 12,
    },

    listContainer: {
        flex: 1,
        marginBottom: 24,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

});