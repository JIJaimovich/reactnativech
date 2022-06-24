import { StyleSheet } from "react-native";
import { colors } from "../../../constants/themes/index";

export const styles = StyleSheet.create({
    containerItem: {
        flex: 1,
        padding: 10,
        marginHorizontal: 25,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: colors.primary,
        height: 100
    },
    item : {
        flex: 1,
        justifyContent: "space-around",
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 14
    }
})