import { Outlet } from "react-router-dom";
import MainNavigation from "../../components/MainNavigation/MainNavigation";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";

function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  return (
    <>
      {isLoggedIn && <MainNavigation />}
      <main>
        {!isLoggedIn && <LoginForm onHandleLogin={handleLogin} />}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
