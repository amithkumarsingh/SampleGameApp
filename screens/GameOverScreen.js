import { View, Text, Image, StyleSheet,Dimensions, useWindowDimensions, ScrollView } from "react-native";
import Title from "../components/Title";
import Colors from "../contants/Colors";
import PrimaryButtom from "../components/PrimaryButton";
function GameOverScreen({userNumber,numOfRounds,startNewGame}) {

    const{width,height}=useWindowDimensions();
    let imageSize=300;

    if(imageSize < 380){
        imageSize=150;

    }
    if(height< 400){
        imageSize=80;

    }

    const imageStyle={
        width:imageSize,
        height:imageSize,
        borderRadius:imageSize/2
    };

    return (
        <ScrollView style={{flex:1}}>
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style={[styles.imageContainer, imageStyle]}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/success.png')} />
            </View>
            <Text style={styles.summeyText}>Your phone needed
                <Text style={styles.highlight}> {numOfRounds} </Text>
                rounds to guess the number
                <Text style={styles.highlight}> {userNumber} </Text></Text>
                <PrimaryButtom onButtonPress={startNewGame}>Start New Game</PrimaryButtom>
        </View>
        </ScrollView>
    );
}
export default GameOverScreen;
// const deviceWidth=Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    imageContainer: {
       /*  width: deviceWidth < 380 ? 150: 300,
        height: deviceWidth < 380 ? 150: 300,
        borderRadius: deviceWidth < 380 ? 75: 150, */
        borderWidth: 3,
        borderColor: Colors.accent500,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summeyText:{
        fontFamily:'open-sans',
        fontSize:24,
        textAlign:'center',
        marginBottom:24,
    },
    highlight:{
        fontFamily:'open-sans-bold',
        color:Colors.primary600,
        padding:100,
        margin:100
    },

});