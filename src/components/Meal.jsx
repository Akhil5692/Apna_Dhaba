import React, { useState, useEffect } from "react";

const ApnaDhaba = () => {
    const [mealData, setMealData] = useState([]);
    const [area, setArea] = useState("Indian"); 
    const [searchTerm, setSearchTerm] = useState(""); 

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const api = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
                );
                const data = await api.json();
                setMealData(data.meals || []); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchDataFromApi();
    }, [area]); 

 
    const filteredMeals = mealData.filter((meal) =>
        meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ backgroundColor: "#f3f4f6", minHeight: "100vh", padding: "20px" }}>
      
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    marginBottom: "20px",
                    flexWrap: "wrap",
                }}
            >
             
                <h1
                    style={{
                        fontSize: "28px",
                        fontWeight: "bold",
                        color: "#ff4500",
                        fontFamily: "'Trebuchet MS', sans-serif",
                        margin: "0",
                        whiteSpace: "nowrap",
                    }}
                >
                    Apna Dhaba
                </h1>

        
                <div style={{ flex: 1, maxWidth: "300px" }}>
                    <input
                        type="text"
                        placeholder="Search by Name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                        }}
                    />
                </div>

          
                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        flexWrap: "wrap",
                    }}
                >
                    <button onClick={() => setArea("Indian")} className="nav-button">
                        Indian
                    </button>
                    <button onClick={() => setArea("Canadian")} className="nav-button">
                        Canadian
                    </button>
                    <button onClick={() => setArea("Thai")} className="nav-button">
                        Thai
                    </button>
                    <button onClick={() => setArea("American")} className="nav-button">
                        American
                    </button>
                    <button onClick={() => setArea("British")} className="nav-button">
                        British
                    </button>
                    <button onClick={() => setArea("Russian")} className="nav-button">
                        Russian
                    </button>
                    <button onClick={() => setArea("Chinese")} className="nav-button">
                        Chinese
                    </button>
                </div>
            </div>

      
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h2 style={{ color: "#495057" }}>{area} Meals</h2>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "20px",
                        marginTop: "20px",
                    }}
                >
                    {filteredMeals.map((data) => (
                        <div
                            key={data.idMeal}
                            style={{
                                border: "1px solid #ccc",
                                padding: "10px",
                                borderRadius: "8px",
                                textAlign: "center",
                                width: "250px",
                                backgroundColor: "#fff",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                            }}
                        >
                            <img
                                src={data.strMealThumb}
                                alt={data.strMeal}
                                style={{
                                    width: "100%",
                                    height: "200px",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                }}
                            />
                            <h3 style={{ margin: "10px 0", color: "#495057" }}>{data.strMeal}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ApnaDhaba;
