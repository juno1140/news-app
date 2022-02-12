import React from 'react'
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { WebView } from 'react-native-webview'
import { useDispatch, useSelector } from 'react-redux'
import { addCilp, deleteCilp } from '../store/actions/user'
import ClipButton from '../componets/ClipButton'
import Loading from '../componets/Loading'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default ArticleScreen = ({ route }) => {
  const { article } = route.params

  const dispatch = useDispatch()

  const user = useSelector((state) => state.user)
  const { clips } = user

  const isClipped = () => {
    return clips.some((clip) => clip.url === article.url)
  }

  const toggleClip = () => {
    if (isClipped()) {
      dispatch(deleteCilp({ clip: article }))
    } else {
      dispatch(addCilp({ clip: article }))
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={toggleClip} enabled={isClipped()} />
      <WebView
        source={{ uri: article.url }}
        startInLoadingState={true}
        renderLoading={() => <Loading />}
      />
    </SafeAreaView>
  )
}
