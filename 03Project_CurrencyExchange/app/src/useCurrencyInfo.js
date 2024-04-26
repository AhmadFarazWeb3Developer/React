import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/bcdf3558def9d7248d927840/latest/inr`
    )
      .then((res) => res.json)
      .then((res) => setData(res.conversion_rates));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
};
export default useCurrencyInfo;
