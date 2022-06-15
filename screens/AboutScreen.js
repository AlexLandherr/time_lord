import { StyleSheet, Text, View } from 'react-native';

export const AboutScreen = () => {

    return (
        <View style={styles.infoView}>
            <Text>
                Application Name: Time Lord.{"\n"}
                Date: 2022-06-16.{"\n"}
                By: Alex Landherr.{"\n"}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    infoView: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
        fontFamily: "Roboto",
    },
});