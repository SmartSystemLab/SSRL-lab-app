import React, { useState } from "react";
import Header from "./header";
import SampleData from "./SampleData.json";
import Row from "./row";

const LogTable2 = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  
  return (
    <div>
      <Header />
      {SampleData.map((row) => {
        console.log(row);
        return <Row key={row.id} column={row} />;
      })}
    </div>
  );
};

export default LogTable2;
