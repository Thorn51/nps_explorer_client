import React, { useContext } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import { GlobalContext } from "../../context/GlobalState";
import "./ParkPage.css";

export default function ParkPage() {
  const { parks } = useContext(GlobalContext);
  console.log(parks[0].data[0].fullName);
  return (
    <>
      <Navigation />
      <Hero title={parks[0].data[0].fullName} />
    </>
  );
}
