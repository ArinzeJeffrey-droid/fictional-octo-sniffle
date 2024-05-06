import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const toggleSidebar = () => {
    navigation.dispatch(DrawerActions.openDrawer())
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <Button title="open sidebar" onPress={toggleSidebar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
