import { StyleSheet, View, Text, FlatList } from "react-native";

const LapList = ({lapTimeList}) => {
    const Item = ({lap}) => (
        <View style={styles.flatListItem}>
            <Text>Lap ID: {lap.id} - Lap time: {lap.laptime} seconds.</Text>
        </View>
    );

    const _renderItem = ({item}) => {
        return <Item lap={item}/>
    };

    return (
        <FlatList
            data={lapTimeList}
            renderItem={_renderItem}
            keyExtractor={(item, index) => index}
        />
    );
};

const styles = StyleSheet.create({
    flatListItem: {
        backgroundColor: "#F0EAD6",
        margin: 10,
        padding: 10,
        borderRadius: 4,
    },
})

export default LapList;