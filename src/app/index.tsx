import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>CrystalChat</Text>

      <Text style={styles.slogan}>
        Connect Clearly. Chat Instantly.
      </Text>

      <Text style={styles.description}>
        A simple, secure and modern way to connect with people.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    backgroundColor: "#ffffff",
  },

  logo: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 10,
  },

  slogan: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },

  description: {
    textAlign: "center",
    fontSize: 15,
    marginBottom: 40,
  },

  button: {
    width: "80%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },

  buttonText: {
    fontSize: 17,
    fontWeight: "bold",
  },

  loginButton: {
    padding: 15,
  },

  loginText: {
    fontSize: 17,
  },
});
