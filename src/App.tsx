import React from "react";
import {
  BrowserRouter, Route, Routes,
} from "react-router-dom";
import MainContextProvider from "./context";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <MainContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Login />}
          />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </MainContextProvider>
  );
}

export default App;
