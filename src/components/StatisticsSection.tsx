"use client";

import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

const StatsContainer = styled.section`
  display: grid;
  grid-template-areas:
    "trustpilot mcpay financing"
    "transactions views countries";
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  padding: 20px 20px;
  background-color: #f9f9f9;
  max-width: 1032px;
  margin: auto;
  border-radius: 10px;
  align-items: start;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-areas:
      "trustpilot"
      "mcpay"
      "financing"
      "transactions"
      "views"
      "countries";
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 32px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const TrustpilotCard = styled(Card)`
  grid-area: trustpilot;
  width: 328px;
  height: 401px;
  text-align: left;
  position: relative;
  overflow: hidden;
  padding: 32px;
  align-items: flex-start;
  background: url("/images/statsSec/Vector 50.png") no-repeat bottom left;
  quality: 90;

  h3 {
    color: #636884;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px; 
  }

  .trustpilot-rating {
    // display: flex;
    align-items: center; 
    gap: 8px;
    margin-bottom: 220px;
  }

  .trustpilot-rating img {
    width: 208px;
    height: 31px;
  }

  .excited-blond-man {
    position: absolute;
    bottom: 0;
    right: -8px;
    width: 350px;
    height: 370px;
  }
`;

const McPayCard = styled(Card)`
  grid-area: mcpay;
  width: 328px;
  height: 318px; /* Высота карточки 318px */
  background-color: #e8eaf4;
  align-items: flex-start;
  padding: 32px;
  text-align: left;
  position: relative;
  margin-top: 83px; 

  .logo {
    width: 93px;
    height: 24px;
    margin-bottom: 20px;
  }

  .description {
    font-size: 16px;
    font-weight: 550;
    color: #636884;
    margin-bottom: 170px;
  }

  .app-screen {
    position: absolute;
    bottom: 1px;
    left: 80%;
    transform: translateX(-50%);
    width: 316px;
    height: 251px;
    z-index: 1;
  }
`;

const StatCard = styled(Card)`
  width: 280px;
  height: 125px;
  gap: 4px;

  &.financing {
   font-weight: 700;
    margin-top: 53px; /* Отступ сверху для карточки financing */
    padding: 32px 24px;
    
    .financingTitle{
    font-weight: 700;
    }

    .financingD{
    font-weight: 550;
    }
  }

  &.transactions {
    position: relative;
    padding: 32px 48px;
    margin-left: 45px;

    .transactionsTitle{
    font-weight: 700;
    }
    .transactionsD{
    font-weight: 550;
    }
  }
`;

const LargeStatCard = styled(Card)`
  position: relative;
  display: flex;
  flex-direction: column; /* Элементы друг под другом */

  &.views {
    padding: 32px;
    width: 328px;
    height: 259px;
    align-items: flex-start; /* Выравнивание по левому краю */

    .eye-icon {
      position: absolute;
      left: 32px;
      top: 22px;
      width: 40px;
      height: 40px;
    }

    .graph {
      position: absolute;
      top: 10px;
      left: 32px;
      width: 263px;
      height: 120px;
      z-index: 1; /* График поверх текста */
    }

    .stat-number {
      margin-top: 103px; /* Отступ сверху для текста +60% */
      font-size: 32px;
      font-weight: 700;
      color: #636884;
      text-align: left; /* Выравнивание текста по левому краю */
      width: 100%; /* Ширина текстового блока */
    }

    .stat-description {
      margin-top: 8px; /* Отступ сверху для описания */
      font-size: 16px;
      font-weight: 550;
      color: #636884;
      text-align: left; /* Выравнивание текста по левому краю */
      width: 100%; /* Ширина текстового блока */
    }
  }

  &.countries {
    padding: 32px;
    width: 328px; /* Ширина карточки countries */
    height: 365px; /* Высота карточки countries */
    align-items: center; /* Выравнивание по центру для countries */
    justify-content: flex-start; /* Выравнивание по верхнему краю */
    margin-top: -220px; /* Поднимаем карточку выше */
    z-index: 0;
  
    .stat-number {
      font-size: 32px;
      font-weight: 700;
      color: #636884;
      margin-bottom: 8px; /* Отступ снизу для текста "132" */
    }

    .stat-description {
      font-size: 16px;
      font-weight: 550;
      color: #636884;
      text-align: center; /* Выравнивание текста по центру */
      margin-bottom: 16px; /* Отступ снизу для описания */
    }

    .globe-image {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%; /* Ширина изображения на всю карточку */
      height: auto; /* Автоматическая высота для сохранения пропорций */
      border-bottom-left-radius: 20px; /* Закругляем нижний левый угол */
      border-bottom-right-radius: 20px;
    }
  }
`;

const StatNumber = styled.h3`
  font-size: 32px;
  font-weight: 700;
  color: #636884;
`;

const StatDescription = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #636884;
`;

const StatisticsSection = () => {
  return (
    <StatsContainer>
      <TrustpilotCard>
        <h3>Отзывы о нас на Trustpilot</h3>
        <div className="trustpilot-rating">
          <Image src="/images/statsSec/image 49.png" alt="Trustpilot rating" width={208} height={31} quality={90} />
        </div>
        <Image
          src="/images/statsSec/excited-blond-man.png"
          alt="Trustpilot"
          width={350}
          height={370}
          quality={90}
          className="excited-blond-man"
        />
      </TrustpilotCard>

      <McPayCard>
        <Image src="/images/statsSec/logo.png" alt="mc pay" width={93} height={24} quality={90} className="logo" />
        <p className="description">Финансовое приложение для креаторов</p>
        <Image src="/images/statsSec/app-screen.png" alt="App UI" width={280} height={210} quality={90}className="app-screen" />
      </McPayCard>

      <StatCard style={{ gridArea: "financing" }} className="financing">
        <StatNumber className="financingTitle">$50млн</StatNumber>
        <StatDescription className="financingD">Финансирования</StatDescription>
      </StatCard>

      <StatCard style={{ gridArea: "transactions" }} className="transactions">
        <StatNumber className="transactionsTitle">$120млн+</StatNumber>
        <StatDescription className="transactionsD">Транзакций</StatDescription>
      </StatCard>

      <LargeStatCard style={{ gridArea: "views" }} className="views">
  <Image src="/images/statsSec/eye.png" alt="Views" width={40} height={40} quality={90} className="eye-icon" />
  <Image src="/images/statsSec/graph.png" alt="Graph" width={263} height={120} quality={90} className="graph" />
  <div className="stat-number">+60%</div>
  <div className="stat-description">Увеличение количества просмотров видео</div>
</LargeStatCard>

<LargeStatCard style={{ gridArea: "countries" }} className="countries">
  <div className="stat-number">132</div>
  <div className="stat-description">Страны, в которых мы работаем</div>
  <Image src="/images/statsSec/globe.png" alt="Globe" width={333} height={289} quality={90} className="globe-image" />
</LargeStatCard>
    </StatsContainer>
  );
};

export default StatisticsSection;