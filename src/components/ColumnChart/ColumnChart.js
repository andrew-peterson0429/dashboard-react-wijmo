import "bootstrap/dist/css/bootstrap.css";
import "@mescius/wijmo.styles/wijmo.css";
import React from "react";
import * as wjChart from "@mescius/wijmo.react.chart";
import * as wjChartAnimate from "@mescius/wijmo.react.chart.animation";
// import { data, palette } from "./data";
import { ceData } from "../../data/ceDataBreakdown";

const palette = [
  "rgba(42,159,214,1)",
  "rgba(119,179,0,1)",
  "rgba(153,51,204,1)",
  "rgba(255,136,0,1)",
  "rgba(204,0,0,1)",
  "rgba(0,204,163,1)",
  "rgba(61,109,204,1)",
  "rgba(82,82,82,1)",
  "rgba(0,0,0,1)",
];

function ColumnChart({ chartData }) {
  let casesByTeam = [
    { team: "US Team", UScases: parseInt(chartData.USTeam) },
    { team: "India Team", INcases: parseInt(chartData.INTeam) },
  ];

  // { country: "United States", 2014: 17348075, 2015: 18036650, 2016: 18624450 },
  console.log("This is casesByteam: ", casesByTeam);

  return (
    <div className="container-fluid">
      <wjChart.FlexChart
        header="Cases by Team"
        bindingX="team"
        selectionMode="Point"
        itemsSource={casesByTeam}
        palette={palette}
      >
        <wjChart.FlexChartLegend position="Bottom" />
        <wjChart.FlexChartSeries name="US Team" binding="UScases" />
        <wjChart.FlexChartSeries name="India Team" binding="INcases" />
        {/* <wjChart.FlexChartSeries name="2016" binding="2016" /> */}
        <wjChartAnimate.FlexChartAnimation />
      </wjChart.FlexChart>
    </div>
  );
}

export default ColumnChart;
