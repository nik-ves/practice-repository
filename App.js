// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 50, flexDirection: "row" }}>
      <View
        style={{
          backgroundColor: "red",
          width: 100,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
      </View>

      <View
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>

      <View
        style={{
          backgroundColor: "green",
          width: 100,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View>
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Course goal"
          style={{
            borderColor: "black",
            borderWidth: 1,
            padding: 10,
            width: "80%",
          }}
        />

        <Button title="ADD" />
      </View>
      <View></View> */}
    </View>
  );
}

const styles = StyleSheet.create({});
