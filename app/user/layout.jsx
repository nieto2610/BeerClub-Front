"use client";
import "../globals.scss";
import React, { useEffect } from "react";
import Footer from "../components/footer/Footer";
import HeaderPublic from "../components/headerPublic/headerPublic";
import { getUserInfo } from "../services/user";
import Cookies from "js-cookie";
import UserSideBar from "../components/userSideBar/UserSideBar";
import UserData from "../components/userBasicData/UserBasicData";
import { Box } from "@mui/material";
import { useUserBeerContext } from "../context/user";
import { jwtDecode } from "jwt-decode";
import { usePathname } from "next/navigation";
import { memberItems } from "../common/constants/NavBarItems";

const UserLayout = ({ children }) => {
  const pathname = usePathname();
  const { user, setUser } = useUserBeerContext();
  const token = Cookies.get("jwt");
  const decodeToken = token ? jwtDecode(token.toString()) : null;

  useEffect(() => {
    const userInfo = async () => {
      return decodeToken ? await getUserInfo(decodeToken.email, token) : {};
    };
    userInfo().then((response) => {
      setUser(response);
    });
  }, [decodeToken, user, token, setUser]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <HeaderPublic items={user ? memberItems : []} />
      {!pathname.includes("account") ? (
        <> {children} </>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 4fr",
            minHeight: "calc(100vh - 280px)",
          }}
          id="cont"
        >
          <UserSideBar />
          <Box sx={{ padding: "30px" }} id="user_wrapper">
            {user ? (
              <>
                <UserData user={user} />
                {children}
              </>
            ) : (
              <></>
            )}
          </Box>
        </Box>
      )}
      <Footer />
    </div>
  );
};

export default UserLayout;
