import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/instagram_logo.png")}
        />
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../../assets/add_logo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>5</Text>
          </View>
          <Image
            style={styles.icon}
            source={require("../../assets/fb_mess_logo.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 60,
    resizeMode: "contain",
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },
  unreadBadge: {
    backgroundColor: "#ff3250",
    position: "absolute",
    left: 25,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 10,
    zIndex: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  unreadBadgeText: {
    color: "white",
    fontSize: 12,
  },
});
