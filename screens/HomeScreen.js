import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList, SafeAreaView } from 'react-native'
import ListItem from '../componets/ListItem'
import Constants from 'expo-constants'
import axios from 'axios'
import Loading from '../componets/Loading'

const URL = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`

export default function HomeScreen({ navigation }) {
  const [articles, setArticles] = useState([])
  const [loading, setloading] = useState(false)
  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    setloading(true)
    try {
      const response = await axios.get(URL)
      setArticles(response.data.articles)
    } catch (error) {
      console.log(error)
    }
    setloading(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate('Article', { article: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {loading && <Loading />}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
