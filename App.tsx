import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import WebView from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  const [accessWebView, setAccessWebView] = useState(false);
  const [seeDialog, setSeeDialog] = useState(false);
  //const [timer, setTimer] = useState(3);
  const [url, setUrl] = useState('https://www.youtube.com/');

  /*   useEffect(() => {
    setTimeout(() => {
      setAccessWebView(true);
    }, 3000);

    setTimeout(() => {
      setSeeDialog(true);
    }, 4000);

    setInterval(() => {
      if (timer >= 0) {
        setTimer(prev => prev - 1);
      }
    }, 1000);
  }, []); */

  return (
    <View style={{backgroundColor: 'white'}}>
      <>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
          }}
          style={{
            width: windowWidth,
            height: windowHeight,
            opacity: 0.6,
            zIndex: -99,
          }}
        />
        <View
          style={{
            justifyContent: 'center',
            zIndex: 99,
            position: 'absolute',
            height: windowHeight,
            width: windowWidth,
          }}>
          {!accessWebView && (
            <>
              <View style={{alignItems: 'center'}}>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    width: '80%',
                    marginBottom: 4,
                  }}
                  onChangeText={nexText => setUrl(nexText)}
                  value={url}
                />
                <Button
                  onPress={() => setAccessWebView(true)}
                  title="Open Web View"
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
            </>
          )}
        </View>
      </>

      {accessWebView && (
        <SafeAreaView
          style={{
            height: windowHeight,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 99,
            position: 'absolute',
            width: '100%',
          }}>
          <View
            style={{
              height: 0.8 * windowHeight,
              width: 0.8 * windowWidth,
              borderWidth: 1,
            }}>
            <WebView source={{uri: url}} />
          </View>
        </SafeAreaView>
      )}

      {seeDialog && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 16,
            paddingTop: 32,
            position: 'absolute',
            top: 0,
          }}>
          <View
            style={{
              padding: 16,
              width: windowWidth - 32,
              zIndex: 9999,
              backgroundColor: 'white',
              borderWidth: 1,
            }}>
            <Text style={{color: 'black'}}>
              would you like to receive SMS notifications ?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 8,
                justifyContent: 'space-between',
              }}>
              <Button
                onPress={() => setSeeDialog(false)}
                title="Yes"
                color="blue"
              />
              <Button
                onPress={() => setSeeDialog(false)}
                title="No"
                color="red"
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default App;
