import "bootstrap/dist/css/bootstrap.css";
import "@mescius/wijmo.styles/wijmo.css";
import React, { useState } from "react";
import useEvent from "react-use-event-hook";
import * as wijmo from "@mescius/wijmo";
import * as wjChart from "@mescius/wijmo.react.chart";
import "./DashboardFlexPie.css";
// import { data, palette } from "./data";

const palette = [
  "rgba(42,159,214,1)",
  "rgb(27, 98, 132)",
  "rgba(119,179,0,1)",
  "rgba(153,51,204,1)",
  "rgba(255,136,0,1)",
  "rgba(204,0,0,1)",
  "rgba(0,204,163,1)",
  "rgba(61,109,204,1)",
  "rgba(82,82,82,1)",
  "rgba(0,0,0,1)",
];

function DashboardFlexPie({ chartData }) {
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

  console.log("this is casesByProduct: ", casesByProduct);

  const getLabelContent = useEvent((ht) => {
    const sum = casesByProduct.map((c) => c.cases);
    console.log("this is sum: ", sum);
    sum.reduce((sum, cur) => sum + cur);
    console.log("this is sum after reduce: ", sum);
    return wijmo.format("{name} {val:p2}", {
      val: ht.value / sum,
    });
  });
  return (
    <div className="container-fluid">
      <wjChart.FlexPie
        header={`Support cases by product for week of ${chartData.Week}`}
        bindingName="product"
        binding="cases"
        itemsSource={casesByProduct}
        palette={palette}
      >
        {/* <wjChart.FlexPieDataLabel content={getLabelContent} /> */}
      </wjChart.FlexPie>
    </div>
  );
}

export default DashboardFlexPie;
