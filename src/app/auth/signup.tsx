import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.link}>
        Already have an account? Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    padding:25
  },

  title:{
    fontSize:32,
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:30
  },

  input:{
    borderWidth:1,
    padding:15,
    marginBottom:15,
    borderRadius:10
  },

  button:{
    padding:15,
    borderRadius:10,
    alignItems:"center"
  },

  buttonText:{
    fontSize:18,
    fontWeight:"bold"
  },

  link:{
    textAlign:"center",
    marginTop:20
  }
});
