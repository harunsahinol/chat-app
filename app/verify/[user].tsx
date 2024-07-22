import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import Colors from "@/constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
    gap: 20,
  },
  legal: {
    fontSize: 14,
    textAlign: "center",
    color: "#000",
  },
  button: {
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 18,
  },
  codeFieldRoot: {
    marginTop: 20,
    width: 260,
    marginLeft: "auto",
    marginRight: "auto",
    gap: 4,
  },
  cellRoot: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  cellText: {
    color: "#000",
    fontSize: 36,
    textAlign: "center",
  },
  focusCell: {
    paddingBottom: 4,
    borderBottomColor: "#000",
    borderBottomWidth: 2,
  },
});

const VerifyPage = () => {
  const { username, signin } = useLocalSearchParams<{
    username: string;
    signin: string;
  }>();
  const [code, setCode] = useState("");

  useEffect(() => {
    if (code.length === 6) {
      console.log("code", code);
    }
  }, []);

  const verifyCode = async () => {};

  const verifySignin = async () => {};

  const resendCode = async () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.legal}>
        We have sent you an e-mail with a code to the e-mail address above.
      </Text>
      <Text style={styles.legal}>
        To complete your e-mail verification, please enter the 6-digit
        activation code.
      </Text>
    </View>
  );
};

export default VerifyPage;
