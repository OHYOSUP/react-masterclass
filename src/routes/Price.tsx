import React from "react";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ReactApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
}

interface IHistoricalData {
  time_open: string;
  time_close: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Price({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistoricalData[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 5000,
    }
  );

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <ReactApexChart
          options={{
            chart: {
              fontFamily: "#fff",
              type: "candlestick",
              height: 350,
              toolbar:{
                show: false,
              }              
            },
            colors: ["#dfe6e9"],
            title: {
              text: "Price",
              align: "left",
              
            },
            xaxis: {
              type: "datetime",
              labels: {
                style: {
                  colors: "#dfe6e9"
                }
              }
            },
            yaxis: {
              tooltip: {
                enabled: false,
              },
              labels: {
                style:{
                  colors : "#dfe6e9"
                }
              }
            },
            plotOptions: {
              // 봉 스타일링
              candlestick: {
                colors: {
                  upward: '#d63031',
                  downward: '#0984e3'
                }
              }
            }
          }}
          series={[
            {              
              data: data?.map((price) => {
                return {
                  x: price.time_close,
                  // 개장가, 상한가, 저점, 종가
                  y: [price.open, price.high, price.low, price.close],
                }
              }),
            },
          ]as any}
          type="candlestick"
          height={350}
        />
      )}
    </div>
  );
}

export default Price;
