import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const Container = styled.div`
  position: absolute;
  max-width: 600px;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 300px;
  margin: auto;
`;

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #fff;
  width: 100%;
  border-bottom: 1px solid #bbbbbe;
  padding: 1em;
  box-sizing: border-box;
`;

const Icon = styled.span`
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin-right: 0.7em;
  img {
    width: 24px;
    height: 24px;
  }
`;

const TransferType = styled.span`
  color: #909094;
  font-size: 12px;
  text-transform: uppercase;
  margin-left: 0.7em;
`;

const Values = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Volume = styled.h2`
  color: #fff;
  font-size: 40px;
  text-align: center;
  padding: 30px 0;
  font-weight: 700;
`;
const ChartWrap = styled.h2`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 40px auto;
`;

const Trade = () => {
  const location = useLocation();
  const data = location.state.item;
  const dataTime = [
    {
      time: Math.random(),
    },
    {
      time: Math.random(),
    },
    {
      time: Math.random(),
    },
    {
      time: Math.random(),
    },
    {
      time: Math.random(),
    },
    {
      time: Math.random(),
    },
    {
      time: Math.random(),
    },
  ];

  return (
    <Container>
      <Wraper>
        <Header>
          <Icon style={{ backgroundColor: `${data.background}` }}>
            <img src={data.icon} alt={data.coinName} />
          </Icon>
          <span>{data.coinName}</span>
          <TransferType>{data.volumeSymbol}</TransferType>
        </Header>
        <Values>
          <Volume>₺ {data.lastTradeValue}</Volume>
          <ChartWrap>
            <LineChart width={600} height={200} data={dataTime}>
              <Line dataKey='time' stroke='#909094' dot={false} />
            </LineChart>
          </ChartWrap>
        </Values>
      </Wraper>
    </Container>
  );
};

export default Trade;
