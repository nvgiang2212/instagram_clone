import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import { IconFooter } from "../../data/icons";

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider width={1} orientation="vertical" />
            <PostHeader post={post} />
            <PostImage post={post} />
            <PostFooter />
        </View>
    );
};

const PostHeader = ({ post }) => {
    return (
        <View style={styles.postHeader}>
            <View style={styles.postHeaderCon}>
                <Image
                    style={styles.postHeaderImg}
                    source={{ uri: post.profile_picture }}
                />
                <Text style={styles.postHeaderUser}>{post.user}</Text>
            </View>

            <Text style={{ fontWeight: "700" }}>...</Text>
        </View>
    );
};

const PostImage = ({ post }) => {
    return (
        <View style={styles.postImageUrl}>
            <Image style={styles.imagePost} source={{ uri: post.imageUrl }} />
        </View>
    );
};

const PostFooter = () => {
    return (
        <Icon imgStyle={styles.footerIcon} imgUrl={IconFooter[0].imageUrl} />
    );
};

const Icon = ({ imgStyle, imgUrl }) => {
    return (
        <TouchableOpacity>
            <Image style={imgStyle} source={{ uir: imgUrl }} />
        </TouchableOpacity>
    );
};

export default Post;

const styles = StyleSheet.create({
    postHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 6,
        marginHorizontal: 5,
        alignItems: "center",
    },
    postHeaderCon: {
        flexDirection: "row",
        alignItems: "center",
    },
    postHeaderImg: {
        height: 35,
        width: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: "#ff8501",
    },
    postHeaderUser: {
        marginLeft: 5,
        fontWeight: "600",
    },
    postImageUrl: {
        width: "100%",
        height: 450,
    },
    imagePost: {
        height: "100%",
        resizeMode: "cover",
    },
    footerIcon: {
        width: 33,
        height: 33,
        // backgroundColor: 'black'
    },
});
