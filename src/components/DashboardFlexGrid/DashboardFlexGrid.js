import React, { useRef, useState } from "react";
import useEvent from "react-use-event-hook";
import "@mescius/wijmo.styles/wijmo.css";
import "./DashboardFlexGrid.css";
import "bootstrap/dist/css/bootstrap.css";
import { FlexGrid, FlexGridColumn } from "@mescius/wijmo.react.grid";
import { format, SortDescription } from "@mescius/wijmo";

import { data } from "../../data/data";
import { ceData } from "../../data/ceDataBreakdown";

function DashboardFlexGrid() {
  const [selectedItem, setSelectedItem] = useState("");
  const flexRef = useRef(null);
  const flexInitialized = useEvent((flexgrid) => {
    flexRef.current = flexgrid;
    // sort the data by country
    let sd = new SortDescription("country", true);
    flexgrid.collectionView.sortDescriptions.push(sd);
    flexgrid.collectionView.currentChanged.addHandler(updateCurrentInfo);
    updateCurrentInfo();
  });
  const updateCurrentInfo = () => {
    setSelectedItem(
      format(
        "Country: <b>{country}</b>, Sales: <b>{sales:c0}</b> Expenses: <b>{expenses:c0}</b>",
        flexRef.current.collectionView.currentItem
      )
    );
  };

  return (
    <>
      <div className="container-fluid">
        <FlexGrid initialized={flexInitialized} itemsSource={ceData}>
          <FlexGridColumn header="Week" binding="Week" width="2*" />
          <FlexGridColumn header="Open Count" binding="OpenCount" width="2*" />
          <FlexGridColumn
            header="SLA Pre Sales"
            binding="SLAPreSales"
            width="2*"
          />
          <FlexGridColumn
            header="SLA Platinum"
            binding="SLAPlatinum"
            width="2*"
          />
          <FlexGridColumn
            header="SLA Standard"
            binding="SLAStandard"
            width="2*"
          />
          <FlexGridColumn header="US Team" binding="USTeam" width="2*" />
          <FlexGridColumn header="IN Team" binding="INTeam" width="2*" />
        </FlexGrid>
      </div>
    </>
  );
}

export default DashboardFlexGrid;
