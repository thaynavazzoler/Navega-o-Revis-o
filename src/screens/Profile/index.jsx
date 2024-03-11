import { View } from "react-native";
import React from "react";
import Title from "../../components/Title";
import styles from "./styles";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Title title={"Profile"} />
    </View>
  );
}
