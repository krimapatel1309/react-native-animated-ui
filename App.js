import { useState } from "react";
import {
    Dimensions,
    Keyboard,
    Pressable,
    Text,
    TextInput,
    View,
} from "react-native";
import styles from "./style";
import Svg, { Image, Ellipse, ClipPath } from "react-native-svg";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    interpolate,
    withTiming,
    withDelay,
    withSequence,
    withSpring,
} from "react-native-reanimated";

const App = () =>  {
    const [isRegistering, setIsRegistering] = useState("");

    const { height, width } = Dimensions.get("window");
    const imgPosition = useSharedValue(1);
    const frmBtnScale = useSharedValue(1);

    const imgAnimatedStyle = useAnimatedStyle(() => {
        const interpolation = interpolate(
            imgPosition.value,
            [0, 1],
            [-height / 2, 0]
        );
        return {
            transform: [
                { translateY: withTiming(interpolation, { duration: 1000 }) },
            ],
        };
    });
    const btnAnimatedStyle = useAnimatedStyle(() => {
        const interpolation = interpolate(imgPosition.value, [0, 1], [250, 0]);
        return {
            opacity: withTiming(imgPosition.value, { duration: 500 }),
            transform: [
                { translateY: withTiming(interpolation, { duration: 1000 }) },
            ],
        };
    });
    const clsBtnContStyle = useAnimatedStyle(() => {
        const interpolation = interpolate(
            imgPosition.value,
            [0, 1],
            [180, 360 * 30]
        );
        return {
            opacity: withTiming(imgPosition.value === 0 ? 1 : 0, {
                duration: 500,
            }),
            transform: [
                {
                    rotate: withTiming(interpolation + "deg", {
                        duration: 1000,
                    }),
                },
            ],
        };
    });
    const formAnimatedStyle = useAnimatedStyle(() => {
        const interpolation = interpolate(
            imgPosition.value,
            [0, 1],
            [-15, -1000]
        );
        return {
            opacity:
                imgPosition.value === 0
                    ? withDelay(400, withTiming(1, { duration: 800 }))
                    : withTiming(0, { duration: 300 }),
            transform: [
                { translateY: withTiming(interpolation, { duration: 1000 }) },
            ],
        };
    });

    // another way to style & animate
    const frmBtnContStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: frmBtnScale.value }],
        };
    });

    const loginHandler = () => {
        imgPosition.value = 0;
        Keyboard.dismiss();
        setIsRegistering(false);
    };
    const registerHandler = () => {
        imgPosition.value = 0;
        Keyboard.dismiss();
        setIsRegistering(true);
    };
    const closeHandler = () => {
        imgPosition.value = 1;
        Keyboard.dismiss();
    };

    return (
        <Pressable style={styles.container} onPress={Keyboard.dismiss}>
            <Animated.View
                style={[
                    {
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        top: 0,
                    },
                    imgAnimatedStyle,
                ]}
            >
                <Svg height={height + 50} width={width}>
                    {/* <Svg height={height} width={width}> */}
                    <ClipPath id="clipPathId">
                        <Ellipse cx={width / 2} rx={height} ry={height + 50} />
                    </ClipPath>
                    <Image
                        href={require("./assets/login-background3.jpg")}
                        width={width + 50}
                        height={height + 50}
                        preserveAspectRatio="xMidYMid slice"
                        clipPath="url(#clipPathId)"
                    />
                </Svg>
                <Animated.View style={[styles.closeButton, clsBtnContStyle]}>
                    <Text style={styles.clsBtnTxt} onPress={closeHandler}>
                        X
                    </Text>
                </Animated.View>
            </Animated.View>
            <View
                style={[
                    styles.bottomContainer,
                    { position: "absolute", bottom: 35, width: "100%" },
                ]}
            >
                <Animated.View style={btnAnimatedStyle}>
                    <Pressable style={styles.button} onPress={loginHandler}>
                        <Text style={styles.buttonText}>LOG IN</Text>
                    </Pressable>
                </Animated.View>
                <Animated.View style={btnAnimatedStyle}>
                    <Pressable style={styles.button} onPress={registerHandler}>
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </Pressable>
                </Animated.View>
                <Animated.View
                    style={[styles.formInputContainer, formAnimatedStyle]}
                >
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#39e75f"
                        style={styles.textInput}
                    />
                    {isRegistering && (
                        <TextInput
                            placeholder="Full Name"
                            placeholderTextColor="#39e75f"
                            style={styles.textInput}
                        />
                    )}
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#39e75f"
                        style={styles.textInput}
                    />
                    <Pressable
                        onPress={() => {
                            frmBtnScale.value = withSequence(
                                withSpring(1.1),
                                withSpring(1)
                            );
                            Keyboard.dismiss();
                        }}
                    >
                        <Animated.View
                            style={[
                                styles.button,
                                styles.formButton,
                                frmBtnContStyle,
                                styles.btnFinal,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.buttonText,
                                    { color: "black", fontWeight: "700" },
                                ]}
                            >
                                {isRegistering ? "REGISTER" : "LOG IN"}
                            </Text>
                        </Animated.View>
                    </Pressable>
                </Animated.View>
            </View>
        </Pressable>
    );
}

export default App;