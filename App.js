import { ImageBackground, StyleSheet, View, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen'
import GameScreen from './screens/GameScreen';
import { LinearGradient } from "expo-linear-gradient"
import { useState } from 'react';
import Colors from './contants/Colors';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar'



export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const [isGameOver, setIsGameOver] = useState(true)
  const [numOfRounds, setNumOfRounds] = useState(0)

  const [isAppLoading] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if (!isAppLoading) {
    return <AppLoading />
  }

  function pickedNumberHandler(enterPickedNumber) {
    setUserNumber(enterPickedNumber)
    setIsGameOver(false)
  }

  function startNewGameHandler() {
    setNumOfRounds(0)
    setIsGameOver(true)
    setUserNumber(null)
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber1={userNumber} gameOver={gameOverHandler} />
  }

  if (isGameOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} numOfRounds={numOfRounds} startNewGame={startNewGameHandler} />
  }

  function gameOverHandler(numberOfRound) {
    setIsGameOver(true)
    setNumOfRounds(numberOfRound)
  }

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
        <ImageBackground
          source={require('./assets/images/dices.png')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.imageBackgrounf}>
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  ); 
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageBackgrounf: {
    opacity: 0.15
  }
});
