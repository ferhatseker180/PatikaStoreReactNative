import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';

const SearchBarCard = () => {
 
  const [search, setSearch] = useState('');

  const onChangeSearch = (query: string) => setSearch(query);


  return (
    <View style = {styles.container}>

      <Searchbar style = {styles.searchBarStyle}
        placeholder="Search..."
        onChangeText={onChangeSearch}
        value={search}
        icon={require('./search-icon.png')}
      />
  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchBarStyle : {
    backgroundColor : 'azure',
    borderWidth : 1,
    borderColor : 'blue',
    borderRadius : 10,
    margin : 8,
  }

})

export default SearchBarCard;