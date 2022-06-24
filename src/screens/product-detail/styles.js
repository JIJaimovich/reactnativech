import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    productDetail: {
        height: 300,
        alignItems: "center",
        justifyContent: "space-around",
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18
    },
    description: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 14
    }
})