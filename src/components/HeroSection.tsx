"use client";
import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 130px 20px;
  background-color: #f9f9f9;
`;

const CombinedImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 80px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 47px;
  padding: 10px 20px;
  width: 490px;
  height: 70px;
  margin-bottom: 40px;
`;

const StatsText = styled.div`
  font-size: 16px;
  color: #636884;
  line-height: 1.4;
  text-align: left;
  margin-left: 20px;
  white-space: nowrap;

  strong {
    font-weight: 600;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: bold;
  color: #191c1f;
  line-height: 68px;
  margin-top: 20px;
  position: relative;
`;

const VectorImage = styled.div`
  margin: 0 auto;
  width: 433.5px;
  height: 20.5px;
  position: relative;
  top: -10px; 
  margin-left: 630px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #191c1f;
  max-width: 700px;
  margin: 20px auto 20px;
`;

const CTAButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
  padding: 15px 30px;
  background-color: #4039ff;
  color: #ffffff;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #302fb8;
    transform: translateY(-2px);
  }

  span {
    font-size: 16px;
    font-weight: 300;
    line-height: 1;
  }
`;

const AdditionalLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 20px;
  color: #636884; /* Начальный цвет текста */
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #191c1f;

    svg {
      stroke: #191c1f; /* Цвет стрелки при наведении */
    }
  }

  svg {
    width: 20px;
    height: 20px;
    fill: none;
    stroke: #636884; /* Начальный цвет стрелки */
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: stroke 0.3s ease; /* Плавный переход цвета стрелки */
  }
`;

const HeroSection = () => (
  <HeroContainer>
    <InfoContainer>
      <CombinedImage>
        <Image
          src="/images/heroSec/picture.png"
          alt="Combined avatars and plus"
          width={180}
          height={40}
          quality={90}
          layout="intrinsic"
          style={{ display: "block", margin: "auto" }}
        />
      </CombinedImage>
      <StatsText>
        <strong>9,405 авторов</strong> доверили нам<br />
        <strong>325 млн долларов</strong> своих доходов
      </StatsText>
    </InfoContainer>
    <Title>
      Помогаем креаторам раскрыть <br /> свой полный потенциал
    </Title>
    <VectorImage>
      <Image
        src="/images/heroSec/image-4.png"
        alt="Decorative vector"
        width={433.5}
        height={20.5}
        quality={90}
        layout="responsive"
      />
    </VectorImage>
    <Subtitle>
      Мы предоставляем инструменты и услуги, позволяющие сделать создание
      контента более простым, удобным и прибыльным.
    </Subtitle>
    <CTAButton href="#">
  Зарегистрируйтесь, это бесплатно
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
</CTAButton>
<AdditionalLink href="#">
  Оцените наши возможности
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
</AdditionalLink>

  </HeroContainer>
);

export default HeroSection;
