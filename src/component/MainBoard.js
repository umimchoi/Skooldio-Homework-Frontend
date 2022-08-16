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
    <div>
      {datas.map((data) => {
        return <Card data={data} />;
      })}
    </div>
  );
}

export default MainBoard;
