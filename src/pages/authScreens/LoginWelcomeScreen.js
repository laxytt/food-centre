import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import AppHeader from "../../components/Header";
import { COLORS, PARAMETERS, title } from "../../global/styles";
import { Button, SocialIcon } from "@rneui/themed";
import Swiper from "react-native-swiper";

export default function LoginWelcomeScreen() {
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        dispatchSignedIn({
          type: "UPDATE_SIGN_IN",
          payload: { userToken: "signed-in" },
        });
      } else {
        dispatchSignedIn({
          type: "UPDATE_SIGN_IN",
          payload: { userToken: null },
        });
      }
    });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
    >
      <View
        style={{
          flex: 3,
          justifyContent: "flex-start",
          alignItems: "center",
          // marginTop: getStatusBarHeight,
          paddingTop: 20,
          marginTop: 40,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            color: COLORS.buttons,
            fontWeight: "bold",
            marginTop: 50,
          }}
        >
          Search for restaurants
        </Text>
        <Text
          style={{
            fontSize: 25,
            color: COLORS.buttons,
            fontWeight: "bold",
            marginTop: 5,
          }}
        >
          Order the food you like
        </Text>
      </View>
      <View style={{ flex: 4, justifyContent: "center" }}>
        <Swiper autoplay={true}>
          <View style={styles.slide}>
            <Image
              source={{
                uri: "https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg",
              }}
              style={{
                height: "100%",
                width: "100%",
                padding: 30,
                borderWidth: 1,
                borderRadius: 120,
              }}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={{
                uri: "https://www.foodiesfeed.com/wp-content/uploads/2021/11/fresh-beef-burger-takeaway.jpg",
              }}
              style={{
                height: "100%",
                width: "100%",
                padding: 30,
                borderWidth: 1,
                borderRadius: 120,
              }}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={{
                uri: "https://www.foodiesfeed.com/wp-content/uploads/2022/07/pizza-with-pineapple-and-thin-crust.jpg",
              }}
              style={{
                height: "100%",
                width: "100%",
                padding: 30,
                borderWidth: 1,
                borderRadius: 120,
              }}
            />
          </View>
        </Swiper>
      </View>
      <View style={{ flex: 4, justifyContent: "flex-end", marginBottom: 40 }}>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Button
            title="LOG IN"
            buttonStyle={PARAMETERS.styledButton}
            titleStyle={PARAMETERS.buttonTitle}
            onPress={() => navigation.navigate("LoginScreen")}
          />
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  createButton: {
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ff8c52",
    height: 50,
    paddingHorizontal: 20,
    width: "100%",
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
