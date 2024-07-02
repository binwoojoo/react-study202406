import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigaion"

const RootLayout = () => {
  return (
    <>
      <div>
        <MainNavigation />
        {/* { RootLayout의 children들이 Outlet으로 출력됨} */}
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
