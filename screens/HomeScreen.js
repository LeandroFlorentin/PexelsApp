import { View, StyleSheet, Text } from 'react-native'
import { useEffect, useState } from 'react';
import { getImages } from '../api/pexels.js'
import { Input, Button } from 'react-native-elements'
import ImageList from '../Components/ImageList.js';

const Home = ({ open }) => {
  const [buscar, setBuscar] = useState("")
  const [imagenes, setImagenes] = useState([])
  const [resultados, setResultado] = useState(0)
  const [pagina, setPagina] = useState(1)

  const loadImages = async (buscar, pagina) => {
    const res = await getImages(buscar === "" ? undefined : buscar, pagina)
    setImagenes(res.data.photos)
    setResultado(res.data.total_results)
  }
  const paginaAdelante = async () => {
    const page = pagina + 1
    if (page === Math.floor(resultados / 20) + 2) console.log("NO PASAMOS DE ACA")
    else {
      await loadImages(buscar, page)
      setPagina(pagina + 1)
    }
  }

  const paginaAtras = async () => {
    const page = pagina - 1
    if (page !== 0) {
      await loadImages(buscar, page)
      setPagina(pagina - 1)
    }
    else {
      console.log("NO vamos abajo de 1")
    }
  }

  const handleSearch = (value) => {
    setBuscar(value)
  }

  const submitSearch = async () => {
    await loadImages(buscar)
  }

  useEffect(() => {
    loadImages()
  }, [])

  return (
    <>
      {
        open && (
          <View
            style={styles.viewSearch}
          >
            <Input
              rightIcon={{ type: 'feather', name: "search", color: "#fff" }}
              style={styles.input}
              inputContainerStyle={styles.search}
              placeholder='Busca un termino'
              onChangeText={handleSearch}
              value={buscar}
            />
            <Button title="Search" buttonStyle={styles.button} onPress={submitSearch} />
          </View>
        )
      }
      <View
        style={styles.container}
      >
        <View
          style={{ flexDirection: "row", width: "100%", alignItems: 'center' }}
        >
          <View
            style={{ position: "relative", width: "50%" }}
          >
            <Text style={{
              color: "white",
              position: "absolute",
              top: -25,
              fontSize: 40,
              left: 160
            }}
              onPress={paginaAdelante}
            >{`>`}</Text>
            <Text style={{
              color: "white",
              position: "absolute",
              top: -25,
              fontSize: 40,
              left: 40
            }}
              onPress={paginaAtras}
            >{`<`}</Text>
          </View>
          <Text style={styles.text}>{`Total results: ${resultados}`}</Text>
        </View>
        <ImageList imagenes={imagenes} buscar={buscar} pagina={pagina} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  text: {
    color: "#fff",
    marginLeft: 50,
    fontSize: 16
  },
  search: {
    backgroundColor: "#303030",
    paddingHorizontal: 4,
    borderBottomWidth: 0,
    marginTop: 25
  },
  viewSearch: {
    backgroundColor: "#0d0d0d",
    width: '100%',
    paddingLeft: 10,
    flex: 1 / 7,
    flexDirection: 'row',
    paddingRight: 70,
    alignItems: 'center'
  },
  button: {
    backgroundColor: "#228783"
  },
  input: {
    color: 'white'
  }
});

export default Home;