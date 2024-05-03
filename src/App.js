import "./styles.css";
import React, { useState, useCallback, useRef } from "react";
// import AgGridReact dependency and theme styles
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./styles.css";

export default function App() {
  // Define table data
  const [rowData, setRowData] = useState([
    {
      _id: {
        $oid: "6634c684b93575f90a418e8d",
      },
      id: 3,
      parentId: null,
      name: "Керівництво",
      sort_id: null,
      rank: null,
      rate: 0,
      salary: null,
      note: null,
      type: "N",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418e8e",
      },
      id: 4,
      parentId: 3,
      name: "Голова",
      sort_id: 1,
      rank: "Вищий склад поліції",
      rate: {
        $numberDecimal: "1",
      },
      salary: "40000",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418e8f",
      },
      id: 5,
      parentId: 3,
      name: "Перший заступник Голови – начальник Головного слідчого управління",
      sort_id: 2,
      rank: "Вищий склад поліції",
      rate: {
        $numberDecimal: "1",
      },
      salary: "20000",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418e90",
      },
      id: 6,
      parentId: 3,
      name: "Заступник Голови – начальник кримінальної поліції",
      sort_id: 3,
      rank: "Вищий склад поліції",
      rate: {
        $numberDecimal: "1",
      },
      salary: "18000",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418e91",
      },
      id: 7,
      parentId: 3,
      name: "Заступник Голови - керівник патрульної поліції",
      sort_id: 4,
      rank: "Вищий склад поліції",
      rate: {
        $numberDecimal: "1",
      },
      salary: "18000",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418e92",
      },
      id: 8,
      parentId: 3,
      name: "Заступник Голови",
      sort_id: 5,
      rank: "Вищий склад поліції",
      rate: {
        $numberDecimal: "1",
      },
      salary: "18000",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418e93",
      },
      id: 9,
      parentId: 3,
      name: "Заступник Голови – начальник Департаменту кадрового забезпечення",
      sort_id: 6,
      rank: "Вищий склад поліції",
      rate: {
        $numberDecimal: "1",
      },
      salary: "18000",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418e94",
      },
      id: 10,
      parentId: 3,
      name: "Заступник Голови - начальник Головного управління Національної поліції в Донецькій області",
      sort_id: 7,
      rank: "Середній склад поліції",
      rate: 0,
      salary: "18000",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418e95",
      },
      id: 11,
      parentId: 3,
      name: "Заступник Голови - начальник Департаменту захисту економіки",
      sort_id: 8,
      rank: "Середній склад поліції",
      rate: {
        $numberDecimal: "0",
      },
      salary: "18000",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418e96",
      },
      id: 103123,
      parentId: 3,
      name: "Заступник Голови - начальник Департаменту оперативної підтримки",
      sort_id: 9,
      rank: "Середній склад поліції",
      rate: {
        $numberDecimal: "0",
      },
      salary: "18000",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418e97",
      },
      id: 13,
      parentId: null,
      name: "Департамент забезпечення діяльності Голови",
      sort_id: null,
      rank: null,
      rate: 0,
      salary: null,
      note: null,
      type: "N",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418e98",
      },
      id: 106648,
      parentId: 13,
      name: "Керівництво",
      sort_id: null,
      rank: null,
      rate: 0,
      salary: null,
      note: null,
      type: "N",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418e99",
      },
      id: 106649,
      parentId: 106648,
      name: "Начальник Департаменту",
      sort_id: 1,
      rank: "Середній склад поліції",
      rate: {
        $numberDecimal: "1",
      },
      salary: "8000",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418e9a",
      },
      id: 106650,
      parentId: 106648,
      name: "Перший заступник начальника Департаменту – начальник організаційно-аналітичного відділу",
      sort_id: 2,
      rank: "Державний службовець",
      rate: {
        $numberDecimal: "1",
      },
      salary: "х",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418e9b",
      },
      id: 106651,
      parentId: 106648,
      name: "Заступник начальника Департаменту",
      sort_id: 3,
      rank: "Середній склад поліції",
      rate: {
        $numberDecimal: "1",
      },
      salary: "7400",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418e9c",
      },
      id: 106654,
      parentId: 13,
      name: "Організаційно-аналітичний відділ",
      sort_id: null,
      rank: null,
      rate: 0,
      salary: null,
      note: null,
      type: "N",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418e9d",
      },
      id: 106655,
      parentId: 106654,
      name: "Начальник відділу - перший заступник начальника Департаменту",
      sort_id: 1,
      rank: "-",
      rate: 0,
      salary: "-",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418e9e",
      },
      id: 121683,
      parentId: 106654,
      name: "Радник Голови",
      sort_id: 2,
      rank: "Середній склад поліції",
      rate: {
        $numberDecimal: "3",
      },
      salary: "7600",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418e9f",
      },
      id: 106656,
      parentId: 106654,
      name: "Помічник Голови",
      sort_id: 3,
      rank: "Середній склад поліції",
      rate: {
        $numberDecimal: "8",
      },
      salary: "7400",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418ea0",
      },
      id: 106657,
      parentId: 106654,
      name: "Головний інспектор",
      sort_id: 4,
      rank: "Середній склад поліції",
      rate: {
        $numberDecimal: "0",
      },
      salary: "3000",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418ea1",
      },
      id: 106659,
      parentId: 13,
      name: "Консультативно-контрольний відділ",
      sort_id: null,
      rank: null,
      rate: 0,
      salary: null,
      note: null,
      type: "N",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418ea2",
      },
      id: 106661,
      parentId: 106659,
      name: "Начальник відділу",
      sort_id: 1,
      rank: "Середній склад поліції",
      rate: {
        $numberDecimal: "1",
      },
      salary: "4000",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418ea3",
      },
      id: 106662,
      parentId: 106659,
      name: "Помічник Голови",
      sort_id: 2,
      rank: "Середній склад поліції",
      rate: {
        $numberDecimal: "5",
      },
      salary: "7400",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418ea4",
      },
      id: 128199,
      parentId: 106659,
      name: "Радник Голови",
      sort_id: 3,
      rank: "Середній склад поліції",
      rate: {
        $numberDecimal: "2",
      },
      salary: "7600",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418ea5",
      },
      id: 113839,
      parentId: 106659,
      name: "Головний інспектор",
      sort_id: 4,
      rank: "Середній склад поліції",
      rate: {
        $numberDecimal: "0",
      },
      salary: "3000",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418ea6",
      },
      id: 127851,
      parentId: 106659,
      name: "Головний спеціаліст",
      sort_id: 5,
      rank: "Державний службовець",
      rate: {
        $numberDecimal: "1",
      },
      salary: "х",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418ea7",
      },
      id: 122397,
      parentId: 106659,
      name: "Провідний консультант",
      sort_id: 6,
      rank: "Цивільний персонал",
      rate: {
        $numberDecimal: "2",
      },
      salary: "х",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418ea8",
      },
      id: 106664,
      parentId: 13,
      name: "Відділ організації досліджень із використанням поліграфу",
      sort_id: null,
      rank: null,
      rate: 0,
      salary: null,
      note: null,
      type: "N",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418ea9",
      },
      id: 106665,
      parentId: 106664,
      name: "Начальник відділу",
      sort_id: 1,
      rank: "Середній склад поліції",
      rate: {
        $numberDecimal: "1",
      },
      salary: "4000",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418eaa",
      },
      id: 106666,
      parentId: 106664,
      name: "Помічник Голови",
      sort_id: 2,
      rank: "Середній склад поліції",
      rate: {
        $numberDecimal: "3",
      },
      salary: "7400",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418eab",
      },
      id: 106668,
      parentId: 13,
      name: "Відділ координації проєктів розвитку поліції",
      sort_id: null,
      rank: null,
      rate: 0,
      salary: null,
      note: null,
      type: "N",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418eac",
      },
      id: 113321,
      parentId: 106668,
      name: "Начальник відділу",
      sort_id: 1,
      rank: "Державний службовець",
      rate: {
        $numberDecimal: "1",
      },
      salary: "x ",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418ead",
      },
      id: 106669,
      parentId: 106668,
      name: "Радник Голови",
      sort_id: 2,
      rank: "Середній склад поліції",
      rate: {
        $numberDecimal: "3",
      },
      salary: "7600",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418eae",
      },
      id: 106670,
      parentId: 106668,
      name: "Помічник Голови",
      sort_id: 3,
      rank: "Середній склад поліції",
      rate: {
        $numberDecimal: "5",
      },
      salary: "7400",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418eaf",
      },
      id: 106671,
      parentId: 106668,
      name: "Головний спеціаліст",
      sort_id: 4,
      rank: "Державний службовець",
      rate: {
        $numberDecimal: "0",
      },
      salary: "x",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418eb0",
      },
      id: 116557,
      parentId: 106668,
      name: "Провідний консультант",
      sort_id: 5,
      rank: "Цивільний персонал",
      rate: {
        $numberDecimal: "0",
      },
      salary: "x",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418eb1",
      },
      id: 121990,
      parentId: 13,
      name: "Сектор документального забезпечення",
      sort_id: null,
      rank: null,
      rate: 0,
      salary: null,
      note: null,
      type: "N",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418eb2",
      },
      id: 121991,
      parentId: 121990,
      name: "Завідувач сектору",
      sort_id: 1,
      rank: "Державний службовець",
      rate: {
        $numberDecimal: "1",
      },
      salary: "х",
      note: null,
      type: "P",
    },
    {
      _id: {
        $oid: "6634c684b93575f90a418eb3",
      },
      id: 121992,
      parentId: 121990,
      name: "Документознавець",
      sort_id: 2,
      rank: "Цивільний персонал",
      rate: {
        $numberDecimal: "2",
      },
      salary: "x",
      note: null,
      type: "P",
    },
  ]);
  // define columns and their respective fields
  const columnDefs = [
    {
      field: "name",
      filter: "agTextColumnFilter",
      filterParams: {
        filterOptions: ["contains", "notContains", "startsWith", "endsWith"],
        suppressAndOrCondition: true,
      },
    },
    { field: "parentId", headerName: "Parent ID" },
  ];

  // column properties
  const autoGroupColumnDef = {
    minWidth: 200,
  };

  // addded sort and filtering feature
  const defaultColDef = {
    flex: 1,
    sortable: true,
    filter: true,
  };

  //  handle tree
  const getDataPath = ({ id, parentId }) => {
    const result = [id];
    let row = rowData.find((row) => row.id === parentId);
    while (row) {
      result.unshift(row.id);
      row = rowData.find((r) => r.id === row.parentId);
    }
    return result;
  };

  const gridRef = useRef();

  // handle search input
  const handleFilter = useCallback(() => {
    gridRef.current?.api.setQuickFilter(
      document.getElementById("filter-text-box")?.value
    );
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: "500px", width: "100%" }}>
      {/* search field for filter component */}
      <input
        type="text"
        id="filter-text-box"
        placeholder="Filter list"
        onInput={handleFilter}
      />
      {/* ag-grid component */}
      <AgGridReact
        rowData={rowData}
        treeData={true}
        animateRows={true}
        autoGroupColumnDef={autoGroupColumnDef}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        getDataPath={getDataPath}
        ref={gridRef}
        pagination={true}
        paginationPageSize={2}
      ></AgGridReact>
    </div>
  );
}
