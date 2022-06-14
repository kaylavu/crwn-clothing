// create context using create context method from react
import { createContext, useEffect, useState } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangeListener } from '../utils/firebase/firebase.utils';

// Using ReactContext provides a solution to prop drilling. 

// as the actual value you want to access
// Step 1) Create the context (think of it like the store). 
export const UserContext = createContext({
  currentUser: null, 
  setCurrentUser: () => null,
})

// Step 2) Use the provider to wrap and "provide" the context to the parent level component. 
// The actual component that will be wrapping around another component. 
export const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {currentUser, setCurrentUser}

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    });
    return unsubscribe;
  }, [])

  return <UserContext.Provider value={value}> {children} </UserContext.Provider>
} 

//Step 3: In the component that requires the information provided in the context. use the useContext hook and destructure info needed.  
// Example) {currentUser} = useContext(UserContext); // gets the value of currentUser
// Example) {setCurrentUser} = useContext(UserContext); // sets the value of currentUser