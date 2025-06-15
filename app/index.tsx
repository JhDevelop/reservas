import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, View, Text, ImageBackground, SafeAreaView } from "react-native";
import { Button, Input } from "@rneui/themed";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

export interface User {
  userName: string;
  userPassword: string;
}

export interface Session {
  token: string;
  created_at: Date | null;
  active: string | null;
}

export default function LoginScreen() {
  const [user, setUser] = useState<User>({ userName: "", userPassword: "" });
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState<Session>({
    token: "",
    created_at: null,
    active: "",
  });

  const router = useRouter();

  const handleLogin = async () => {
    try {
      /*const response = await fetch("http://192.168.1.4:3300/api/sesion/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
*/
      //const data = await response.json();
      //setSession(data);

      //if (data.active === "1") {
      router.replace("/(tabs)");
      //} else {
      //Alert.alert("Error", "Credenciales incorrectas");
      //}
    } catch (error) {
      Alert.alert("Error", "No se pudo conectar con el servidor");
    }
  };

  const signInWithEmail = () => {
    setLoading(true);
    handleLogin().finally(() => setLoading(false));
  };

  const signUpWithEmail = () => {
    setLoading(true);
    handleLogin().finally(() => setLoading(false));
  };
  return (
    <ImageBackground source={require("./../assets/images/LoginBack.png")} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.blurContainer}>
          <BlurView intensity={70} style={styles.blur}>
            <LinearGradient
              colors={[
                "rgba(9, 9, 9, 0.8)",
                "rgba(49, 29, 29, 0.6)",
                "rgba(49, 29, 29, 0.4)",
                "rgba(218, 200, 218, 0.2)",
              ]}
              style={styles.container}
            >
              <Text style={styles.title}>Iniciar Sesión</Text>
              <Input
                label="Email"
                leftIcon={{ type: "father", name: "mail", color: "#ffd700" }}
                onChangeText={(value) => setUser((prevUser) => ({ ...prevUser, userName: value }))}
                placeholder="email@address.com"
                autoCapitalize="none"
                inputStyle={{ color: "#FFF" }}
                inputContainerStyle={styles.input}
              />
              <Input
                label="Password"
                leftIcon={{ type: "father", name: "lock", color: "#ffd700" }}
                onChangeText={(value) => setUser((prevUser) => ({ ...prevUser, userPassword: value }))}
                secureTextEntry
                placeholder="Password"
                autoCapitalize="none"
                inputStyle={{ color: "#FFF" }}
                inputContainerStyle={styles.input}
              />
              <Button title="Iniciar Sesión" titleStyle={{ color: 'black' }} disabled={loading} onPress={signInWithEmail} buttonStyle={styles.button} />
              <Button title="Registrarse" titleStyle={{ color: 'black' }} disabled={loading} onPress={signUpWithEmail} buttonStyle={styles.button} />
            </LinearGradient>
          </BlurView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  blurContainer: {
    borderRadius: 30,
    overflow: "hidden",
  },
  blur: {
    width: "100%",
  },
  container: {
    padding: 20,
    minWidth: 300,
    borderRadius: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#ffd700",
  },
  input: {
    borderRadius: 25,
    color: "#FFF",
    backgroundColor: "rgba(12,12,12,0.7)",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "#ffd700",
    borderRadius: 25,
    color: '#010101',
    tintColor: '#010101',
    padding: 15,
    alignItems: "center",
    marginBottom: 10,
  },
});

