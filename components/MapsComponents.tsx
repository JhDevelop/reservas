import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ButtonPrimaryAwesome, ButtonPrimaryIonicons } from "./buttons";

export interface LocationDetail {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  description: string;
  image: string;
  like: boolean
}


export function LocationDetails({
  locationDetail,
  like,
  route,
  func,
}: {
  locationDetail: LocationDetail;
  like: () => void;
  route: () => void;
  func: () => void;
}) {
  const [currentLocationDetail, setCurrentLocationDetail] = useState<LocationDetail>(locationDetail);

  useEffect(() => {
    setCurrentLocationDetail(locationDetail);
  }, [locationDetail]);

  const handleLike = () => {
    setCurrentLocationDetail((prevDetail) => ({
      ...prevDetail,
      like: !prevDetail.like,
    }));
    like();
  };

  return (
    <View style={styles.locationDetails}>
      <View style={styles.details}>
        <Image
          style={styles.image}
          source={{
            uri: currentLocationDetail.image,
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.locationName} numberOfLines={1}>
            {currentLocationDetail.name}
          </Text>
          <Text style={styles.locationDescription} numberOfLines={3}>
            {currentLocationDetail.description}
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <ButtonPrimaryIonicons
          iconName={currentLocationDetail.like === true ? "heart" : "outline"}
          title="Me gusta"
          func={handleLike}
        />
        <ButtonPrimaryAwesome
          iconName="route"
          title="Ruta"
          func={route}
          func1={func}
        />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    marginBottom: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 16,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  locationName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  locationDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationDetails: {
    width: 280,
    marginHorizontal: 10,
    padding: 12,
    borderRadius: 16,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
});

