import {StyleSheet, View, Text, Pressable} from 'react-native';



function GoalItem(props) {

    return (
        <View style={styles.listItem}>
            <Pressable 
                onPress={props.onDeleteItem.bind(this, props.id)}
                android_ripple={{color: "gray"}} 
                style={(pressData) => pressData.pressed && styles.pressedItem}
            >
                <Text style={styles.text}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: "purple",
        borderRadius: 5,
        marginVertical: 5,
        alignSelf: "flex-start"
    },
    text: {
        padding: 10,
        color: "white",
    },
    pressedItem: {
        opacity: 0.5
    }
})