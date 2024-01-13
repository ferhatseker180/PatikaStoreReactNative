import {View, Text, StyleSheet, FlatList, useWindowDimensions, SafeAreaView} from 'react-native';
import React, { useEffect, useState } from 'react';
import SearchBarCard from './components/SearchBarComponent/SearchBarCard';
import ProductCard from './components/ProductCardComponent/ProductCard';
import data from './data.json';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const App = () => {

 const renderProduct = ({item} : any) => <ProductCard product = {item} />


  return (
    <SafeAreaView style = {styles.container}> 

      <Text style = {styles.headerStyle}> PATIKASTORE </Text>
     
    <FlatList
    ListHeaderComponent={() => 
      <SearchBarCard />
    }
    keyExtractor={(item) => item.u_id.toString()}
    data={data}
    renderItem={renderProduct}
    numColumns={2}
    
    />

</SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#fff',
  },

 
  headerStyle : {
    fontSize : 48,
    fontWeight : 'bold',
    textAlign : 'center',
    margin : 2,
    color : 'purple',
  },

})

export default App;
