import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Pressable, SafeAreaView, StyleSheet, View } from "react-native";

export function HeaderMap() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <ButtonHeader iconName="arrow-back" func={() => router.replace("/(tabs)")} />
        <ButtonHeader iconName="search" func={() => console.log("Search")} />
      </View>
    </SafeAreaView>
  );
}

const ButtonHeader = ({ iconName, func }: { iconName: string; func: () => void }) => {
  return (
    <Pressable
      onPress={func}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
        },
        styles.button,
      ]}
    >
      {({ pressed }) => <Ionicons name={iconName} size={24} color="#687076" color={pressed ? "#0a7ea4" : "#687076"} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0)",
    alignSelf: "center",
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    paddingBottom: 0,
    height: 146,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 68,
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "stretch",
    padding: 10,
  },
  button: {
    padding: 12,
    borderRadius: 100,
  },
});

