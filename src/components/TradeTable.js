import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const Table = styled.div`
  position: relative;
  display: block;
  margin: 2.2em 0;
  width: 100%;
  border: 1px solid #292b32;
  border-radius: 4px;
  background: #1d1f27;
`;

const Tr = styled.div`
  font-weight: 400;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  border-bottom: 1px solid #292b32;
  padding: 15px;
  box-sizing: border-box;
`;

const THead = styled.div`
  border-bottom: 1px solid #292b32;
`;

const TFooter = styled.div`
  background-color: #272727;
  text-align: center;
  padding: 10px 0;
  text-transform: uppercase;
  font-size: 12px;
  color: #fff;
`;

const Th = styled.span`
  display: flex;
  justify-content: end;
  color: #909094;
  font-size: 12px;
  padding: 5px 0;
  text-align: right;
`;
const Td = styled.span`
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 13px;
  padding: 7px 0;
  color: #fff;
`;

const TdTransferType = styled.span`
  color: #909094;
  font-size: 13px;
  text-transform: uppercase;
  margin-left: 1em;
`;

const TdTradeSymbol = styled.span`
  color: #909094;
  font-size: 10px;
  text-transform: uppercase;
  margin-left: 0.5em;
`;

const TdVolumeSymbol = styled.span`
  color: #909094;
  font-size: 10px;
  text-transform: uppercase;
  margin-left: 0.5em;
  margin-top: -6px;
`;

const Icon = styled.span`
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  margin-right: 1em;
  img {
    width: 24px;
    height: 24px;
  }
`;

const Button = styled.div`
  background: #95a824;
  border: none;
  color: #fff;
  border-radius: 4px;
  padding: 9px 15px;
  display: block;
  cursor: pointer;
`;

const Value = styled.span`
  border: none;
  color: #fff;
  border-radius: 4px;
  padding: 9px 0;
  width: 65px;
  text-align: center;
`;

const data = [
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

const TradeTable = ({ tableData }) => {
  const navigate = useNavigate();

  const passData = (item) => {
    navigate(`/easy-trade/${item.transferType}`, { state: { item } });
  };

  return (
    <div>
      <Table>
        <THead>
          <Tr>
            <Th style={{ width: "50%" }}></Th>
            <Th style={{ width: "10%" }}>Son ????lem</Th>
            <Th style={{ width: "10%" }}>De??i??im</Th>
            <Th style={{ width: "10%" }}>Hacim</Th>
            <Th style={{ width: "15%", justifyContent: "center" }}>
              24s Grafik
            </Th>
            <Th style={{ width: "5%" }} />
          </Tr>
        </THead>
        {tableData.map((item) => (
          <Tr key={item.transferType}>
            <Td style={{ width: "50%", justifyContent: "start" }}>
              <Icon style={{ backgroundColor: `${item.background}` }}>
                <img src={item.icon} alt={item.coinName} />
              </Icon>
              <span>{item.coinName}</span>
              <TdTransferType>{item.transferType}</TdTransferType>
            </Td>
            <Td style={{ width: "10%" }}>
              <span>{item.lastTradeValue}</span>
              <TdTradeSymbol>{item.tradeSymbol}</TdTradeSymbol>
            </Td>
            <Td style={{ width: "10%" }}>
              <Value
                style={{
                  backgroundColor: `${item.sitatue ? "#95a824" : "#e74263"}`,
                }}
              >
                {item.valueChange}
              </Value>
            </Td>
            <Td style={{ width: "10%" }}>
              <span>{item.volume}</span>
              <TdVolumeSymbol>{item.volumeSymbol}</TdVolumeSymbol>
            </Td>
            <Td style={{ width: "15%", justifyContent: "center" }}>
              <ResponsiveContainer width='100%' height='100%'>
                <LineChart
                  width={175}
                  height={65}
                  data={data}
                  margin={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 30,
                  }}
                >
                  <Line dataKey='time' stroke='#909094' dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </Td>
            <Td style={{ width: "5%" }}>
              <Button
                onClick={() => {
                  passData(item);
                }}
              >
                AL
              </Button>
            </Td>
          </Tr>
        ))}
        <TFooter>
          <Link to='/'>
            P??YASADAK?? t??m kr??pto para b??r??mler??n?? ke??fed??n &rarr;
          </Link>
        </TFooter>
      </Table>
    </div>
  );
};

export default TradeTable;
