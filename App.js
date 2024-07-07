import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
      <Text style={styles.dummyText}>Test2</Text>

      <Button title="Test" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: "red",
    padding: 16,
  },
});
