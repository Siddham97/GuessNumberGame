import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text>The game is Over!</Text>
        <Text>Number of rounds: {props.roundsNumber}</Text>
        <Text>Number was: {props.userNumber}</Text>
        <View style={styles.button}>
          <Button
            title="New Game"
            onPress={props.onRestart}
            color={Colors.primary}
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 100,
    paddingTop: 10,
  },
  card: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    padding: 20,
    width: 300,
    height: 150,
  },
});

export default GameOverScreen;
