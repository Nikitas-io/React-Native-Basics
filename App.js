import {useState} from 'react'
import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from 'expo-status-bar';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  // The visibility state of the add new goal modal.
  const [modalVisibility, setModalVisibility] = useState(false);
  // The goals state holds an array of all the goals.
  const [goals, setGoals] = useState([]);
  
  function openModal() {
    setModalVisibility(true);
  }
  function closeModal() {
    setModalVisibility(false);
  }

  function addGoalHandler(enteredGoalText) {
    // Add a new goal to the current goals.
    setGoals(currentGoals => [
      ...currentGoals, 
      {
        text: enteredGoalText,
        id: Math.random().toString()
      }
    ]);
    // Close the modal.
    closeModal();
  }

  function deleteGoalHandler(id) {
    console.log('delete')
    // Return all the goals except from the one that we want to delete.
    setGoals(currentGoals => currentGoals.filter((goal) => goal.id !== id))
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button 
          title="Add new goal" 
          color="purple"
          onPress={openModal}
        />
        {
          modalVisibility
          &&
          <GoalInput visible={modalVisibility} addGoalHandler={addGoalHandler} closeModal={closeModal}/>
        }
        <View style={styles.goalContainer}>
          <Text style={styles.goalListHeader}>The goal list: </Text>
          <FlatList 
            data={goals}
            renderItem={(goalData) => {
              return <GoalItem text={goalData.item.text} onDeleteItem={deleteGoalHandler} id={goalData.item.id} />
            }}  
            keyExtractor={(item) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, // To make sure that the app container takes up all the available height on the screen.
    paddingTop: 50,
    paddingHorizontal: 15,
    justifyContent: "space-evenly"
  },
  goalContainer: {
    flex: 1
  },
  goalListHeader: {
    borderTopColor: "gray",
    borderTopWidth: 1,
    marginTop: 23,
    paddingTop: 10,
    fontWeight: "bold",
    color: "white"
  }
});
