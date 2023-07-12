import React from 'react';
import {WebView} from 'react-native-webview';

export default function Play() {
  return (
    <WebView
      source={{uri: 'https://bruno-simon.com/'}}
      style={{marginTop: 20}}
    />
  );
}
