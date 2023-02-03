import {StyleSheet, View, Text} from 'react-native';



function GoalItem(props) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: "purple",
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
        alignSelf: "flex-start"
    },
    text: {
        color: "white",
    }
})