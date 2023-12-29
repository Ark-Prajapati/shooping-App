import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import ProductItem from '../components/ProductItem'
import Seperator from '../components/Seperator'
import { PRODUCTS_LIST } from '../data/constants'

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">

const Home = ({navigation}: HomeProps) => {
  return (
    <View>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Seperator}
        renderItem={({item}) => (
          <Pressable
          onPress={() => {
            navigation.navigate('Details', {product: item})
          }}
          >
            <ProductItem product={item}/>
          </Pressable>
        )}
        />
    </View>
  )
}

const styles = StyleSheet.create({})

export default Home
