import React from "react";
import MUIDataTable from "mui-datatables";
import { Typography } from "@mui/material";

export default function DataTable(props) {
  const { title, data, columns } = props;

  const options = {
    filter: false,
  };

  return (
    <MUIDataTable
      title={<Typography style={{ float: "left" }}>{title}</Typography>}
      data={data}
      columns={columns}
      options={options}
    />
  );
}
