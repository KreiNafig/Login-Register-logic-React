import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { createContext, useEffect, useState } from "react";

export const ContextAuth = createContext(false)

function App() {
  const [auth, setAuth] = useState(false)
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    const token = localStorage.getItem('token')
    setAuth(token === 'true')
    setLoading(false)
  }, [])

  if(isLoading) {
    return (<div>Loading...</div>)
  }

  return (
    <>
    <ContextAuth.Provider value={{auth, setAuth}}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </ContextAuth.Provider>
    </>
  );
}

export default App;
