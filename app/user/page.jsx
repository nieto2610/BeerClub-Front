/* eslint-disable prettier/prettier */
"use client";
import React, { useEffect, useState } from "react";
import { useUserBeerContext } from "../context/user";
import BenefitSection from "./benefits/Section";
import RecommendationSection from "./recommendation/Section";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box } from "@mui/material";

const UserPage = () => {
  const { user } = useUserBeerContext();
  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    if (user) {
      setBenefits(user.subscription.benefits);
    }
    AOS.init({
      easing: "ease-out-quad",
      duration: 1000,
    });
  }, [user]);

  return (
    <>
      <Box sx={{ minHeight: "100vh", backgroundColor: "white" }}>
        {/* <ProductSection images={images}/> */}
        {user ? (
          <>
            <RecommendationSection id={user.id} />
            <BenefitSection benefits={benefits} />
          </>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

export default UserPage;
