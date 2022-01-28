import { createContext, useState, useEffect } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = (props) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoriteItemsData = JSON.parse(localStorage.getItem('favorites'));
    if (favoriteItemsData) {
      setFavorites(favoriteItemsData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  function addToFavorite(newItem) {
    setFavorites((prevItems) => [...prevItems, newItem]);
  }

  function removeFromFavorite(id) {
    setFavorites((prevItems) => prevItems.filter((product) => product.id !== id));
  }

  return (
    <WishlistContext.Provider value={{ favorites, addToFavorite, removeFromFavorite }}>
      {props.children}
    </WishlistContext.Provider>
  );
};
