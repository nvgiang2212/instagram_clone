import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Button,
    Platform,
    TouchableOpacity,
    Switch,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Divider } from "react-native-elements";
import { DirectionIcon } from "../../data/icons";
import { BottomTabIcons } from "../../data/icons";

const PLACEHOLDER_IMG =
    "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg";

const accountIg = [
    {
        name: "p3_ngok_ngek",
        imageUrl: BottomTabIcons[4].active,
    },
    {
        name: "h0@g_tu_j0",
        imageUrl: BottomTabIcons[4].active,
    },
];

const locationList = [
    { address: "số 9, Duy Tân, Dịch Vọng Hậu" },
    { address: "Manulife - VP CMC" },
    { address: "Unicity - Sản phẩm chính hãng giá thành đắt" },
    { address: "Risky Billard Club" },
    { address: "Tòa nhà Việt Á, Duy Tân" },
    { address: "Tìm kiếm" },
];

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required("A URL is required"),
    caption: Yup.string().max(2200, "Caption has reached the character"),
});

const CollapseItem = ({ name, arrowUp, children }) => {
    const [statusCollapse, setStatusCollapse] = useState(true);

    const handleDropdown = () => {
        setStatusCollapse((preStatusCollapse) => arrowUp && !preStatusCollapse);
    };

    return (
        <View>
            <TouchableOpacity
                style={styles.collapseItem}
                onPress={handleDropdown}
            >
                <Text style={{ fontSize: 16 }}>{name}</Text>
                <Image
                    source={{ uri: DirectionIcon[0].imageUrl }}
                    style={[
                        styles.iconCollapse,
                        {
                            transform: [
                                {
                                    rotate:
                                        arrowUp && statusCollapse
                                            ? "90deg"
                                            : arrowUp && !statusCollapse
                                            ? "270deg"
                                            : "180deg",
                                },
                            ],
                        },
                    ]}
                />
            </TouchableOpacity>
            {statusCollapse && children}
        </View>
    );
};

const SwitchButtonRow = ({ user, imageUrl, appName }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: 10,
                marginVertical: Platform.OS === "ios" ? 8 : 0,
            }}
        >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {!appName ? (
                    <>
                        <Image
                            source={{ uri: imageUrl }}
                            style={{ width: 40, height: 40, borderRadius: 20 }}
                        />
                        <Text
                            style={{
                                fontSize: 15,
                                marginLeft: 10,
                                fontWeight: "500",
                            }}
                        >
                            {user}
                        </Text>
                    </>
                ) : (
                    <>
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: "500",
                            }}
                        >
                            {appName}
                        </Text>
                    </>
                )}
            </View>

            <View>
                <Switch
                    trackColor={{ false: "#767577", true: "#2196F3" }}
                    thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>
    );
};

const Address = ({ item, key }) => {
    return (
        <View
            style={{
                width: 180,
                height: 30,
                backgroundColor: "lightgrey",
                marginHorizontal: 3,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
            }}
        >
            <Text
                numberOfLines={1}
                style={{ width: "100%", paddingHorizontal: 10 }}
            >
                {item.address}
            </Text>
        </View>
    );
};

const FormikPostUploader = () => {
    // const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);

    return (
        <Formik
            initialValues={{ caption: "", imageUrl: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({
                values,
                errors,
                isValid,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <>
                    <View
                        style={{
                            flexDirection: "row",
                            marginLeft: 10,
                            margin: 5,
                            marginTop: 15,
                            justifyContent: "space-between",
                        }}
                    >
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                borderWidth: 1,
                                borderColor: "gray",
                            }}
                            source={{ uri: PLACEHOLDER_IMG }}
                        />

                        <View style={{ flex: 1, marginLeft: 6, height: 110 }}>
                            <TextInput
                                placeholder="Write a caption..."
                                placeholderTextColor="gray"
                                style={{
                                    fontSize: 16,
                                    marginLeft: 10,
                                }}
                                multiline={true}
                                onChangeText={handleChange("caption")}
                                onBlur={handleBlur("caption")}
                                value={values.caption}
                            />
                        </View>

                        {/* <TextInput
                            placeholder="Enter image URL"
                            placeholderTextColor="gray"
                            style={{ fontSize: 18 }}
                            onChangeText={handleChange("imageUrl")}
                            onBlur={handleBlur("imageUrl")}
                            value={values.imageUrl}
                        /> */}
                    </View>
                    {/* {errors.imageUrl && (
                        <Text style={{ fontSize: 10, color: "red" }}>
                            {errors.imageUrl}
                        </Text>
                    )} */}
                    <Divider width={1} orientation="vertical" />
                    <CollapseItem name={"Tag Someone Else"} />
                    <Divider width={1} orientation="vertical" />
                    <CollapseItem name={"Add Location"} />
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ marginBottom: 5, marginHorizontal: 10 }}
                    >
                        {locationList.map((item, index) => {
                            return <Address key={index} item={item} />;
                        })}
                    </ScrollView>
                    <Divider width={1} orientation="vertical" />
                    <CollapseItem
                        name={"Post On Another Account Instagram"}
                        arrowUp={true}
                    >
                        {accountIg.map((item, index) => {
                            return (
                                <SwitchButtonRow
                                    key={index}
                                    user={item.name}
                                    imageUrl={item.imageUrl}
                                />
                            );
                        })}
                    </CollapseItem>
                    <Divider width={1} orientation="vertical" />
                    <View style={{ marginVertical: 5 }}>
                        <SwitchButtonRow appName={"Facebook"} />
                        <SwitchButtonRow appName={"Twitter"} />
                        <SwitchButtonRow appName={"Tumblr"} />
                    </View>

                    <Divider width={1} orientation="vertical" />
                    <TouchableOpacity style={{ marginTop: 5 }}>
                        <Text style={{ marginLeft: 10, opacity: 0.4 }}>
                            Advanced Settings
                        </Text>
                    </TouchableOpacity>

                    {/* <View style={styles.buttonShare}>
                        <Button
                            onPress={handleSubmit}
                            title="Share"
                            disabled={isValid}
                            color={Platform.OS === "ios" ? "#fff" : null}
                        ></Button>
                    </View> */}
                </>
            )}
        </Formik>
    );
};

export default FormikPostUploader;

const styles = StyleSheet.create({
    collapseItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 10,
        marginRight: 5,
        height: 45,
        alignItems: "center",
    },
    iconCollapse: {
        width: 20,
        height: 20,
    },
    buttonShare: {
        marginHorizontal: 10,
        backgroundColor: Platform.OS === "ios" ? "#2196F3" : null,
    },
});
