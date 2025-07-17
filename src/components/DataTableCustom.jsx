import React from "react";
import DataTable from "react-data-table-component";

const DataTableCustom = ({ data, column }) => {
  return (
    <div>
      <DataTable columns={column} data={data} pagination />
    </div>
  );
};

export default DataTableCustom;
