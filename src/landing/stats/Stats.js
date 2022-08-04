import React from "react";
import {
  ContainerSingleStat,
  ContainerStats,
  TextStats,
  TitleStats,
} from "./StatsStyled";

const Stats = () => {
  return (
    <ContainerStats>
      <ContainerSingleStat>
        <TitleStats>$133.7 B</TitleStats>
        <TextStats>
          Worldwide spending on cybersecurity is forecast to reach $133.7
          billion in 2022
        </TextStats>
      </ContainerSingleStat>
      <ContainerSingleStat>
        <TitleStats>+60 %</TitleStats>
        <TextStats>
          Over 60% of businesses experienced phishing and social engineering
          attacks in 2019.
        </TextStats>
      </ContainerSingleStat>
      <ContainerSingleStat>
        <TitleStats>5%</TitleStats>
        <TextStats>
          Only 5% of company folders are properly protected.
        </TextStats>
      </ContainerSingleStat>
    </ContainerStats>
  );
};

export default Stats;
