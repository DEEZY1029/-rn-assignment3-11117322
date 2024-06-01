import { useState } from 'react';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, FlatList} from 'react-native';


export default function App() {
  const [query, setQuery] = useState('');
  const data = [
    { id: 1,
      name:"Exercise",
      title: "12 tasks",
      image: require('./assets/ywwo.jpg') 
    },
    {
      name:"Study",
      title: "12 tasks",
      image: require('./assets/ywwad.jpg'),
      id:2
    },
    {
      name:"Code",
      image: require('./assets/ymc.jpg'),
      title: "12 tasks",
      id:3
    },
    {
      name:"Cook",
      image: require('./assets/cook.jpg'),
      title: "12 tasks",
      id:4
    },
    {
      name:"Eat",
      image: require('./assets/eat.jpg'),
      title: "12 tasks",
      id:5
    },
    {
      name:"Play",
      image: require('./assets/game.jpg'),
      title: "12 tasks",
      id:6
    },
    {
      name:"Sleep",
      image: require('./assets/sleep.jpg'),
      title: "12 tasks",
      id:7
    },
    {
      name:"Clean",
      image: require('./assets/clean.jpg'),
      title: "12 tasks",
      id:8
    },
    {
      name:"Work",
      image: require('./assets/ytp.jpg'),
      title: "12 tasks",
      id:9
    },
    {
      name:"Wash",
      image: require('./assets/wash.jpg'),
      title: "12 tasks",
      id:10
    },
    {
      name:"Music",
      image: require('./assets/music.jpg'),
      title: "12 tasks",
      id:11
    },
    {
      name:"Go Out",
      image: require('./assets/walk.jpg'),
      title: "12 tasks",
      id:12
    },
    
  ];
  const tasks=[
    {
      title:"Mobile App Development",
      num:5
    },
    {
      title:" Web Development",
      num:6
    },
    {
      title:"Push Ups",
      num:7
    },
    {
      title:"React Native Utility",
      num:7
    },
    {
      title:"Eating Pasta",
      num:7
    },
    {
      title:"Video Games",
      num:7
    },
    {
      title:"Sleeping",
      num:7
    },
    {
      title:"Grocery Shopping",
      num:7
    },
    {
      title:"Cleaning room",
      num:7
    },
    {
      title:"Work presentation",
      num:7
    },
    {
      title:"Laundry",
      num:7
    },
    {
      title:"Lawn Mowing",
      num:7
    },
    {
      title:"Jogging",
      num:7
    },
  ]
  
  const handleSearch = text => {
    setQuery(text);
    // You can add your search logic here
  }; 
  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <View style={styles.groupImageContainer}>
          <Image source={require('./assets/Group1.jpg')} />
        </View>
        <View style={styles.profileImageContainer}>
          <Image source={require('./assets/ProfileImage.jpg')} />
        </View>
        <View style={styles.searchImageContainer}>
          <Image source={require('./assets/Search.jpg')} />

        </View>
        <View style={styles.categoriesImageContainer}>
          <Image source={require('./assets/Categories.jpg')}/>
        </View>
        <FlatList
        horizontal={true}
        data={data}
        renderItem={({item})=>(<View style={styles.item}><Image source={item.image} style={styles.userImage} />
          <Text style={styles.Text}>{item.name}</Text> 
          <Text style={styles.Letters}>{item.title}</Text></View>)}
           
        />
         <View style={styles.ongoingTaskContainer}>
        <Image source={require('./assets/OngoingTask.jpg')}/>
      </View>
        <FlatList
        horizontal={false}
        data={tasks}
        renderItem={({item})=>(<View><Text style={styles.second}>{item.title}</Text></View>)}
        />
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        value={query}
        onChangeText={handleSearch}
        placeholder=" Search..."
      />
      </View>
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
  categoriesImageContainer: {
    alignSelf:'flex-end',
    top:0,
    left: -275
  },
  item: {
    padding:10,
   
    marginVertical: 15,
    marginHorizontal:10,
      backgroundColor:'white',
      borderWidth: 1,
      borderColor: '#f0e2d3',
      overflow: 'hidden',
      borderRadius:15,
      margin:20,
      justifyContent:'flex-start',
    alignSelf:'flex-start',
    left: 10
  },
  Text: {
    fontSize:'16',
top:-160,
fontWeight:'bold'
  },
  Letters: {
    fontSize:'10',
    top:-160
  },
  itemContainer: {
     
    alignSelf: 'stretch',
    
  },
  userImage: {
    width: 160, 
    height: 160, 
    resizeMode:'contain',
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexDirection:'row',
    top: 40
    
  },
  second: {
    padding:60,
    fontWeight: 'bold',
    marginVertical: 5,
    marginHorizontal: 10,
      fontSize:'16',
      backgroundColor:'white',
      borderWidth: 7,
      borderRadius:20,
      borderColor:'#f0e2d3',
      overflow: 'hidden',
      margin:20,
      justifyContent:'center',
    alignSelf:'stretch',
    top: 10
  },
  ongoingTaskContainer: {
    alignSelf: 'flex-end',
    top: 10,
    left: -250
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
    top:-2465,
    left:10
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 18,
    
  },
});
