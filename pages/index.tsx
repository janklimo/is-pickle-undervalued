import Head from "next/head";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import config from "../tailwind.config";

const blackLight = config.theme.extend.colors.black.light;
const grayOutline = config.theme.extend.colors.gray.outline;
const grayLight = config.theme.extend.colors.gray.light;
const greenLight = config.theme.extend.colors.green.light;
const orange = config.theme.extend.colors.orange.DEFAULT;

const options: Highcharts.Options = {
  chart: {
    type: "bar",
    backgroundColor: blackLight,
    animation: false,
    height: 520,
  },
  credits: {
    enabled: false,
  },
  colors: [greenLight],
  title: {
    style: {
      display: "none",
    },
  },
  xAxis: {
    categories: [
      "Alpha Finance",
      "PoolTogether",
      "Maple Finance",
      "Synthetix",
      "Helium",
      "Aave",
      "Axie Infinity",
      "Compound",
      "Liquity",
      "Pickle Finance",
    ],
    title: {
      text: null,
    },
    labels: {
      style: {
        color: grayLight,
      },
    },
  },
  yAxis: {
    min: 0,
    gridLineColor: grayOutline,
    title: {
      text: null,
    },
    labels: {
      style: {
        color: grayLight,
      },
    },
  },
  tooltip: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      borderWidth: 0,
      dataLabels: {
        enabled: true,
      },
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
      data: [
        169,
        130,
        101,
        78,
        69,
        42,
        27,
        21,
        18,
        {
          y: 7.6,
          color: orange,
        },
      ],
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
