import React, { useEffect, useState } from 'react';

const Fetchdatafromapi = () => {
    const [apidata, setapidata] = useState([]);

    useEffect(() => {
        const fetchdatafromapi = async () => {
            try {
                const api = await fetch("https://jsonplaceholder.typicode.com/todos");
                const data = await api.json(); // Corrected method to parse JSON
                console.log("my data= ", data);
                setapidata(data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchdatafromapi();
    }, []);

    return (
        <div>
            {apidata.map((data) => (
                <div key={data.id}>
                    <h1>{data.title}</h1>
                </div>
            ))}
        </div>
    );
};

export default Fetchdatafromapi;
