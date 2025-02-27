"use client";
import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { FaChevronLeft, FaChevronDown } from "react-icons/fa";
import { FiDollarSign,  FiPlay, FiUser } from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";

// Типизация пропсов
interface MenuItemProps {
  $isOpen: boolean;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 80px 10%;
  background-color: #f9f9f9;
`;

const LeftSection = styled.div`
  max-width: 50%;
`;

const Tag = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #5454e6;
  text-transform: uppercase;
  margin-bottom: 22px;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #181923;
  margin-bottom: 32px;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 10px;
`;

interface MenuHeaderProps {
  $isOpen: boolean;
}

interface MenuContentProps {
  $isOpen: boolean;
}

const MenuItem = styled.div<MenuItemProps>`
  background: transparent;
  ${({ $isOpen }) =>
    $isOpen &&
    `
    padding-left: 24px;
    background: url("/images/feaSec/scroll bar.svg") no-repeat left center;
    background-size: contain;
  `}
  padding: 12px 16px;
  cursor: pointer;
  transition: border-color 0.3s ease;
  border-radius: 8px;
`;

const MenuHeader = styled.div<MenuHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: ${({ $isOpen }) => ($isOpen ? "700" : "600")};
  color: ${({ $isOpen }) => ($isOpen ? "#181923" : "#545465")};
`;

const MenuContent = styled.div<MenuContentProps>`
  font-size: 16px;
  color: #545465;
  margin-top: ${({ $isOpen }) => ($isOpen ? "10px" : "0")};
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  transition: all 0.3s ease;
`;

const PhoneContainer = styled.div`
  width: 338px;
  height: 600px; /* ← Убедитесь, что у контейнера есть фиксированная высота */
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 40px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  padding: 10px;
  position: relative;
  overflow: hidden;
  gap: 15px;
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  font-size: 14px;
  color: #000;
`;

const Time = styled.span`
  font-weight: 600;
`;

const NetworkIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const TransactionsHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 10px;
  margin-bottom: 10px;
  position: relative;
`;

const BackArrow = styled(FaChevronLeft)`
  position: absolute;
  left: 0;
  cursor: pointer;
  color: #636884;
`;

const TransactionsTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #636884;
  text-align: center;
`;

// Анимация появления маленькой транзакции и её увеличения
const scaleUp = keyframes`
  0% { transform: scale(0.3); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

// Анимация смещения вниз для остальных транзакций
const moveDown = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(20px); }
`;

interface TransactionCardProps {
  $isNew: boolean;
  $isMoving: boolean;
}

const TransactionCard = styled.div<TransactionCardProps>`
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 8px;
  border-radius: 12px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);

  opacity: ${({ $isNew }) => ($isNew ? 0 : 1)};
  transform: ${({ $isNew }) => ($isNew ? "scale(0.5)" : "scale(1)")};
  
  animation: ${({ $isNew }) => ($isNew ? scaleUp : "")} 0.8s ease forwards,
             ${({ $isMoving }) => ($isMoving ? moveDown : "")} 0.8s ease-in-out;
`;

const TransactionList = styled.div`
  flex-grow: 2; /* ← Заставляем его занимать все доступное пространство */
  width: 100%;
  overflow-y: auto; /* ← Добавляем прокрутку */
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
`;

const RecruitmentIcon = styled.div`
  width: 36px;
  height: 36px;
  position: relative;
  background: linear-gradient(135.12deg, #FFBA53 0.07%, #FF8311 100.02%);
  box-shadow: 0px 7.49431px 12.8474px rgba(255, 164, 113, 0.2);
  border-radius: 7.49431px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LocalCurrencyIcon = styled.div`
  width: 36px;
  height: 36px;
  position: relative;
  background: linear-gradient(135.12deg, #FA7ABF 0.07%, #D456D7 100.02%);
  box-shadow: 0px 9.30851px 15.9574px rgba(239, 145, 241, 0.2);
  border-radius: 9.30851px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaypalIcon = styled.div`
  width: 36px;
  height: 36px;
  position: relative;
  background: linear-gradient(135.12deg, #78CCF0 0.08%, #0A87BE 100.02%);
  box-shadow: 0px 9.30851px 15.9574px rgba(120, 210, 249, 0.2);
  border-radius: 9.30851px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardUSDIcon = styled.div`
  width: 36px;
  height: 36px;
  position: relative;
  background: linear-gradient(135.12deg, #FDAE9D 0.07%, #E374CA 100.02%);
  box-shadow: 0px 9.31px 15.96px 0px #F191B433;
  border-radius: 9.30851px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CapitalistIcon = styled.div`
  width: 36px;
  height: 36px;
  position: relative;
  background: linear-gradient(135.12deg, #B4DE77 0.07%, #84AA4D 100.02%);
  box-shadow: 0px 9.04px 15.5px 0px #62B24633;
  border-radius: 9.30851px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TetherERCIcon = styled.div`
  width: 36px;
  height: 36px;
  position: relative;
  background: linear-gradient(135.12deg, #69C9AF 0.07%, #3E9A80 100.02%);
  box-shadow: 0px 8.72px 14.53px 0px #2C8E5333;
  border-radius: 9.30851px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TransactionDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  margin-left: 12px;
`;

interface TransactionTitleProps {
  $isFirst: boolean;
}

const TransactionTitle = styled.span<TransactionTitleProps>`
  font-size: 14px;
  font-weight: 550;
  color: ${({ $isFirst }) => ($isFirst ? "#202427" : "#636884")};
  position: relative;
`;

const TransactionAmount = styled.span<{ $isNegative: boolean }>`
  font-size: 14px;
  font-weight: 550;
  color: #202427;
  position: relative;
`;

const NewLabel = styled.span`
  font-size: 10px;
  font-weight: 500;
  color: #4039FF;
  background: #E0E0FF;
  padding: 2px 7px;
  border-radius: 7px;
  margin-left: 2px;
  width: 18%;
  justify-content: center;
`;

const HiddenInfo = styled.div`
  width: 40%;
  height: 8px;
  background: #D9D9D9;
  border-radius: 1px;
  opacity: 0.5;
`;

const BottomNav = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background: #ffffff;
  border-top: 1px solid #f0f0f0;
`;

const NavIcon = styled.div`
  color: #8e8e93;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
`;

const DollarIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #8e8e93;
  background: transparent;
`;

const PlayIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: 2px solid #8e8e93;
  background: transparent;
`;

const ProfileIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #8e8e93;
  background: transparent;
`;

// const fadeIn = keyframes`
//   from { opacity: 0; }
//   to { opacity: 1; }
// `;

// const bounce = keyframes`
//   0%, 100% { transform: translateY(0); }
//   50% { transform: translateY(-5px); }
// `;

// const slideUp = keyframes`
//   from { transform: translateY(20px); opacity: 0; }
//   to { transform: translateY(0); opacity: 1; }
// `;

// const MessagesContainer = styled.div`
//   height: 100%;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   gap: 2px;
//   position: relative;
//   padding: 10px;

// `;

// const SupportMessage = styled.div`
//   opacity: 0;
//   animation: ${fadeIn} 0.5s ease forwards, ${slideUp} 0.5s ease-out;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   padding: 10px;

//   max-width: 80%; // Максимальная ширина сообщения
// `;

// const DotsContainer = styled.div`
//   display: flex;
//   gap: 5px;
//   margin-top: 10px;
//   padding: 10px;
//   max-width: 80%; // Максимальная ширина
// `;

// const BouncingCircle = styled.div`
//   width: 14px;
//   height: 14px;
//   border-radius: 50%;
//   background-color: #7E57C2;
//   animation: ${fadeIn} 0.7s ease forwards, ${bounce} 1s infinite;
// `;
// const messages = [
//   "/images/feaSec/avansSupportHi.svg",
//   "/images/feaSec/avansSupportAns1.svg",
//   "/images/feaSec/avansSupportAns2.svg",
//   "/images/feaSec/avansSupportHi2.svg",
//   "/images/feaSec/ansSupportHi3.svg",
//   "/images/feaSec/ansSupAns3.svg",
//   "/images/feaSec/ansvSupHi4.png",
// ];

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const SupportMessage = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.5s ease forwards;
`;

const BouncingCircle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #7E57C2;
  animation: ${fadeIn} 0.7s ease forwards, ${bounce} 1s infinite;
`;

const SupportChatWrapper = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  height: 100%; /* Делаем контейнер динамическим */
  overflow: hidden;
  position: relative;
  background: white;
  border-bottom: none;
`;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1; /* Заставляем контейнер расти */
  overflow-y: auto; /* Разрешаем внутренний скролл */
  position: absolute;
  
  transform: translateY(0);
  transition: transform 0.5s ease-in-out;
  background-color: white;
  border-bottom: none;
  padding-bottom: 10px; /* Чтоб текст не прилипал к границе */
`;


// const slideIn = keyframes`
//   from { opacity: 0; transform: translateX(100%) scale(1); }
//   to { opacity: 1; transform: translateX(0) scale(1); }
// `;

// const slideOut = keyframes`
//   from { opacity: 1; transform: translateX(0) scale(1); }
//   to { opacity: 0; transform: translateX(-100%) scale(1); }
// `;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(50%) scale(0.9); }
  to { opacity: 1; transform: translateX(0) scale(1); }
`;

const slideOut = keyframes`
  from { opacity: 1; transform: translateX(0) scale(1); }
  to { opacity: 0; transform: translateX(-50%) scale(0.9); }
`;

const SwipeContainer = styled.div`
  width: 100%;
  height: 321px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div<{ $isActive: boolean; $isExiting: boolean }>`
  width: 100%;
  height: 321px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${(props) =>
    props.$isExiting ? slideOut : props.$isActive ? slideIn : "none"} 1.5s ease-in-out;
`;

const cards = [
  "/images/feaSec/PhoneServ1.svg",
  "/images/feaSec/PhoneServ2.svg",
  "/images/feaSec/PhoneServ3.svg",
  "/images/feaSec/PhoneServ4.svg",
  "/images/feaSec/PhoneServ5.svg",
  "/images/feaSec/PhoneServ6.svg",
];

const menuItems = [
  {
    title: "Платежи",
    content:
      "Mediacube обеспечивает безопасные и своевременные платежи для креаторов, обеспечивая быстрый и надежный доход. Сосредоточьтесь на своем творчестве, а мы позаботимся обо всем остальном.",
  },
  {
    title: "Финансирование",
    content:
      "Будь то крупный проект, непредвиденные расходы или что-то среднее - получите деньги, когда они вам нужны.",
  },
  {
    title: "Сервисы",
    content:
      "Mediacube расширяет ваш творческий путь с помощью аналитики, инструментов оптимизации и индивидуальной поддержки.",
  },
  {
    title: "Поддержка",
    content:
      "Mediacube предлагает вам индивидуальную поддержку. Наша команда экспертов предоставляет персонализированные рекомендации и решения любых вопросов или проблем.",
  },
];

const transactions = [
  {
    id: 1,
    icon: "recruitment",
    title: "Доход за рекрутинг",
    amount: "5 960,00 $",
    $isNegative: false,
  },
  {
    id: 2,
    icon: "local-currency",
    title: "Перевод Инна Васи...",
    amount: "-153,42 $",
    $isNegative: true,
  },
  {
    id: 3,
    icon: "paypal",
    title: "Перевод на PayPal",
    amount: "12 050,00 $",
    $isNegative: false,
    $isNew: true,
  },
  {
    id: 4,
    icon: "card-usd",
    title: "Доход от Muzee...",
    amount: "25 700,00 $",
    $isNegative: false,
  },
  {
    id: 5,
    icon: "capitalist",
    title: "Перевод на Capitalis",
    amount: "450,00 $",
    $isNegative: false,
  },
  {
    id: 6,
    icon: "tetherERC",
    title: "Выплата за реклам...",
    amount: "10 920,00 $",
    $isNegative: false,
    $isNew: false,
  },
];

const FeaturesSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showTransactions, setShowTransactions] = useState<boolean>(true);
  const [showAdvanceRequest, setShowAdvanceRequest] = useState<boolean>(false);
  const [showSupport, setShowSupport] = useState<boolean>(false);
  const [animatedTransactions, setAnimatedTransactions] = useState(transactions);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedTransactions((prevTransactions) => {
        const lastTransaction = prevTransactions[prevTransactions.length - 1];
        return [lastTransaction, ...prevTransactions.slice(0, prevTransactions.length - 1)];
      });
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);
  


  const [activeIndex, setActiveIndex] = useState(0);
  const [exitingIndex, setExitingIndex] = useState(-1);

  useEffect(() => {
    const timeout = setInterval(() => {
      setExitingIndex(activeIndex);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
        setExitingIndex(-1);
      }, 1300); // Даем время для анимации ухода
    }, 2500); // 3 секунды на смену

    return () => clearInterval(timeout);
  }, [activeIndex]);

  const [amount, setAmount] = useState(1000);
  const [progressWidths, setProgressWidths] = useState([73, 160, 116]);
  const [circlePosition, setCirclePosition] = useState(73);
  const [activeBarIndex, setActiveBarIndex] = useState(0);

  useEffect(() => {
    if (showAdvanceRequest) {
      const interval = setInterval(() => {
        setAmount(Math.floor(Math.random() * (50000 - 1000 + 1)) + 1000);
        const newWidths = [Math.random() * 288, Math.random() * 288, Math.random() * 288];
        setProgressWidths(newWidths);
        const newActiveIndex = Math.floor(Math.random() * 3);
        setActiveBarIndex(newActiveIndex);
        setCirclePosition(newWidths[newActiveIndex] - 10); // Чуть ближе к #4039FF
      }, 800);
      return () => clearInterval(interval);
    }
  }, [showAdvanceRequest]);

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [showDots, setShowDots] = useState<boolean>(false);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);


  const baseImages: string[] = [
    "/images/feaSec/SupHi.svg",
    "/images/feaSec/SupAns.svg",
    "/images/feaSec/SupAns2.svg",
    "/images/feaSec/SupHi2.svg",
    "/images/feaSec/SupHi3.svg",
    "/images/feaSec/SupAns3.svg",
    "/images/feaSec/SupHi4.png",
  ];

  const images = Array(25).fill([...baseImages]).flat();


  useEffect(() => {
    const interval = setInterval(() => {
      setShowDots(true);
      setTimeout(() => {
        setShowDots(false);
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      const messageHeight = 75; // Высота каждого сообщения

      // Перемещаем контейнер вверх, делая бесконечный эффект
      messagesContainerRef.current.style.transform = `translateY(-${Math.min((currentImageIndex - 2) * messageHeight)}px)`;
    }
  }, [currentImageIndex]);
  
  const handleMenuItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    setShowTransactions(index === 0);
    setShowAdvanceRequest(index === 1);
    setShowServices(index === 2);
    setShowSupport(index === 3);
  };

  const handleBackArrowClick = () => {
    setShowTransactions(true);
    setShowAdvanceRequest(false);
    setShowServices(false);
    setShowSupport(false);
    setOpenIndex(0);
  };

  return (
    <Container>
      <LeftSection>
        <Tag>НАША ЭКОСИСТЕМА</Tag>
        <SectionTitle>Основные компоненты нашей экосистемы</SectionTitle>
        <MenuContainer>
          {menuItems.map((item, index) => (
            <MenuItem key={index} $isOpen={openIndex === index} onClick={() => handleMenuItemClick(index)}>
              <MenuHeader $isOpen={openIndex === index}>
                {item.title}
                <FaChevronDown
                  style={{
                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </MenuHeader>
              <MenuContent $isOpen={openIndex === index}>{item.content}</MenuContent>
            </MenuItem>
          ))}
        </MenuContainer>
      </LeftSection>

      <PhoneContainer>
        <TopBar>
          <Time>9:41</Time>
          <NetworkIcons>
            {/* Иконка сигнала сети */}
            <Image src="/images/feaSec/signalmeasure_121539.svg" alt="Signal" width={15} height={15} />
            {/* Иконка Wi-Fi */}
            <Image src="/images/feaSec/wifi_signal_icon_131484.svg" alt="Wi-Fi" width={17} height={17} />
            {/* Иконка батареи */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 6H7C4.24 6 2 8.24 2 11V13C2 15.76 4.24 18 7 18H17C19.76 18 22 15.76 22 13V11C22 8.24 19.76 6 17 6ZM17 16H7C5.34 16 4 14.66 4 13V11C4 9.34 5.34 8 7 8H17C18.66 8 20 9.34 20 11V13C20 14.66 18.66 16 17 16Z" fill="black"/>
              <path d="M17 10H7C6.45 10 6 10.45 6 11V13C6 13.55 6.45 14 7 14H17C17.55 14 18 13.55 18 13V11C18 10.45 17.55 10 17 10Z" fill="black"/>
            </svg>
          </NetworkIcons>
        </TopBar>
        <TransactionsHeader>
          <BackArrow size={16} onClick={handleBackArrowClick} /> {/* Добавляем обработчик клика */}
          <TransactionsTitle>
          {showAdvanceRequest ? "Запрос Аванса" : showServices ? "Сервисы" : showSupport ? "Поддержка" : "Транзакции"}
          </TransactionsTitle>
        </TransactionsHeader>
        {showTransactions && (
  <TransactionList>
    {animatedTransactions.map((transaction, index) => (
     <TransactionCard 
     key={transaction.id || index} 
     $isNew={index === 0} 
     $isMoving={index > 0}
   >
        <IconWrapper>
          {transaction.icon === "recruitment" && (
            <RecruitmentIcon>
              <Image src="/images/feaSec/Union.svg" alt="Recruitment" width={20} height={20} />
            </RecruitmentIcon>
          )}
          {transaction.icon === "local-currency" && (
            <LocalCurrencyIcon>
              <Image src="/images/feaSec/Group 48208.svg" alt="Local Currency" width={20} height={20} />
            </LocalCurrencyIcon>
          )}
          {transaction.icon === "paypal" && (
            <PaypalIcon>
              <Image src="/images/feaSec/Group 48213.svg" alt="PayPal" width={20} height={20} />
            </PaypalIcon>
          )}
           {transaction.icon === "card-usd" && (
            <CardUSDIcon>
               <Image src="/images/feaSec/CardUSD.svg" alt="PayPal" width={20} height={20} />
            </CardUSDIcon>
           )}
          {transaction.icon === "capitalist" && (
            <CapitalistIcon>
               <Image src="/images/feaSec/Capitalist.svg" alt="PayPal" width={20} height={20} />
            </CapitalistIcon>
           )}
            {transaction.icon === "tetherERC" && (
            <TetherERCIcon>
               <Image src="/images/feaSec/TetherERC.svg" alt="PayPal" width={20} height={20} />
            </TetherERCIcon>
           )}

        </IconWrapper>

        <TransactionDetails>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <TransactionTitle   $isFirst={index === 0}>{transaction.title}</TransactionTitle>
            <TransactionAmount $isNegative={transaction.$isNegative}>
              {transaction.amount}
            </TransactionAmount>
          </div>

{/* Контейнер для "Новая" и HiddenInfo */}
<div style={{ display: 'flex', alignItems: 'center', gap: '80px', marginTop: '4px', marginLeft: '2px' }}>
  {/* "Новая" рендерится при необходимости */}
  {transaction.$isNew && <NewLabel style={{ width: '18%' }}>Новая</NewLabel>}

  {/* Контейнер для HiddenInfo с фиксированными размерами */}
  <div style={{ display: 'flex', justifyContent: 'space-between', minWidth: '110px', width: '100%' }}>
    {/* Первый HiddenInfo (фиксированный размер) */}
    {!transaction.$isNew && transaction.icon !== "paypal" && (
      <HiddenInfo style={{ width: '120px', minHeight: '10px', background: 'rgba(0,0,0,0.1)', flexShrink: 0 }} />
    )}

    {/* Второй HiddenInfo (фиксированный размер и одинаковый отступ) */}
    <HiddenInfo style={{ width: '50px', minHeight: '10px', background: 'rgba(0,0,0,0.1)', flexShrink: 0, marginLeft: '80px' }} />
  </div>
</div>

        </TransactionDetails>
      </TransactionCard>
    ))}
  </TransactionList>
)}

        {showAdvanceRequest && (
  <div style={{ padding: '2px', width: '100%', display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'center', marginTop: '-50px' }}>
  <Image src="/images/feaSec/avansIcon.svg" alt="Avans" width={258} height={200} />
  <p style={{ fontWeight: '700', fontSize: '32px', lineHeight: '30.4px', textAlign: 'center', margin: '0px', color: '#636884' }}>
    {amount}.00$
  </p>
  <p style={{ fontWeight: '400', fontSize: '12px', lineHeight: '19.2px', textAlign: 'center', margin: '0px', color: '#75808A' }}>
    Авансовый платеж
  </p>
  <div style={{ width: '288px', display: 'flex', flexDirection: 'column', gap: '25px', paddingBottom: '20px', paddingTop: '20px' }}>
    {progressWidths.map((width, index) => (
      <div key={index} style={{ width: '288px', height: '8px', position: 'relative', background: '#EFEFF1', borderRadius: '4px' }}>
        <div style={{ width: `${width}px`, height: '8px', background: '#4039FF', borderRadius: '4px', boxShadow: '0px 0px 10px rgba(58, 113, 255, 0.4)' }} />
        {index === activeBarIndex && (
          <motion.div
            animate={{ left: circlePosition }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: 'absolute',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.97)',
              border: '1px solid rgba(217, 217, 217, 0.65)',
              top: '50%',
              transform: 'translateY(-50%) scale(0.9)',
              filter: 'blur(2px)',
              boxShadow: `
                0 0 10px 5px rgba(255, 255, 255, 0.5),
                0 4px 6px rgba(0, 0, 0, 0.1)
              `,
            }}
          />
        )}
      </div>
    ))}
  </div>
  <button style={{ backgroundColor: '#636884', color: '#ffffff', padding: '13px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', width: '100%', maxWidth: '288px', marginTop: '20px' }}>
    Запросить
  </button>
</div>
)}


{showServices && (
 <SwipeContainer>
 {cards.map((card, index) => (
   <CardWrapper key={index}>
     {(index === activeIndex || index === exitingIndex) && (
       <Card $isActive={index === activeIndex} $isExiting={index === exitingIndex}>
         <Image src={card} alt={`Card ${index + 1}`} width={1480} height={321} />
       </Card>
     )}
   </CardWrapper>
 ))}
</SwipeContainer>
        )}


      {showSupport && (
      <SupportChatWrapper>
      <MessagesContainer ref={messagesContainerRef}>
        {images.slice(0, currentImageIndex + 1).map((image, index) => (
          <SupportMessage key={index}>
            <Image
              src={image}
              alt={`Support ${index}`}
              layout="intrinsic"
  width={100} // Минимальное значение (не влияет на отображение)
  height={1}
              style={{ width: "292px", height: "40px", marginTop: "5px" }}
            />
            {index === currentImageIndex && showDots && (
              <div style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
                <BouncingCircle />
                <BouncingCircle style={{ animationDelay: "0.2s" }} />
                <BouncingCircle style={{ animationDelay: "0.4s" }} />
              </div>
            )}
          </SupportMessage>
        ))}
      </MessagesContainer>
    </SupportChatWrapper>
      )}

        <BottomNav>
          <NavIcon>
            <DollarIconWrapper>
              <FiDollarSign size={20} color="#8e8e93" />
            </DollarIconWrapper>
            <span style={{ fontSize: '10px', color: '#8e8e93' }}></span>
          </NavIcon>
          <NavIcon>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="9" height="9" rx="2" ry="2" stroke="#8e8e93" strokeWidth="2" fill="none"/>
              <rect x="15" y="2" width="9" height="9" rx="2" ry="2" stroke="#8e8e93" strokeWidth="2" fill="none" transform="rotate(45 19.5 6.5)"/>
              <rect x="2" y="15" width="9" height="9" rx="2" ry="2" stroke="#8e8e93" strokeWidth="2" fill="none"/>
              <rect x="15" y="15" width="9" height="9" rx="2" ry="2" stroke="#8e8e93" strokeWidth="2" fill="none"/>
            </svg>
          </NavIcon>
          <NavIcon>
            <PlayIconWrapper>
              <FiPlay size={15} color="#000" style={{ marginLeft: '2px' }} />
            </PlayIconWrapper>
            <span style={{ fontSize: '7px', color: '#8e8e93' }}></span>
          </NavIcon>
          <NavIcon>
            <ProfileIconWrapper>
              <FiUser size={19} color="#8e8e93" />
            </ProfileIconWrapper>
            <span style={{ fontSize: '10px', color: '#8e8e93' }}></span>
          </NavIcon>
        </BottomNav>
      </PhoneContainer>
    </Container>
  );
}

export default FeaturesSection;