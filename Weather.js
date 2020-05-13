import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "비도 오고 그래서..."
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#304352", "#d7d2cc"],
        title: "폭풍",
        subtitle: "출근 ㄴㄴ"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#ada996", "#f2f2f2", "#dbdbdb", "#eaeaea"],
        title: "이슬비",
        subtitle: "우산 쓰기도 애매하고 안쓰기도..."
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00416A", "#E4E5E6"],
        title: "비",
        subtitle: "막걸리 각?"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#8e9eab", "#eef2f3"],
        title: "눈",
        subtitle: "눈 온다..."
    },
    Atmosphere: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Atmosphere",
        subtitle: "뭐지 이건...?"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "맑음",
        subtitle: "놀러가고 싶다..."
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "흐림",
        subtitle: "구름 많네..."
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "안개",
        subtitle: "안개다"
    },
    Dust: {
        iconName: "weather-windy",
        gradient: ["#D1913C", "#FFD194"],
        title: "황사",
        subtitle: "집에 있어라"
    },
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    name={weatherOptions[condition].iconName}
                    size={96}
                    color="white" />
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }} >
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});