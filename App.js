import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Write your goal"/>
        <Button title="Add goal"/>
      </View>
      <View style={styles.goalContainer}>
        <Text style={styles.goalList}>The goal list: </Text>
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
    paddingTop: 10
  }
});
