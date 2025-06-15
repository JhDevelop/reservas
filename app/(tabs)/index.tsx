import React from "react";
import { View, Text, TextInput, ScrollView, Image, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: "https://picsum.photos/50" }} style={styles.avatar} />
          <View style={styles.profileText}>
            <Text style={styles.name}>Lidia Terecia</Text>
            <Text style={styles.location}>Pontianak, Indonesia</Text>
          </View>
        </View>
        <Pressable>
          <Image source={{ uri: "https://picsum.photos/25" }} style={styles.notificationIcon} />
        </Pressable>
      </View>

      <View style={styles.searchContainer}>
        <TextInput placeholder="Search your destination" style={styles.searchInput} />
      </View>

      <View style={styles.activitiesContainer}>
        <Text style={styles.sectionTitle}>Activities</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizonalScroll}>
          {["Diving", "Surfing", "Biking"].map((activity, index) => (
            <Pressable key={index} style={styles.activityCard}>
              <Text style={styles.activityText}>{activity}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Destination</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizonalScroll}>
          {[
            {
              title: "Uluwatu Temple",
              location: "Pecatu, Bali, Indonesia",
              price: "Rp 700k/person",
              image: "https://picsum.photos/150",
            },
            {
              title: "Diamond Beach",
              location: "Nusa Penida, Bali, Indonesia",
              price: "Rp 820k/person",
              image: "https://picsum.photos/150",
            },
            {
              title: "Diamond Beach",
              location: "Nusa Penida, Bali, Indonesia",
              price: "Rp 820k/person",
              image: "https://picsum.photos/150",
            },
          ].map((item, index) => (
            <View key={index} style={styles.destinationCard}>
              <Image source={{ uri: item.image }} style={styles.destinationImage} />
              <View style={styles.destinationInfo}>
                <Text style={styles.destinationTitle}>{item.title}</Text>
                <Text style={styles.destinationLocation}>{item.location}</Text>
                <Text style={styles.destinationPrice}>{item.price}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Travel Packages</Text>
        <View style={styles.packageCard}>
          <Image source={{ uri: "https://picsum.photos/1300/900" }} style={styles.packageImage} />
          <View style={styles.packageInfo}>
            <Text style={styles.packageTitle}>Package Details</Text>
            <Text style={styles.packagePrice}>Rp 970k/person</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FBFC",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileText: {
    marginLeft: 8,
  },
  name: {
    fontSize: 14,
    color: "#6B7280",
  },
  location: {
    fontSize: 16,
    fontWeight: "bold",
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  searchContainer: {
    paddingHorizontal: 16,
  },
  searchInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  activitiesContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  activityCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 12,
    marginRight: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  activityText: {
    fontSize: 14,
    fontWeight: "500",
  },
  section: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  destinationCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  destinationImage: {
    width: "auto",
    height: 120,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  destinationInfo: {
    padding: 8,
  },
  destinationTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  destinationLocation: {
    fontSize: 12,
    color: "#6B7280",
  },
  destinationPrice: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 4,
  },
  packageCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  packageImage: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  packageInfo: {
    padding: 8,
  },
  packageTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  packagePrice: {
    fontSize: 12,
    color: "#6B7280",
  },
  horizonalScroll: {
    padding: 4,
  },
});

export default HomeScreen;

