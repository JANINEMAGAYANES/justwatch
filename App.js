import React from 'react';
import {ImageBackground, Stylesheet, View, Text} from 'react-native';

class App extends React.Component {
  state = {
    posts: [
      {
        title: 'The Big Bang Theory',
        download_url:
          'https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_.jpg',
      },
      {
        title: 'Young Sheldon',
        download_url:
          'https://m.media-amazon.com/images/M/MV5BZDg3MGNhYjItZGU2Yi00MzU4LWE4NGUtYjA2OTVjNGUyMjE4XkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_.jpg',
      },
    ],
  };

  componentDidMount() {
    const posts = json.data.children.map((child) => child.data);
    this.setState({posts});
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.state.posts.map((post) => (
          <View style={styles.tile} key={post.id}>
            <TouchableHighlight
              style={styles.highlight}
              underlayColor="#a8dadc"
              onPress={() =>
                this.setState({
                  modalVisible: true,
                  selectedImage: post.download_url,
                })
              }>
              <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={{uri: post.thumbnail}}
                imageStyle={styles.background}
              />
            </TouchableHighlight>
            <Text style={styles.title}>{post.title}</Text>
          </View>
        ))}
        <Modal
          animationType={'fade'}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setState({modalVisible: false})}>
          <TouchableHighlight
            activeOpacity={1}
            onPress={() => this.setState({modalVisible: false})}>
            <Image
              source={{uri: this.state.selectedImage}}
              style={{width: '100%', height: '100%'}}
            />
          </TouchableHighlight>
        </Modal>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1faee',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tile: {
    flexBasis: '20%',
    height: 370,
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
  },
  background: {
    borderColor: '#1d3557',
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});
export default App;
