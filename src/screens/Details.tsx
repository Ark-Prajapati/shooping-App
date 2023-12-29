import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type DetailProps = NativeStackScreenProps<RootStackParamList, "Details">

const Details = ({route}: DetailProps) => {
  const {product} = route.params
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View><Text style={styles.author}>Robert Jordan</Text></View>
        <View style={styles.rhs}>
          <Text>{product.stars}</Text>
          <Text style={styles.downloads}>{product.downloads}</Text>
        </View>
      </View>
      <Text style={styles.title}>{product.title}</Text>
      <View style={styles.number}>
        <Text style={styles.numberText}>Book {product.id} of 7: Wheel of Time</Text>
      </View>
      <View style={styles.imageView}>
        <Image style={styles.image} source={{uri: product.imageUrl}}/>
      </View>
      <Pressable style={styles.button}><Text style={styles.buttonText}>Add to cart</Text></Pressable>
      <Pressable style={styles.button}><Text style={styles.buttonText}>Buy now</Text></Pressable>
    </View>
  )
}

const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  container: {
    paddingHorizontal: 15
  },

  rhs: {
    flexDirection: 'row'
  },

  author: {
    color: '#507884'
  },

  downloads: {
    color: '#111111'
  },

  image: {
    width: 260,
    height: 400,
  },

  title: {
    fontSize: 20,
    color: '#111111',
    fontWeight: '700'
  },

  number: {
    marginTop: 20
  },

  numberText: {
    fontSize: 17,
    color: '#507884'
  },

  imageView: {
    marginTop: 2,
    alignItems: 'center'
  },

  button: {
    backgroundColor: 'orange',
    alignItems : 'center',
    paddingVertical: 8,
    marginTop: 12,
    borderRadius: 20
  },

  buttonText: {
    fontSize: 20,
    color: '#111111'
  }

})

export default Details
