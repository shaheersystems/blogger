import { useState, useEffect } from "react";

const useFilter = (data, query) => {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        let results = [];

        results = data?.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(results);
    }, [data, query]);

    return filteredData;
};

export default useFilter;