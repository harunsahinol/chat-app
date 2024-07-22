import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";

const Page = () => {
  const [loading, setLoading] = useState("false")
  const [userName, setUserName] = useState('')
  const router = useRouter()
  const keyboardVerticalOffset = Platform.OS === 'ios'? 90 : 0;

  return (
    <KeyboardAvoidingView>
      <Text>otp</Text>
    </KeyboardAvoidingView>
  );
};

export default Page;
