import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { DATA } from '../data'
import { Post } from '../components/Post' 
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const MainScreen = ({navigation}) => {
  const openPostHandler = post => {
    navigation.navigate('Post', {postId: post.id, date: post.date})
  }

  return (
    <View style={styles.wrapper}> 
      <FlatList 
      data={DATA} 
      keyExtractor={post => post.id.toString()} 
      renderItem={({item}) => <Post post={item} onOpen={openPostHandler} />} 
      />
    </View>
  )
}

MainScreen.navigationOptions = { 
  headerTitle: () => 'Мой Блог',
  headerRight: (() => 
  <HeaderButtons 
  HeaderButtonComponent={AppHeaderIcon} 
  >
    <Item 
    title="Take Photo" 
    iconName="ios-camera" 
    onPress={() => console.log('Press photo') } 
    />
  </HeaderButtons>
  ),
  headerLeft: (() => 
  <HeaderButtons 
  HeaderButtonComponent={AppHeaderIcon} 
  >
    <Item 
    title="Toggle Drawer" 
    iconName="ios-menu" 
    onPress={() => console.log('Press photo') } 
    />
  </HeaderButtons>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
})