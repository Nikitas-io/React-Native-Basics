import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
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
        <Modal visible={props.visible} animationType="slide">
            
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/trademark.png')} />
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Write your goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add goal" onPress={addNewGoal} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.closeModal} color="#ed649a"/>
                    </View>
                </View>
            </View>
            
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({

    image: {
        marginHorizontal: "10%",
        width: "80%",
        resizeMode: "contain",
        height: 70
    },
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        borderWidth: 1,
        borderColor: "gray",
        width: "80%",
        padding: 8
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        width: 100,
        marginHorizontal: 5,
        marginVertical: 10
    }
})