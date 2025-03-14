import "bootstrap/dist/css/bootstrap.css";
import "@mescius/wijmo.styles/wijmo.css";
import React from "react";
import * as wjChart from "@mescius/wijmo.react.chart";
import * as wjChartAnimate from "@mescius/wijmo.react.chart.animation";
import { data, palette } from "./data";
import { ceData } from "../../data/ceDataBreakdown";

function ColumnChart({ chartData }) {
  return (
    <div className="container-fluid">
      <wjChart.FlexChart
        header="Country GDP"
        bindingX="country"
        selectionMode="Point"
        itemsSource={data}
        palette={palette}
      >
        <wjChart.FlexChartLegend position="Bottom" />
        <wjChart.FlexChartSeries name="2014" binding="2014" />
        <wjChart.FlexChartSeries name="2015" binding="2015" />
        <wjChart.FlexChartSeries name="2016" binding="2016" />
        <wjChartAnimate.FlexChartAnimation />
      </wjChart.FlexChart>
    </div>
  );
}

export default ColumnChart;
