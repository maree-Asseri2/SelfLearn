import React, {useState} from 'react';
import PageHeader from './PageHeader';
import {View} from 'react-native';
const PageComponent = () => {
  const [favoritePages, setFavoritePages] = useState([]);

  const toggleFavorite = page => {
    if (favoritePages.includes(page)) {
      setFavoritePages(favoritePages.filter(p => p !== page));
    } else {
      setFavoritePages([...favoritePages, page]);
    }
  };

  return (
    <View>
      <View>
        <PageHeader
          isFavorite={favoritePages.includes(page)}
          onPressFavorite={() => toggleFavorite(page)}
        />
        {/* Render page content */}
      </View>
    </View>
  );
};

export default PageComponent;
