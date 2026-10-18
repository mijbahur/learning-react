import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))

//     }, [currency])
//     console.log("data", data);

//     return data;

// }
function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        async function fetchCurrency() {
            const response = await fetch(
                `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`,
            );
            if (!response.ok) {
                throw new Error("Failed to fetch currency data");
            }
            const result = await response.json();
            setData(result[currency.toLowerCase()] ?? {});
        }
        fetchCurrency();
    }, [currency]);

    console.log("data", data);

    return data;
}

export default useCurrencyInfo;
