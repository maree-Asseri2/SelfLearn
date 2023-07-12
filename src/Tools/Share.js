import React from 'react';
import {Alert, Share, View, Button} from 'react-native';

const ShareExample = content => {
  Share.share({
    message: 'content',
  });

  return (
    <View style={{marginTop: 50}}>
      <ShareExample />
    </View>
  );
};

export default ShareExample;
