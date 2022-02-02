import Head from "next/head";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import config from "../tailwind.config";

const blackLight = config.theme.extend.colors.black.light;
const grayOutline = config.theme.extend.colors.gray.outline;
const greenLight = config.theme.extend.colors.green.light;

const options: Highcharts.Options = {
  chart: {
    type: "bar",
    backgroundColor: blackLight,
    animation: false,
  },
  credits: {
    enabled: false,
  },
  title: {
    style: {
      display: "none",
    },
  },
  xAxis: {
    categories: ["Alpha Finance", "Maple Finance", "Synthetix", "Aave", "dYdX"],
    title: {
      text: null,
    },
  },
  yAxis: {
    min: 0,
    gridLineColor: grayOutline,
    title: {
      text: null,
    },
    labels: {
      overflow: "justify",
    },
  },
  tooltip: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 5,
      borderWidth: 0,
      dataLabels: {
        enabled: true,
      },
      color: greenLight,
    },
    series: {
      animation: {
        duration: 0,
      },
    },
  },
  series: [
    {
      name: "P/E Ratios",
      type: "bar",
      data: [169, 77, 42, 18, 4],
    },
  ],
};

export default function Home() {
  return (
    <div className="bg-black-light">
      <Head>
        <title>P/E ratio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-[675px] w-[1200px] bg-slate-400">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}
