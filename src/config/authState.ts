import { useState, useEffect } from 'react';
import { onAuthStateChanged } from './firbaseService'; 

const AuthState = () => {
  const [user, setUser] = useState<any | null>(null);  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe; 
  }, []);

  return { user };
};

export default AuthState;
