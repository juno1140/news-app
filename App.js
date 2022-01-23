import { StyleSheet, FlatList, SafeAreaView } from 'react-native'
import ListItem from './componets/ListItem'
import articles from './dummies/articles'

export default function App() {
  const renderItem = ({ item }) => (
    <ListItem
      imageUrl={item.urlToImage}
      title={item.title}
      author={item.author}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
