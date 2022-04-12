import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    FlatList,
} from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState("Home");

    const Icon = ({ icon }) => {
        return (
            <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
                <Image
                    style={[
                        styles.icon,
                        icon.name === "Profile" ? styles.profilePic() : null,
                        activeTab === "Profile" && icon.name === activeTab
                            ? styles.profilePic(activeTab)
                            : null,
                    ]}
                    source={{
                        uri:
                            activeTab === icon.name
                                ? icon.active
                                : icon.inactive,
                    }}
                />
            </TouchableOpacity>
        );
    };

    const renderItem = ({ item, index }) => {
        return <Icon icon={item} key={index} />;
    };

    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation="vertical" />
            <View style={styles.container}>
                <FlatList
                    data={icons}
                    renderItem={renderItem}
                    keyExtractor={(item) => `${Math.random()}`}
                    horizontal
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: "space-around",
                    }}
                />
            </View>
        </View>
    );
};

export default BottomTabs;

const styles = StyleSheet.create({
    container: {
        height: 50,
        paddingTop: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    wrapper: {
        position: "relative",
        width: "100%",
        bottom: "2%",
        zIndex: 999,
        backgroundColor: "white",
    },
    profilePic: (activeTab = "") => ({
        borderRadius: 15,
        borderWidth: activeTab === "Profile" ? 2 : 0,
        borderColor: "#000",
    }),
});
