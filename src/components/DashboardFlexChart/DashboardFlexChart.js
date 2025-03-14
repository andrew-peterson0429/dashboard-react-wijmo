import "bootstrap/dist/css/bootstrap.css";
import "@mescius/wijmo.styles/wijmo.css";
import React from "react";
import * as wjChart from "@mescius/wijmo.react.chart";
import * as wjChartAnimate from "@mescius/wijmo.react.chart.animation";
import { data } from "./data";
import { ceData } from "../../data/ceDataBreakdown";

const getObjectByProperty = (array, property, value) => {
  return array.find((obj) => obj[property] === value);
};

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

function DashboardFlexChart({ chartData }) {
  let casesByTeam = [
    { day: "Sun", UsTeam: 42, InTeam: 22.3 },
    { day: "Mon", UsTeam: 32, InTeam: 6.9 },
    { day: "Tue", UsTeam: 45, InTeam: 14.6 },
    { day: "Wed", UsTeam: 26, InTeam: 20.8 },
    { day: "Thur", UsTeam: 38, InTeam: 25.5 },
    { day: "Fri", UsTeam: 23, InTeam: 27.9 },
    { day: "Sat", UsTeam: 42, InTeam: 26.9 },
  ];

  let casesByProduct = [
    { product: "Wijmo", cases: parseInt(chartData.PGWijmo) },
    { product: "ComponentOne", cases: parseInt(chartData.PGC1) },
    { product: "ActiveReports.NET", cases: parseInt(chartData.PGARNet) },
    { product: "ActiveReportsJS", cases: parseInt(chartData.PGARJS) },
    { product: "Spread.NET", cases: parseInt(chartData.PGSpreadNet) },
    { product: "DataViewsJS", cases: parseInt(chartData.PGWijmo) },
    { product: "Document Solutions", cases: parseInt(chartData.PGGCDocs) },
    { product: "Spread COM", cases: parseInt(chartData.PGSpreadCOM) },
    { product: "ActiveReportServer", cases: parseInt(chartData.PGARS) },
    { product: "SpreadJS", cases: parseInt(chartData.PGSpreadJS) },
  ];

  return (
    <div className="container-fluid">
      <wjChart.FlexChart
        itemsSource={data}
        bindingX="month"
        chartType="Line"
        header={`CE Support Cases for the week of ${chartData.Week}`}
        palette={palette}
      >
        <wjChart.FlexChartLegend position="Bottom" />
        <wjChart.FlexChartAxis wjProperty="axisY" title="Case Count" />
        <wjChart.FlexChartSeries binding="low" name="US Team" />
        <wjChart.FlexChartSeries binding="high" name="India Team" />
        <wjChartAnimate.FlexChartAnimation animationMode="Point" />
      </wjChart.FlexChart>
    </div>
  );
}

export default DashboardFlexChart;
