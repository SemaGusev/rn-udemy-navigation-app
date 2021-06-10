import React from 'react'
import { Text, StyleSheet, Image, Button, ScrollView, View, Alert } from 'react-native'
import { DATA } from '../data'
import { THEME } from '../theme'

import { Item, HeaderButtons } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const PostScreen = ({navigation}) => {
  const postId = navigation.getParam('postId')

  const post = DATA.find(p => p.id === postId)

  const removeHandler = () => {
    Alert.alert(
      "Удаление Поста",
      "Вы уверены что хотите удалить пост?",
      [
        {
          text: "Отменить",
          style: "cancel"
        },
        { text: "Удалить", style: 'destructive', onPress: () => {} }
      ],
      { cancelable: false }
    );
  }

  return (
    <ScrollView> 
      <Image style={styles.image} source={{uri: post.img }} />
      <View style={styles.textWrap}>
      <Text style={styles.title}>{post.text}</Text>
    </View>
    <Button title='Delete' color={THEME.DANGER_COLOR} onPress={removeHandler} />
    </ScrollView>
  )
}

PostScreen.navigationOptions = ({navigation}) => {
  const date = navigation.getParam('date')
  const iconName = 'ios-star'

  return {
  headerTitle: 'Post date: ' + new Date(date).toLocaleDateString(),
  headerRight: (() => 
  <HeaderButtons 
  HeaderButtonComponent={AppHeaderIcon} 
  >
    <Item 
    title="Take Photo" 
    iconName={iconName} 
    onPress={() => console.log('Press photo') } 
    />
  </HeaderButtons>
  )
}
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: 'sans-serif'
  }
})