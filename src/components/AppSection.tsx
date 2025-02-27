"use client";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
  border-radius: 0 0 80px 80px;
  padding-top: 100px;
  padding-right: 230px;
  padding-left: 230px;
  padding-bottom: 140px;
  width: 100%;
  height: 630px;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
`;

const Tag = styled.p`
  color: #4039ff;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  gap: 5px;
`;

const Title = styled.h3`
  color: #191C1F;
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  width: 490px;
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: #191C1F;
  font-weight: 300;
`;

const AppLinks = styled.div`
  display: flex;
  gap: 12px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 480px;
  height: auto;
`;

const OverlayImage = styled(Image)`
  position: absolute;
  border-radius: 16px;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  background: none;

  &.visible {
    opacity: 1;
  }
`;

const AppSection = () => {
  const [visibleImages, setVisibleImages] = useState<string[]>([]);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setVisibleImages((prev) => [...prev, "appWomen"]);
    }, 100);

    const timer2 = setTimeout(() => {
      setVisibleImages((prev) => [...prev, "channel-card"]);
    }, 200);

    const timer3 = setTimeout(() => {
      setVisibleImages((prev) => [...prev, "channel-demo"]);
    }, 300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <Section>
      <ImageContainer>
        <Image src="/images/appSec/appBase.svg" alt="App Base" width={590} height={490} />
        <OverlayImage
          src="/images/appSec/appWomen.svg"
          alt="User"
          width={310}
          height={250}
          className={visibleImages.includes("appWomen") ? "visible" : ""}
          style={{ top: "-90px", right: "-110px", borderRadius: "20px" }}
        />
        <OverlayImage
          src="/images/appSec/channel-demo.svg"
          alt="Demo Channel"
          width={260}
          height={195}
          className={visibleImages.includes("channel-card") ? "visible" : ""}
          style={{ top: "195px", left: "-1px" }}
        />
                <OverlayImage
          src="/images/appSec/channel-card.svg"
          alt="Connected Card"
          width={350}
          height={230}
          className={visibleImages.includes("channel-demo") ? "visible" : ""}
          style={{ bottom: "-60px", right: "-95px" }}
        />
      </ImageContainer>
      <Content>
        <Tag>ПРИЛОЖЕНИЕ MC PAY</Tag>
        <Title>Использование наших сервисов еще удобнее</Title>
        <Features>
          <Feature>
            <Image src="/images/appSec/icons for cards.svg" alt="icon" width={32} height={32} />
            Поддержка 24/7
          </Feature>
          <Feature>
            <Image src="/images/appSec/icons for cards2.svg" alt="icon" width={32} height={32} />
            Вся статистика по заработкам
          </Feature>
          <Feature>
            <Image src="/images/appSec/icons for cards3.svg" alt="icon" width={32} height={32} />
            Безопасность твоих денег
          </Feature>
        </Features>
        <AppLinks>
          <Image src="/images/appSec/googleplay.svg" alt="Google Play" width={130} height={45} />
          <Image src="/images/appSec/appstore.svg" alt="App Store" width={130} height={45} />
        </AppLinks>
      </Content>
    </Section>
  );
};

export default AppSection;
