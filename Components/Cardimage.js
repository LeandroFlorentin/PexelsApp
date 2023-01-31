import { View, Image, StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'

const Cardimage = ({ image, buscar, pagina }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ImageScreen", { image, buscar, pagina })}
      style={styles.cardImage}
    >
      <Image
        source={{
          uri: image.src.medium
            ? image.src.medium
            : "https://images7.alphacoders.com/310/thumbbig-310795.webp"
        }}
        style={{ height: 150, width: "100%" }}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardImage: {
    display: "flex",
    width: "48%",
    margin: 4,
    justifyContent: "space-between",
    backgroundColor: "#2e292e",
    borderWidth: 1,
    borderRadius: 5
  }
})

export default Cardimage;
