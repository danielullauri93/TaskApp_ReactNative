import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TaskItem = ({ task, handleDelete }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("TaskForm", { id: task.id })}
      >
        <Text style={styles.itemTitle}>{task.title}</Text>
        <Text style={styles.itemDesc}>{task.description}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: "#ee5253", padding: 7, borderRadius: 5 }}
        onPress={() => handleDelete(task.id)}
      >
        <Text style={{ color: "#fff" }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "rgba(146, 131, 116, 1)",
    padding: 20,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
  },
  itemTitle: {
    color: "rgba(235, 219, 178, 1)",
  },
  itemDesc: {
    color: "rgba(60, 56, 54, 1)",
  },
});

export default TaskItem;
