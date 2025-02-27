"use client";
import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

const FooterContainer = styled.footer`
  background: #ffffff;
  width: 1330px;
  height: 680px;
  border-radius: 60px;
  padding: 40px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  margin: 0 auto; /* Центрирование по горизонтали */
  margin-bottom: 20px;
`;

/* Первая часть футера */
const TopSection = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const LeftSection = styled.div`
  max-width: 600px;
`;

const Logo = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color:  #191C1F;
  margin-bottom: 40px;

  img {
    display: block; /* Картинка не в одной строке с текстом */
    margin-top: -40px; /* Поднимаем картинку */
    margin-left: 100px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  color: #191C1F;
  ont-weight: solid;
  margin-bottom: 40px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 16px;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4039ff;
  color: #ffffff;
  width: 337;
  height: 48;
  border-radius: 12px;
  gap: 4px;
  padding-top: 12px;
  padding-right: 32px;
  padding-bottom: 12px;
  padding-left: 32px;
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

  svg {
    width: 20px;
    height: 20px;
    stroke: #ffffff;
  }
`;

const LoginButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px; /* Исправил width */
  height: 43px; /* Исправил height */
  gap: 4px;
  border-radius: 10px; /* Сохраняем радиус */
  padding: 10px 20px; /* Оставляем оригинальные padding */
  color: #4039ff;
  background-color: rgba(64, 57, 255, 0.07);
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s, opacity 0.3s;

  &:hover {
    background-color:rgba(64, 57, 255, 0.2); 
    color: #4039ff;
    opacity: 1; 
  }
`;

const RightSection = styled.div`
  weight: 480px;
  height: 272px;
  margin-left: 140px;
  background: #F5F6FA;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const QuestionTitle = styled.h3`
  font-size: 32px;
  font-weight: bold;
  color: #636884;
  margin-bottom: 8px;
`;

const QuestionText = styled.p`
  width: 416;
  height: 48;
  font-size: 18px;
  color: #636884;
  font-weight: 400;
  margin-bottom: 16px;
  font-family: SF Pro Display;
  line-height: 24px;
  letter-spacing: 0%;
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 10px 30px;
  background: #636884;
  margin-top: 80px;
  color: white;
  border-radius: 12px;
  text-align: center;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
`;

/* Вторая часть футера */
const BottomSection = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 15px;
  border-top: 2px solid #F5F6FA; 

`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 200px;
`;

const TitleColumn = styled.h3`
  font-weight: 600;
  color: #636884;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Link = styled.a`
  font-size: 12px;
  color: #636884;
  text-decoration: none;
  cursor: pointer;
  font-weight: 400;

  &:hover {
    color:  #4039ff
  }
`;

const BottomRow = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  font-size: 12px;
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LegalLinks = styled.div`
  display: flex;
  flex-wrap: wrap; /* Позволяет переносить ссылки при нехватке места */
  gap: 30px; /* Добавляет равномерный отступ между ссылками */
`;

const Footer = () => {
  return (
    <FooterContainer>
      {/* Верхняя часть футера */}
      <TopSection>
        <LeftSection>
          <Logo>
            <Image src="/images/header/icon.svg" alt="Mediacube" width={150} height={40} />
          </Logo>
          <Title>
            Начни свой путь к успеху вместе <br /> с нами
      <Image
        src="/images/heroSec/image-4.png"
        alt="Подчеркивание"
        width={290}
        height={15}
        quality={90}
      /> 
          </Title>
          <Description>Создайте аккаунт и используйте все возможности Mediacube</Description>
          <Buttons>
          <Button href="#">
  Зарегистрируйся, это бесплатно
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
</Button>
            <LoginButton href="#">Войти</LoginButton>
          </Buttons>
        </LeftSection>

        <RightSection>
          <QuestionTitle>У тебя остались вопросы?</QuestionTitle>
          <QuestionText>Наша команда готова помочь вам в решении <br/> любых вопросов и проблем</QuestionText>
          <ContactButton href="#">Написать нам</ContactButton>
        </RightSection>
      </TopSection>

      {/* Нижняя часть футера */}
      <BottomSection>
        <Column>
          <TitleColumn>Креаторам</TitleColumn>
          <Link href="#">MC Pay</Link>
          <Link href="#">Пакеты сервисов</Link>
          <Link href="#">Все сервисы</Link>
          <Link href="#">Для YouTube-креаторов</Link>
          <Link href="#">Для Facebook-креаторов</Link>
          <Link href="#">Для музыкантов</Link>
        </Column>

        <Column>
          <TitleColumn>Бизнесу</TitleColumn>
          <Link href="#">Массовые выплаты</Link>
          <Link href="#">Правообладателям</Link>
          <Link href="#">Для YouTube CSP</Link>
          <Link href="#">Рекламодателям</Link>
          <Link href="#">Разработчикам</Link>
        </Column>

        <Column>
          <TitleColumn>Компания</TitleColumn>
          <Link href="#">О компании</Link>
          <Link href="#">Карьера в Mediacube</Link>
          <Link href="#">Блог компании</Link>
          <Link href="#">Отношения с инвесторами</Link>
          <Link href="#">Брендам</Link>
          <Link href="#">Безопасность</Link>
        </Column>

        <Column>
          <TitleColumn>Мы в соцсетях</TitleColumn>
          <Link href="#">Facebook</Link>
          <Link href="#">Instagram</Link>
          <Link href="#">YouTube</Link>
          <Link href="#">Telegram</Link>
          <Link href="#">LinkedIn</Link>
        </Column>
      </BottomSection>

      <BottomRow>
        <LanguageSelector>
          <Image src="/images/footer/IconsBel.svg" alt="Беларусь" width={16} height={16} />
          <span>Беларусь</span>
          <Image src="/images/footer/IconsLanguage.svg" alt="Язык" width={16} height={16} />
          <span>Русский</span>
        </LanguageSelector>

        <LegalLinks>
          <Link href="#">Юридическое уведомление</Link>  
          <Link href="#">Условия использования сервиса</Link>  
          <Link href="#">Политика конфиденциальности</Link>  
          <Link href="#">База знаний MC Pay</Link>
        </LegalLinks>
      </BottomRow>
    </FooterContainer>
  );
};

export default Footer;
