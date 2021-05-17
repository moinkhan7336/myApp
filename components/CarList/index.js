import { FlatList, Dimensions, View, Text } from "react-native";
import React from "react";
import styles from "./style";
import cars from "./cars";
import CarItem from "../Caritem";
const CarList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarList;
