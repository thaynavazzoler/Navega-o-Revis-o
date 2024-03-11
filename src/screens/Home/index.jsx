import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Title from "../../components/Title";
import styles from "./styles";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Title title={"Home"} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <Title title={"Go to Profile"} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Category")}
      >
        <Title title={"Go to Category"} />
      </TouchableOpacity>
    </View>
  );
}
