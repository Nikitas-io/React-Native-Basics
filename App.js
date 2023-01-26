import {useState} from 'react'
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  // The enteredGoalText is the functional component's state which is updated through the 
  // setEnteredGoalText function and is initially set to an empty string through useState.
  const [enteredGoalText, setEnteredGoalText] = useState('');
  // The goals state holds an array of all the goals.
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  
  function addGoalHandler() {
    console.log('The entered text: ', enteredGoalText);
    setGoals(currentGoals => [...currentGoals, enteredGoalText]);
    console.log('All the goals: ', goals);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Write your goal"
          onChangeText={goalInputHandler}
        />
        <Button 
          title="Add goal"
          onPress={addGoalHandler}
        />
      </View>
      <View style={styles.goalContainer}>
        <Text style={styles.goalList}>The goal list: </Text>
        {goals.map((goal, index) => {
          return (
            <Text key={index}>{goal}</Text>
          )
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, // To make sure that the app container takes up all the available height on the screen.
    paddingTop: 50,
    paddingHorizontal: 15,
    justifyContent: "space-evenly"
  },
  inputContainer: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    width: "70%",
    padding: 8
  },
  goalContainer: {
    flex: 1
  },
  goalList: {
    borderTopColor: "gray",
    borderTopWidth: 1,
    marginTop: 23,
    paddingTop: 10,
    fontWeight: "bold"
  }
});
