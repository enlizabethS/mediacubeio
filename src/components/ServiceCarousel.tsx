"use client";
import React, { useRef } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

const services = [
  {
    title: "Авансы для креаторов",
    description: "Получите доход с YouTube заранее, сразу за несколько месяцев или даже за год",
    image: "/images/servSec/1cardService.svg",
    imageWidth: 254,
    imageHeight: 118,
  },
  {
    title: "Досрочные выплаты",
    description: "Получай выплату от YouTube как можно раньше каждый месяц или единовразово",
    image: "/images/servSec/2cardService.png",
    imageWidth: 124,
    imageHeight: 118,
  },
  {
    title: "Экспрессы",
    description: "Заберите деньги когда вам необходимо или получайте их каждый день",
    image: "/images/servSec/image3card.png",
    imageWidth: 204,
    imageHeight: 118,
  },
  {
    title: "Омнивыплаты",
    description: "Выводите деньги удобным способом: на счет, на карту, на кошельки или в криптовалюте",
    image: "/images/servSec/4cardService.svg",
    imageWidth: 264,
    imageHeight: 118,
  },
  {
    title: "Криптокошелёк",
    description: "Самый простой способ получать, отправлять и обменивать криптовалюты",
    image: "/images/servSec/5cardService.svg",
    imageWidth: 264,
    imageHeight: 118,
  },
  {
    title: "Командные финансы",
    description: "Распределите доход от проекта между участниками команды в несколько кликов",
    image: "/images/servSec/6cardService.svg",
    imageWidth: 264,
    imageHeight: 118,
  },
];

const ServiceCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleWheelScroll = (e: React.WheelEvent) => {
    if (scrollRef.current) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY * 1.5;
    }
  };

  return (
    <Section>
      <Header>
        <Tag>СЕРВИСЫ</Tag>
        <HeaderRow>
          <h2>Сделай свою жизнь проще</h2>
          <Button>
            Оцени наши возможности <FaChevronRight className="chevron-icon" />
          </Button>
        </HeaderRow>
        <p>У нас есть продукт под каждого креатора</p>
      </Header>
      <ScrollWrapper>
        <ScrollContainer ref={scrollRef} onWheel={handleWheelScroll}>
          <Inner>
            {services.map((service, index) => (
              <Card key={index}>
                <TextContainer>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </TextContainer>
                <ImageContainer>
                  <Image src={service.image} alt={service.title} width={service.imageWidth} height={service.imageHeight} />
                </ImageContainer>
              </Card>
            ))}
            <Spacer />
          </Inner>
        </ScrollContainer>
      </ScrollWrapper>
    </Section>
  );
};

export default ServiceCarousel;

const Section = styled.section`
  width: 100%;
  max-width: 100vw;
  height: 700px;
  margin: 0 auto;
  padding: 40px 2px;
  overflow: hidden;
  background: rgb(255, 255, 255);
  border-radius: 80px 80px 0 0;
  padding-bottom: 80px;
`;

const Header = styled.div`
  padding: 70px 120px;
  padding-right: 0px;
  padding-left: -30px;
  padding-bottom: 0px;
  text-align: left;
  margin-bottom: 30px;

  h2 {
    font-size: 36px;
    font-weight: 700;
    color: #111827;
    margin-top: 10px;
  }

  p {
    color: #6b7280;
    font-size: 16px;
    margin-top: 10px;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Tag = styled.span`
  color: #4039ff;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
  padding-bottom: 20px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #4039ff;
  font-size: 16px;
  font-weight: 550;
  cursor: pointer;
  margin-right: 150px;

  .chevron-icon {
    stroke-width: 0.2; 
    font-size: 13px;
    font-weight: 500;
  }
`;

const ScrollWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const ScrollContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: 40px;
  padding-left: 130px;
  padding-right: 130px;
  min-width: 100vw;
  padding-left: calc((100vw - 1200px) / 2);

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Inner = styled.div`
  display: flex;
  gap: 18px;
  width: max-content;
  margin-right: -20vw;
`;

const Card = styled.div`
  flex: 0 0 328px;
  height: 360px;
  background: #f5f6fa;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #191c1f;
    margin-bottom: 5px;
  }

  p {
    font-size: 17px;
    color: #191c1f;
    margin: 5px 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  overflow: hidden;

  img {
    transform: scale(1.60);
  }
`;

const Spacer = styled.div`
  width: 500px;
`;