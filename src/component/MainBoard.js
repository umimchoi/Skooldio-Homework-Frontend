import React, { useEffect, useState } from "react";
import Card from "./Card";

function MainBoard() {
  const [datas, setDatas] = useState();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch("https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDatas(data);
      });
  };

  return (
    <div className="space-y-3">
      {datas?.map((data) => {
        return <Card key={data.id} prop={data} />;
      })}
    </div>
  );
}

export default MainBoard;
