import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Platform,
    FlatList,
} from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import { PostFooterIcons } from "../../data/icons";

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 20 }}>
            <Divider width={1} orientation="vertical" />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentSection post={post} />
                <Comments post={post} />
                <TimePost post={post} />
            </View>
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
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={styles.leftFooterIconsContainer}>
                <Icon
                    imgStyle={styles.footerIcon}
                    imgUrl={PostFooterIcons[0].imageUrl}
                />
                <Icon
                    imgStyle={[styles.footerIcon, styles.commentIcon]}
                    imgUrl={PostFooterIcons[1].imageUrl}
                />
                <Icon
                    imgStyle={[styles.footerIcon, styles.shareIcon]}
                    imgUrl={PostFooterIcons[2].imageUrl}
                />
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
                <Icon
                    imgStyle={styles.footerIcon}
                    imgUrl={PostFooterIcons[3].imageUrl}
                />
            </View>
        </View>
    );
};

const Icon = ({ imgStyle, imgUrl }) => {
    return (
        <TouchableOpacity>
            <Image style={imgStyle} source={{ uri: imgUrl }} />
        </TouchableOpacity>
    );
};

const Likes = ({ post }) => {
    return (
        <View>
            <Text style={{ fontWeight: "600", marginTop: 8 }}>
                {Platform.OS === "ios"
                    ? post.likes.toLocaleString("en")
                    : post.likes
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                likes
            </Text>
        </View>
    );
};

const Caption = ({ post }) => {
    return (
        <View style={{ marginTop: 3 }}>
            <Text>
                <Text style={{ fontWeight: "600" }}>{post.user}</Text>{" "}
                <Text>{post.caption}</Text>
            </Text>
        </View>
    );
};

const CommentSection = ({ post }) => {
    return (
        <View style={{ marginTop: 5 }}>
            {!!post.comments.length && (
                <Text style={{ color: "gray" }}>
                    View {post.comments.length > 1 ? "all" : ""}{" "}
                    {post.comments.length}{" "}
                    {post.comments.length > 1 ? "comments" : "comment"}
                </Text>
            )}
        </View>
    );
};

const Comments = ({ post }) => {
    const renderItem = ({ item, index }) => {
        return (
            <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
                <Text>
                    <Text style={{ fontWeight: "600" }}>{item.user}</Text>
                    <Text> {item.comment}</Text>
                </Text>
            </View>
        );
    };
    return (
        <FlatList
            data={post.comments}
            renderItem={renderItem}
            keyExtractor={(item) => `${Math.random()}`}
        />
    );
};

const TimePost = ({ post }) => {
    return <Text style={{ marginTop: 5, color: "gray" }}>{post.time}</Text>;
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
        width: 28,
        height: 28,
    },
    commentIcon: {
        transform: [{ scaleX: -1 }],
    },
    shareIcon: {
        // transform: [{ rotate: "20deg" }],
        // marginTop: -3,
    },
    leftFooterIconsContainer: {
        flexDirection: "row",
        width: "30%",
        justifyContent: "space-between",
    },
});
