import { View, Text, Button } from "react-native";
import { router, type Href } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 16, padding: 24 }}>
      <Text style={{ fontSize: 18 }}>Project Next Page — Day 2: Scaffold</Text>
      <Button title="Go to Profile" onPress={() => router.push("/profile" as Href)} />
    </View>
  );
}
