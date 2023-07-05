import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        // backgroundColor: "rgba(169, 169, 169, 0.7)",
        backgroundColor: "white",
    },
    button: {
        // backgroundColor: "rgba(0, 191, 255, 0.8)",
        backgroundColor: "rgba(237, 52, 86, 0.8)",
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 35,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "white",
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "600",
        color: "white",
        letterSpacing: 0.5,
    },
    bottomContainer: {
        justifyContent: "center",
        height: height / 3,
    },
    textInput: {
        height: 50,
        borderWidth: 1,
        borderColor: "#39e75f",
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 25,
        paddingHorizontal: 25,
    },
    formButton: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    formInputContainer: {
        // marginBottom: 20,
        ...StyleSheet.absoluteFill,
        // or
        // position: "absolute",
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0,
        justifyContent: "center",
        zIndex: 3,
    },
    closeButton: {
        height: 40,
        width: 40,
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.35,
        shadowRadius: 6.3,
        elevation: 5,
        backgroundColor: "#39e75f",
        borderRadius: 20,
        top: -20,
    },
    clsBtnTxt: {
        height: 40,
        width: 40,
        textAlign: "center",
        textAlignVertical: "center",
        color: "#000",
        fontWeight: "900",
    },
    btnFinal: {
        backgroundColor: "#39e75f",
    },
});

export default styles;
