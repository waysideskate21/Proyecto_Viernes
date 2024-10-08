import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useFonts } from "expo-font";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

export default function Sedes() {
  //Fuentes

  const [fontsLoaded] = useFonts({
    Montserrat: require("../fonts/Montserrat-VariableFont_wght.ttf"),
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <ScrollView>
      <View style={styles.section}>
        <Header />
        <Body />
      </View>
    </ScrollView>
  );
}

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/Logo_Usedes.png")}
          style={styles.header_images}
        />
        <Image
          source={require("../assets/Certificado_Icontec.png")}
          style={styles.header_images}
        />
      </View>
      <View style={styles.title}>
        <Image
          source={require("../assets/Title.png")}
          style={styles.image_title}
        />
      </View>
    </View>
  );
}
const Body =() => {
  const navigation = useNavigation();

  return (
    <View style={styles.section}>
      <View style={styles.box}>
        <View style={styles.text_section}>
          <Text style={styles.text}>¿En que sede estas ubicado?</Text>
        </View>
        <View style={styles.grid}>
          {/* caja */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("guia")}
          >
            <View style={styles.image_box}>
              <Image
                source={require("../assets/Sede_Principal.jpeg")}
                style={styles.buttonImage}
              />
            </View>
            <View style={styles.text_box}>
              <Text style={styles.buttonText}>Neiva</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View style={styles.image_box}>
              <Image
                source={require("../assets/Sede_la_Plata.jpg")}
                style={styles.buttonImage}
              />
            </View>
            <View style={styles.text_box}>
              <Text style={styles.buttonText}>La Plata</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Init")}
          >
            <View style={styles.image_box}>
              <Image
                source={require("../assets/Sede_Garzon.jpeg")}
                style={styles.buttonImage}
              />
            </View>
            <View style={styles.text_box}>
              <Text style={styles.buttonText}>Garzón</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View style={styles.image_box}>
              <Image
                source={require("../assets/Sede-Pitalito.jpg")}
                style={styles.buttonImage}
              />
            </View>
            <View style={styles.text_box}>
              <Text style={styles.buttonText}>Pitalito</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonImage}>
              <Image
                source={require("../assets/Sede_Postgrados.jpg")}
                style={styles.buttonImage}
              />
            </View>
            <View style={styles.text_box}>
              <Text style={styles.buttonText}>Postgrados</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View style={styles.image_box}>
              <Image
                source={require("../assets/Sede_Salud.png")}
                style={styles.buttonImage}
              />
            </View>
            <View style={styles.text_box}>
              <Text style={styles.buttonText}>F. Salud</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2EBEC",
  },

  header: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  header_images: {
    width: 150,
    resizeMode: "contain",
    height: 100,
  },

  title: {
    justifyContent: "center",
    alignItems: "center",
  },

  image_title: {
    width: 350,
    resizeMode: "contain",
    height: 100,
  },

  section: {
    backgroundColor: "#F2EBEC",
    flexGrow: 1,
  },

  text_section: {
    alignItems: "center",
  },

  text: {
    fontSize: 25,
    padding: 10,
    color: "#4E6470",
    fontWeight: "bold",
    fontFamily: "Montserrat",
    justifyContent: "center",
  },

  box: {
    backgroundColor: "white",
    borderRadius: 35,
    margin: 12,
  },

  grid: {
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",

    justifyContent: "space-around",
  },

  button: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#8B0000",
    alignItems: "center",
    borderRadius: 20,
  },

  buttonImage: {
    width: 120,
    borderRadius: 15,
    resizeMode: "cover",
    height: 100,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Montserrat",
  },
});
