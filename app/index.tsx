import React from "react";
import { View, Button, Alert, StyleSheet, Image } from "react-native";

const index: React.FC = () => {
  const showMessage = (): void => {
    Alert.alert("Merhaba Dünya");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo-badge-dark.png")}
        style={styles.Image}
      />
      <Button title="Merhaba" onPress={showMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 25,
  },
});

export default index;
