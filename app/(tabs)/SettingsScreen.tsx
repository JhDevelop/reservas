import React from "react";
import { View, Text, Pressable, Switch, StyleSheet, ScrollView, Image } from "react-native";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image source={{ uri: "https://picsum.photos/100" }} style={styles.avatar} />
        <View style={styles.profileText}>
          <Text style={styles.name}>Lidia Terecia</Text>
          <Text style={styles.email}>lidia@example.com</Text>
        </View>
      </View>

      <ScrollView style={styles.optionsContainer}>
        <Text style={styles.sectionTitle}>Account</Text>
        <Pressable style={styles.option}>
          <Text style={styles.optionText}>Edit Profile</Text>
        </Pressable>
        <Pressable style={styles.option}>
          <Text style={styles.optionText}>Change Password</Text>
        </Pressable>

        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.option}>
          <Text style={styles.optionText}>Enable Notifications</Text>
          <Switch value={true} />
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Dark Mode</Text>
          <Switch value={false} />
        </View>

        <Text style={styles.sectionTitle}>Support</Text>
        <Pressable style={styles.option}>
          <Text style={styles.optionText}>Help Center</Text>
        </Pressable>
        <Pressable style={styles.option}>
          <Text style={styles.optionText}>Contact Us</Text>
        </Pressable>

        <Text style={styles.sectionTitle}>Others</Text>
        <Pressable style={styles.option}>
          <Text style={[styles.optionText, styles.logoutText]}>Log Out</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FBFC",
  },
  header: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileText: {
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  email: {
    fontSize: 14,
    color: "#6B7280",
  },
  optionsContainer: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 8,
    marginTop: 16,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  optionText: {
    fontSize: 14,
    color: "#333333",
  },
  logoutText: {
    color: "#E63946",
    fontWeight: "bold",
  },
});

export default SettingsScreen;

