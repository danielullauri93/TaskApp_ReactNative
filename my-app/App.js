import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import TaskFormScreen from "./screens/Task";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Task App",
            headerStyle: { backgroundColor: "rgba(40, 40, 40, 1)" },
            headerTitleStyle: {
              color: "rgba(235, 219, 178, 1)",
              fontSize: 20,
            },
            headerTitleAlign: "left",
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("TaskForm")}>
                <Text style={{ color: "rgba(235, 219, 178, 1)", fontSize: 17 }}>
                  New
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="TaskForm" component={TaskFormScreen} options={{
          title: 'Create Task',
          headerStyle: { backgroundColor: "rgba(40, 40, 40, 1)" },
          headerTitleStyle: {
            color: "rgba(235, 219, 178, 1)",
            fontSize: 20,
          },
          headerTintColor: "rgba(235, 219, 178, 1)"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
