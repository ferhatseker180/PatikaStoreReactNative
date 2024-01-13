import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import styles from './ProductCardStyle'

const ProductCard = ({product} : any) => {
  return (

    <View style={styles.mainContainer}>
    
      
        <Image style = {styles.imageStyle} source={{uri: product.imgURL}} />
        <Text style = {styles.titleStyle}> {product.title} </Text>
        <Text style = {styles.priceStyle}> {product.price} </Text>
       {
        product.inStock === false ? <Text style = {styles.stockStyle}> STOKTA YOK </Text> : <Text> </Text>
       }
      </View>
  )
}

export default ProductCard