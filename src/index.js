import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-7q8poia1lsfwbr7z.us.auth0.com"
    clientId="b9hSBT5rXs9b1X4c31imOzUejreVDZMM"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

  <BrowserRouter>
      <Provider store={store}>
              <App />
              <Toaster/>
      </Provider>
  </BrowserRouter>

  </Auth0Provider>
);
