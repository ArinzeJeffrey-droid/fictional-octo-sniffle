import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { StyleSheet, Text, View, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomDrawerContent = (props: any) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={styles.drawerContent}
      >
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: "https://i.pravatar.cc/300" }}
            style={styles.image}
          />
          <Text style={styles.imageTitle}>Bruce Wayne</Text>
        </View>

        <View style={styles.drawerContentWrapper}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Sign out"
            onPress={() => console.warn("Signing out..")}
          />
        </View>
      </DrawerContentScrollView>

      <View style={{ ...styles.footer, paddingBottom: 20 + bottom }}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: "#dde3fe",
  },
  drawerContentWrapper: { backgroundColor: "#fff", paddingTop: 10 },
  imageWrapper: {
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderRadius: 9999,
  },
  imageTitle: {
    alignSelf: "center",
    fontWeight: "500",
    fontSize: 18,
    paddingTop: 10,
    color: "#5363df",
  },
  footer: {
    borderTopColor: "#dde3fe",
    borderTopWidth: 1,
    padding: 20,
  },
});

export default CustomDrawerContent;
