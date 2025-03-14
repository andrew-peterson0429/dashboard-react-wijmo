import React, { useRef, useState } from "react";
import useEvent from "react-use-event-hook";
import "@mescius/wijmo.styles/wijmo.css";
import * as wjInput from "@mescius/wijmo.react.input";
import "./DashboardPage.css";
import "bootstrap/dist/css/bootstrap.css";
import { FlexGrid, FlexGridColumn } from "@mescius/wijmo.react.grid";
import { format, SortDescription } from "@mescius/wijmo";

import { data } from "../../data/data";
import { ceData } from "../../data/ceDataBreakdown";
import DashboardFlexGrid from "../../components/DashboardFlexGrid/DashboardFlexGrid";
import DashboardFlexChart from "../../components/DashboardFlexChart/DashboardFlexChart";
import DashboardFlexPie from "../../components/DashboardFlexPie/DashboardFlexPie";
import ColumnChart from "../../components/ColumnChart/ColumnChart";

function getObjectsByKey(arr, key) {
  return arr.map((obj) => obj[key]);
}
const weeks = getObjectsByKey(ceData, "Week");

function DashboardPage() {
  const [selectedWeek, setSelectedWeek] = useState("2/16/2025");

  const onComboBoxValChanged = useEvent((sender) => {
    setSelectedWeek(sender.selectedValue);
    console.log("selectedWeek value: ", selectedWeek);
  });

  const weekData = ceData.find((data) => data.Week === selectedWeek);
  console.log("this is weekData: ", weekData);

  return (
    <>
      <div className="dashboard-wrapper">
        <div className=".d-flex">
          <div>
            <label htmlFor="week">Week:</label>
            <wjInput.ComboBox
              id="week"
              itemsSource={weeks}
              selectedIndexChanged={onComboBoxValChanged}
            />
          </div>
        </div>
        <DashboardFlexPie chartData={weekData} />
        <ColumnChart />
        {/* <DashboardFlexChart chartData={weekData} /> */}
        {/* <DashboardFlexGrid /> */}
      </div>
    </>
  );
}

export default DashboardPage;
