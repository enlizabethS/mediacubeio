"use client";

import React, { useRef } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

const ReviewsContainer = styled.div`
  padding: 2px;
  background-color: #f9f9f9;
  text-align: center;
  margin-top: 180px;
  margin-bottom: 130px;
`;

const ReviewsHeader = styled.div`
  display: flex;
  flex-direction: column; /* Располагаем элементы вертикально */
  align-items: flex-start; /* Выравниваем по левому краю */
  padding: 0 130px; /* Ваши отступы */
  margin-bottom: 40px;
  width: 100%;
  box-sizing: border-box; /* Убедимся, что padding включен в ширину */
`;

const Title = styled.h2`
  font-size: 32px;
  color: #191c1f;
  margin: 0; /* Убираем лишние отступы */
  padding-bottom: 10px; /* Отступ между заголовком и подзаголовком */
  padding-left: 60px;
`;

const SubtitleAndLinkWrapper = styled.div`
  display: flex;
  align-items: center; /* Выравниваем кнопку и подзаголовок по вертикали */
  justify-content: space-between; /* Распределяем пространство между элементами */
  width: 100%; /* Занимаем всю ширину */
`;

const Subtitle = styled.p`
  font-size: 24px;
  color: #636884;
  font-weight: 350;
  margin: 0; /* Убираем лишние отступы */
  padding-left: 60px;
`;

const AllReviewsLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4039ff;
  text-decoration: none;
  font-size: 1rem;
  gap: 8px;

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
  padding-left: calc((110vw - 1200px) / 2); /* Ваш отступ для скролла */
  min-width: 100vw;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Inner = styled.div`
  display: flex;
  gap: 18px;
  width: max-content;
`;

const ReviewCard = styled.div`
  flex: 0 0 328px;
  height: 360px;
  background: #fff;
  padding: 20px;
  border-radius: 20px;
  text-align: left;
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

const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CreatorName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #191c1f;
  margin-bottom: 5px;
`;

const Subscribers = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0;
`;

const ReviewText = styled.p`
  color: #191C1FE5;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0px;
  padding-bottom: 100px;
`;

const QuoteIcon = styled.p`
  font-size: 64px;
  color: rgba(64, 57, 255, 0.1);
  margin: 0;
  line-height: 1;
  margin-bottom: -30px;
`;

const Spacer = styled.div`
  width: 700px;
`;

const ReviewsSection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleWheelScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY * 1.5;
    }
  };

  const reviews = [
    {
      image: "/images/revSec/reviewsUser1.svg",
      name: "D Billions",
      subscribers: "29,5 млн подписчиков",
      review: "Mediacube помог мне значительно увеличить доходы моего канала. Благодаря их аналитическим инструментам и поддержке я достиг новых высот в создании контента.",
    },
    {
      image: "/images/revSec/reviewsUser2.svg",
      name: "Vernam",
      subscribers: "125 млн подписчиков",
      review: "Работать с Mediacube удобно и приятно. Они всегда готовы помочь, а платежи поступают вовремя. Мой канал растет и развивается благодаря их профессиональной поддержке.",
    },
    {
      image: "/images/revSec/reviewsUser3.svg",
      name: "GD NEWS",
      subscribers: "29,5 млн подписчиков",
      review: "Сотрудничество с Mediacube стало лучшим решением для моего канала. Они обеспечили мне быстрые выплаты и ценные советы по разработке контента.",
    },
    {
      image: "/images/revSec/reviewsUser4.svg",
      name: "Astra!",
      subscribers: "125 млн подписчиков",
      review: "Благодаря Mediacube улучшить качество связи и увеличить заработную поддержку и аналитическую уровню!",
      style: { paddingBottom: "50px" },
    },
  ];

  return (
    <ReviewsContainer>
      <ReviewsHeader>
        <Title>Почему нам доверяют?</Title>
        <SubtitleAndLinkWrapper>
          <Subtitle>Отзывы креаторов которые уже сотрудничают с нами</Subtitle>
          <AllReviewsLink href="#">
            Все отзывы <FaChevronRight className="chevron-icon" />
          </AllReviewsLink>
        </SubtitleAndLinkWrapper>
      </ReviewsHeader>
      <ScrollWrapper>
        <ScrollContainer ref={scrollRef} onWheel={handleWheelScroll}>
          <Inner>
            {reviews.map((review, index) => (
              <ReviewCard key={index} style={review.style}>
                <ReviewerInfo>
                  <Image src={review.image} alt={review.name} width={44} height={44} />
                  <div>
                    <CreatorName>{review.name}</CreatorName>
                    <Subscribers>{review.subscribers}</Subscribers>
                  </div>
                </ReviewerInfo>
                <QuoteIcon>“</QuoteIcon>
                <ReviewText>{review.review}</ReviewText>
              </ReviewCard>
            ))}
            <Spacer />
          </Inner>
        </ScrollContainer>
      </ScrollWrapper>
    </ReviewsContainer>
  );
};

export default ReviewsSection;