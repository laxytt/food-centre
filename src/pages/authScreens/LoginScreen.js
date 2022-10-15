import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import AppHeader from "../../components/Header";
import { COLORS, PARAMETERS, title } from "../../global/styles";
import { Button, SocialIcon } from "@rneui/themed";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <AppHeader title="Account" type="arrow-left" />
      <View style={{ marginLeft: 20, marginTop: 50 }}>
        <Text style={title}>Log in</Text>
      </View>
      <View>
        <Text style={styles.text1}>Enter login and password to log in</Text>
      </View>
      <View style={{ marginTop: 50 }}>
        <View>
          <TextInput style={styles.textInput1} placeholder="Email" />
        </View>
        <View>
          <TextInput style={styles.textInput2} placeholder="Password" />
        </View>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 30 }}>
        <Button
          title="LOG IN"
          buttonStyle={PARAMETERS.styledButton}
          titleStyle={PARAMETERS.buttonTitle}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 15 }}>
        <Text style={{ ...styles.text1, textDecorationLine: "underline" }}>
          Don't remember your password?
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          marginTop: 50,
          marginBottom: 40,
        }}
      >
        <Text style={{ fontSize: 10, fontWeight: "bold" }}>OR</Text>
      </View>
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <SocialIcon
          title="Log in with Facebook"
          button
          type="facebook"
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <SocialIcon
          title="Log in with Google"
          button
          type="google"
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{ marginTop: 25, marginLeft: 20 }}>
        <Text style={{ ...styles.text1 }}>Don't have an account, yet?</Text>
      </View>
      <View>
        <Button
          title="Create an account"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: COLORS.grey4,
    fontSize: 16,
    alignSelf: "center",
  },
  textInput1: {
    borderWidth: 1,
    height: 50,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  textInput2: {
    borderWidth: 1,
    height: 50,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: "86939e",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 15,
  },
  socialIcon: {
    borderRadius: 12,
    height: 50,
    width: "100%",
  },
  createButton: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ff8c52",
    height: 40,
    paddingHorizontal: 20,
    width: "50%",
    alignSelf: "center",
    marginTop: 10,
  },
  createButtonTitle: {
    color: "#ff8c52",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
});
