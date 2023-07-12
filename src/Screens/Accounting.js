import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

export default function Accounting() {
  return (
    <WebView
      source={{uri: 'https://bruno-simon.com/'}}
      style={{marginTop: 20}}
    />
  );
}
