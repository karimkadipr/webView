import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import WebView from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  const [accessWebView, setAccessWebView] = useState(false);
  const [seeDialog, setSeeDialog] = useState(false);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      setAccessWebView(true);
    }, 10000);

    setTimeout(() => {
      setSeeDialog(true);
    }, 11000);

    setInterval(() => {
      if (timer >= 0) {
        setTimer(prev => prev - 1);
      }
    }, 1000);
  }, []);

  return (
    <View style={{backgroundColor: 'white'}}>
      {!accessWebView && (
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
            <ActivityIndicator size="large" color="#ffffff" />
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 18,
                color: 'white',
              }}>
              webview will open in {timer} Seconds
            </Text>
          </View>
        </>
      )}

      {accessWebView && (
        <SafeAreaView style={{height: windowHeight}}>
          <WebView source={{uri: 'https://www.google.com/'}} />
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
