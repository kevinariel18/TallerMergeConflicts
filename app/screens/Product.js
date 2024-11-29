import { View, Text, StyleSheet, Button } from "react-native";

export const Product = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Bienvenido a mi tienda, soy Anderson Muñoz</Text>
      <Text style={styles.product1}>Producto 1</Text>
      <Text style={styles.product2}>Producto 2</Text>
      <Text style={styles.product3}>Producto 3</Text>
      <Button
        title="HOME"
        onPress={() => {
          navigation.navigate("WelcomeAndersonMuñoz");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffacd",
    alignItems: "center",
    justifyContent: "center",
  },
  product1: { color: "red" },
  product2: { color: "blue" },
  product3: { color: "green" },
});
