"use client";

import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Nav = styled.nav`
  position: fixed; /* Закрепляем хэдер */
  top: 0;
  left: 0;
  width: 100%; /* Растягиваем на всю ширину */
  z-index: 1000; /* Поверх всех элементов */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  background-color: rgba(255, 255, 255, 0.8); /* Белый цвет с прозрачностью */
  backdrop-filter: blur(10px); /* Добавляем размытие для более приятного эффекта */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Тень для отделения от фона */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 90px;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const StyledLink = styled(motion.a)`
  font-size: 16 px;
  font-weight: 500;
  color: #191C1F; 
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px; /* Расстояние от текста до полоски */
    left: 45%;
    transform: translateX(-50%);
    width: 110%; /* Ширина полоски относительно ширины текста */
    height: 4px; /* Высота подчеркивания */
    background-color: #4039ff; /* Цвет подчеркивания */
    border-top-left-radius: 5px; /* Закругление сверху слева */
    border-top-right-radius: 5px; /* Закругление сверху справа */
    border-bottom-left-radius: 0; /* Прямая линия снизу слева */
    border-bottom-right-radius: 0; /* Прямая линия снизу справа */
    opacity: 0; 
    transition: opacity 0.3s, transform 0.3s;
  }

  &:hover::after {
    opacity: 1;
    transform: translateX(-50%);
  }
`;


const ArrowIcon = styled(motion.svg)`
  width: 12px;
  height: 12px;
  stroke: #000000;

  ${StyledLink}:hover & {
    stroke: #4039FF;
  }
`;

const LoginButton = styled(motion.button)`
  width: 110;
  height: 43;
  gap: 4px;
  border-radius: 12px;
  padding-top: 12px;
  padding-right: 32px;
  padding-bottom: 12px;
  padding-left: 32px;
  color: #4039FF;
  background-color: transparent;
  border: 1px rgb(255, 255, 255);
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
     background-color: rgba(64, 57, 255, 0.1); 
    color: #4039FF; 
    opacity: 1; 
  }
`;

const Header = () => (
  <Nav>
    {/* Логотип */}
    <LogoContainer>
      <Image src="/images/header/icon.svg" alt="Mediacube Logo" width={180} height={46} quality={90}/>
    </LogoContainer>

    {/* Навигационные ссылки */}
    <NavLinks>
      {["Креаторам", "Бизнесу", "Компания"].map((text, index) => (
        <StyledLink
          key={index}
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}

        >
          {text}
          <ArrowIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </ArrowIcon>
        </StyledLink>
      ))}
    </NavLinks>

    {/* Кнопка "Войти" */}
    <LoginButton
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Войти
    </LoginButton>
  </Nav>
);

export default Header;
