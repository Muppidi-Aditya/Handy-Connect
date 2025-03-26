import React, { Component, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginLandingPage from "./pages/LoginLandingPage";
import LoginPage from "./pages/LoginPage";

export const AppContext = createContext();

class App extends Component {
  state = {
    userType: "",
  };

  userTypeSelection = (userType) => {
    this.setState({ userType: userType});
    console.log(userType);
  };

  logout = () => {
    this.setState({ isAuthenticated: false });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          userType: this.state.userType,
          userTypeSelection: this.userTypeSelection,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/loginLanding" exact element={<LoginLandingPage />} />
            <Route path="/loginPage" exact element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    );
  }
}

export default App;
