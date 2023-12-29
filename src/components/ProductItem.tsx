import { StyleSheet, Text, View, Image } from 'react-native'
import React, { PropsWithChildren } from 'react'

type productProp = PropsWithChildren<{
  product: Product
}>

const ProductItem = ({product}:productProp) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={{uri: product.imageUrl}}/>
      </View>
      <View style={styles.rightSide}>
        <View style={styles.titleView}>
          <Text style={styles.titles}>{product.title}</Text>
        </View>
        <View>
          <Text>By Robert Jordan | {product.releaseDate}</Text>
        </View>
        <Text><Text style={styles.rating}>{product.rating}</Text> | {product.stars} | <Text style={styles.downloads}>({product.downloads})</Text></Text>
        <Text style={styles.paperback}>Paperback</Text>
        <View>
        <Text><Text style={styles.colorblack}><Text>₹<Text style={styles.price}>{product.price}</Text></Text> </Text> M.R.P:<Text style={styles.cut}>₹ {product.originalPrice}</Text> ({product.percentageOff}% off) </Text>
        </View>
        <View><Text>Get it by <Text style={styles.bold}>{product.receivingDate}</Text></Text></View>
        <Text>FREE delivery by Amazon</Text>
        <Text style={styles.redColor}>Only {product.stockLeft} in stock</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  image: {
    height: 200,
    width: 125
  },

  container: {
    flexDirection: 'row'
  },

  imageView: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#F7F7F7'
  },

  titles: {
    fontSize: 18,
    color: '#111111'
  },

  rightSide: {
    flex: 1,
    flexWrap: 'wrap',
    marginHorizontal: 13,
    paddingVertical: 10
  },

  rating: {
    color: '#507884'
  },

  downloads: {
    color: '#111111'
  },

  paperback: {
    color: '#111111',
    fontWeight: '700'
  },

  price: {
    fontSize: 30
  },

  colorblack: {
    color: '#111111'
  },

  cut: {
    textDecorationLine:'line-through'
  },

  bold: {
    fontWeight: '500'
  },

  redColor: {
    color: 'red'
  }

})

export default ProductItem
