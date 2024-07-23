import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";
import { useState, useRef } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  StyleSheet,
  Linking,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const router = useRouter();
  const { bottom } = useSafeAreaInsets();

  // const validateEmail = (email: string) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  // const validatePassword = (password: string) => {
  //   const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  //   return passwordRegex.test(password);
  // };

  const openLink = () => {
    Linking.openURL("/");
  };

  const sendOTP = async () => {
  //   setEmailError("");
  //   setPasswordError("");

  //   if (!validateEmail(userEmail)) {
  //     setEmailError("Please enter a valid email address.");
  //     return;
  //   }

  //   if (!validatePassword(userPassword)) {
  //     setPasswordError(
  //       "Password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long."
  //     );
  //     return;
  //   }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push(`/verify/${userName}`); // Ensure the path matches your routing setup
    }, 500);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      {loading && (
        <View style={[StyleSheet.absoluteFill, styles.loading]}>
          <ActivityIndicator size="large" color={Colors.primary} />
          <Text style={{ fontSize: 16, padding: 10 }}>
            Hold on! Almost done! 🦍
          </Text>
        </View>
      )}
      <View style={styles.container}>
        <Text style={styles.description}>
          Chimping will need to verify your account.
        </Text>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={userName}
              onChangeText={(text) => {
                setUserName(text);
                // Add additional logic to check if username exists
              }}
            />
          </View>
          <View style={styles.listItem}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={userEmail}
              onChangeText={setUserEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              ref={emailInputRef}
            />
          </View>
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}
          <View style={styles.listItem}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={userPassword}
              onChangeText={setUserPassword}
              secureTextEntry
              ref={passwordInputRef}
            />
          </View>
          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}
        </View>
        <Text style={styles.legal}>
          You must be{" "}
          <Text style={styles.link} onPress={openLink}>
            at least 16 years old
          </Text>{" "}
          to register.
        </Text>
        <View style={{ flex: 1 }}></View>

        <TouchableOpacity
          style={[
            styles.button,
            userEmail && userPassword && userName !== ""
              ? styles.enabled
              : null,
            { marginBottom: bottom },
          ]}
          onPress={sendOTP}
        >
          <Text
            style={[
              styles.buttonText,
              userEmail && userPassword && userName !== ""
                ? styles.enabled
                : null,
            ]}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
    gap: 20,
  },
  description: {
    fontSize: 14,
    color: Colors.gray,
  },
  legal: {
    fontSize: 12,
    textAlign: "center",
    color: "#000",
  },
  link: {
    color: Colors.primary,
  },
  button: {
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.lightGray,
    padding: 10,
    borderRadius: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
    color: "#fff",
  },
  buttonText: {
    color: Colors.gray,
    fontSize: 22,
    fontWeight: "500",
  },
  list: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 10,
    padding: 10,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 6,
    marginBottom: 10,
  },
  listItemText: {
    fontSize: 18,
    color: Colors.primary,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.gray,
    opacity: 0.2,
  },
  input: {
    backgroundColor: "#fff",
    width: "100%",
    fontSize: 16,
    padding: 6,
    marginTop: 10,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  loading: {
    zIndex: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Page;
