import React from 'react'
import { View, FlatList } from 'react-native';
import Cardimage from './Cardimage';

const ImageList = ({ imagenes, buscar, pagina }) => {
  const renderItem = ({ item }) => {
    return (
      <Cardimage image={item} buscar={buscar} pagina={pagina} />
    )
  }
  return (
    <View>
      <FlatList
        data={imagenes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  )
}

export default ImageList;
