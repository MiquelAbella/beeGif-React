import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Router } from "./Router/Router";
import { Layout } from "./components/Layout";
import GifsProvider from "./Context/GifsContext/GifsContext";
import UserProvider from "./Context/UserContext/UserContext";
import UIProvider from "./Context/UIContext/UIContext";

function App() {
  return (
    <UserProvider>
      <GifsProvider>
        <UIProvider>
          <BrowserRouter>
            <Layout>
              <Router />
            </Layout>
          </BrowserRouter>
        </UIProvider>
      </GifsProvider>
    </UserProvider>
  );
}

export default App;
