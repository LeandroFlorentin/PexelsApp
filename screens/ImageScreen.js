import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Avatar, Button } from 'react-native-elements'
import * as WebBrowser from 'expo-web-browser'
import ImageList from '../Components/ImageList'
import { getImages } from '../api/pexels.js'
import { useEffect, useState } from 'react'
import * as FileSystem from 'expo-file-system'
import * as MediaLibrary from 'expo-media-library'


const ImageScreen = ({ route }) => {
  const [imagenes, setImagenes] = useState([])
  const { image, buscar, pagina } = route.params;
  const handlePress = async () => {
    await WebBrowser.openBrowserAsync(image.photographer_url)
  }
  const loadImages = async (buscar, page) => {
    const res = await getImages(buscar === "" ? undefined : buscar, page)
    setImagenes(res.data.photos)
  }

  const handleDownload = () => {
    downloadFile()
  }

  const downloadFile = async () => {
    try {
      let fileUri = FileSystem.documentDirectory + `${image.id}.jpg`
      const { uri } = await FileSystem.downloadAsync(image.src.large2x, fileUri)
      saveFile(uri)
    } catch (error) {
      console.log(error)
    }
  }

  const saveFile = async (uri) => {
    const { status } = await MediaLibrary.requestPermissionsAsync()
    if (status === "granted") {
      const assent = await MediaLibrary.createAssetAsync(uri)
      await MediaLibrary.createAlbumAsync("Download", assent, false)
    }
  }

  useEffect(() => {
    loadImages(buscar === "" ? undefined : buscar, pagina)
  }, [])
  return (
    <View
      style={styles.header}
    >
      <Image
        source={{
          uri: image.src.large2x,
          height: 400,
          width: "100%"
        }}
      />
      <View style={{
        display: "flex",
        paddingVertical: 18,
        justifyContent: "space-between",
        alignItems: "center",
        width: '100%',
        flexDirection: 'row'
      }}>
        <View style={{ display: "flex", flexDirection: "row", alignItems: 'center' }}>
          <Avatar title={image.photographer.split(" ").map(string => string[0]).join("").toUpperCase()} containerStyle={styles.avatar} rounded />
          <TouchableOpacity onPress={handlePress}>
            <Text style={{ color: "white", fontSize: 18 }}>{image.photographer}</Text>
          </TouchableOpacity>
        </View>
        <Button title="Descargar" buttonStyle={{ backgroundColor: "#229783" }} onPress={() => handleDownload()} />
      </View>
      <View style={{ flex: 1 }}>
        <ImageList imagenes={imagenes} pagina={pagina} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  avatar: {
    height: 40,
    width: 40,
    backgroundColor: '#228783',
    marginRight: 10
  },
  header: {
    backgroundColor: "#0d0d0d",
    flex: 1,
    flexDirection: "column",
    padding: 10
  }
})

export default ImageScreen;