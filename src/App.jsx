import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Router } from "./Router/Router";
import { Layout } from "./components/Layout";
import GifsProvider from "./Context/GifsContext/GifsContext";
import UserProvider from "./Context/UserContext/UserContext";
import UIProvider from "./Context/UIContext/UIContext";

function App() {
  return (
    <UIProvider>
      <UserProvider>
        <GifsProvider>
          <BrowserRouter>
            <Layout>
              <Router />
            </Layout>
          </BrowserRouter>
        </GifsProvider>
      </UserProvider>
    </UIProvider>
  );
}

export default App;
