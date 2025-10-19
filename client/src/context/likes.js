// import { useState,useEffect, useContext, createContext } from "react";

// const LikedContext = createContext();

// const LikedProvide = ({ children }) => {

//     const [liked, setLiked] = useState([]);

//     // Load liked items from localStorage on initial render
//     useEffect(() => {
//         const storedLiked = localStorage.getItem('likedItems');
//         if (storedLiked) {
//             setLiked(JSON.parse(storedLiked));
//         }
//     }, []);

//     // Save to localStorage whenever liked changes
//     useEffect(() => {
//         localStorage.setItem('likedItems', JSON.stringify(liked));
//     }, [liked]);

//     const addToLiked = (product) => {
//         if (!liked.some(item => item._id === product._id)) {
//             const updatedLiked = [...liked, product];
//             setLiked(updatedLiked);
//             return true; // Added successfully
//         }
//         return false; // Already in liked
//     };

//     const removeFromLiked = (productId) => {
//         const updatedLiked = liked.filter(item => item._id !== productId);
//         setLiked(updatedLiked);
//     };

//     const isLiked = (productId) => {
//         return liked.some(item => item._id === productId);
//     };
//     return (
//         < LikedContext.Provider value={[liked, addToLiked, removeFromLiked, isLiked ]}>
//             {children}
//         </LikedContext.Provider>
//     )
// }

// const useLiked = () => useContext(LikedContext)

// export { useLiked, LikedProvide }



import { useState, useEffect, useContext, createContext } from "react";

const LikedContext = createContext();

const LikedProvide= ({ children }) => {
  const [liked, setLiked] = useState([]);

  // Load liked items from localStorage on initial render
  useEffect(() => {
    const storedLiked = localStorage.getItem('likedItems');
    if (storedLiked) {
      setLiked(JSON.parse(storedLiked));
    }
  }, []);

  // Save to localStorage whenever liked changes
  useEffect(() => {
    localStorage.setItem('likedItems', JSON.stringify(liked));
  }, [liked]);

  const addToLiked = (product) => {
    if (!liked.some(item => item._id === product._id)) {
      setLiked([...liked, product]);
      return true;
    }
    return false;
  };

  const removeFromLiked = (productId) => {
    setLiked(liked.filter(item => item._id !== productId));
  };

  const isLiked = (productId) => {
    return liked.some(item => item._id === productId);
  };

  return (
    <LikedContext.Provider value={{ liked, addToLiked, removeFromLiked, isLiked }}>
      {children}
    </LikedContext.Provider>
  );
};

const useLiked = () => useContext(LikedContext);

export { useLiked, LikedProvide};
