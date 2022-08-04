import React from "react";
import { First } from "./first";
import { Five } from "./five";
import { Footer } from "./footer";
import { Fourty } from "./fourty";
import { Header } from "./header";
import { Introducing } from "./introducing";
import { Second } from "./second";
import { Stats } from "./stats";
import { Third } from "./third";

const Landing = () => {
  return (
    <>
      <Header />
      <First />
      <Second />
      <Stats />
      <Third />
      <Fourty />
      <Five />
      <Introducing />
      <Footer />
    </>
  );
};

export default Landing;
