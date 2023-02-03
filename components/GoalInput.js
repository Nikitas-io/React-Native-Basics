import { StyleSheet, View, TextInput, Button } from "react-native";
import {useState} from 'react'

function GoalInput(props) {

    // The enteredGoalText is the functional component's state which is updated through the 
    // setEnteredGoalText function and is initially set to an empty string through useState.
    const [enteredGoalText, setEnteredGoalText] = useState('');

    /**
     * Get the typed text from the input and set it to the state.
     * @param {*} enteredText the text typed in by the user.
     */
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    /**
     * The add new goal button was pressed.
     */
    function addNewGoal() {
        // Pass the current text input state to the parent component.
        props.addGoalHandler(enteredGoalText);
        // Clear the text input state.
        setEnteredGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Write your goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button 
          title="Add goal"
          onPress={addNewGoal}
        />
      </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
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
})