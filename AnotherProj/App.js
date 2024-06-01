import { useState } from 'react';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';


export default function App() {
  const [query, setQuery] = useState('');
  
  const handleSearch = text => {
    setQuery(text);
    // You can add your search logic here
  }; 
  return (
    <ScrollView style={styles.scrollView}>
      <View >
        <View style={styles.groupImageContainer}>
          <Image source={require('./assets/Group1.jpg')} />
        </View>
        <View style={styles.profileImageContainer}>
          <Image source={require('./assets/ProfileImage.jpg')} />
        </View>
        <View style={styles.searchImageContainer}>
          <Image source={require('./assets/Search.jpg')} />
          
        </View>
        
     
    </View>
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        value={query}
        onChangeText={handleSearch}
        placeholder=" Search..."
      />
      </View>
    
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f0e2d3',
  },
  container: {
    
  },
  groupImageContainer: {
    // Adjust these styles to position your image
    marginTop: 75,
    alignSelf: 'flex-start',
    left:10,
  },
  profileImageContainer: {
    // Adjust these styles to position your image
    alignSelf: 'flex-end',
  
    top: -55,
    left:-10
  },
  searchImageContainer: {
    // Adjust these styles to position your image
    alignSelf: 'flex-start',
    top: -20,
    width: -400,
    left: 20

  },

  searchContainer: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
    height: 50,
    top:-80,
    left:10
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 18,
    
  },
});
