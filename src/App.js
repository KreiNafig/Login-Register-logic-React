import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { createContext, useState } from "react";

export const ContextAuth = createContext(false)

function App() {
  const [auth, setAuth] = useState(false)
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
