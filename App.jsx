//!react sections import:start
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//!react sections import:dend

//? my imports:start
import "bootstrap/dist/css/bootstrap.min.css";
//? my imports:end

//todo components import:start
import Imloyees from "./employees.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Grouped from "./Grouped.jsx";
import Nav from "./Nav.jsx";
//todo components import:end

function App() {
    let [employees, setEmployees] = useState(
        JSON.parse(localStorage.getItem("employees")) || [
            {
                id: 1,
                name: "John",
                designation: "Developer",
                gender: "Male",
                teamName: "TeamA",
            },
            {
                id: 2,
                name: "Jane",
                designation: "Designer",
                gender: "Female",
                teamName: "TeamB",
            },
            {
                id: 3,
                name: "Alice",
                designation: "Tester",
                gender: "Female",
                teamName: "TeamC",
            },
            {
                id: 4,
                name: "Bob",
                designation: "Manager",
                gender: "Male",
                teamName: "TeamD",
            },
            {
                id: 5,
                name: "Charlie",
                designation: "Developer",
                gender: "Male",
                teamName: "TeamA",
            },
            {
                id: 6,
                name: "Eve",
                designation: "Designer",
                gender: "Female",
                teamName: "TeamB",
            },
            {
                id: 7,
                name: "Frank",
                designation: "Tester",
                gender: "Male",
                teamName: "TeamC",
            },
            {
                id: 8,
                name: "Grace",
                designation: "Developer",
                gender: "Female",
                teamName: "TeamD",
            },
            {
                id: 9,
                name: "Heidi",
                designation: "Manager",
                gender: "Female",
                teamName: "TeamA",
            },
            {
                id: 10,
                name: "Ivan",
                designation: "Developer",
                gender: "Male",
                teamName: "TeamB",
            },
            {
                id: 11,
                name: "Judy",
                designation: "Tester",
                gender: "Female",
                teamName: "TeamC",
            },
            {
                id: 12,
                name: "Karl",
                designation: "Designer",
                gender: "Male",
                teamName: "TeamD",
            },
            {
                id: 13,
                name: "Laura",
                designation: "Developer",
                gender: "Female",
                teamName: "TeamA",
            },
            {
                id: 14,
                name: "Mallory",
                designation: "Tester",
                gender: "Female",
                teamName: "TeamB",
            },
            {
                id: 15,
                name: "Oscar",
                designation: "Manager",
                gender: "Male",
                teamName: "TeamC",
            },
            {
                id: 16,
                name: "Peggy",
                designation: "Designer",
                gender: "Female",
                teamName: "TeamD",
            },
            {
                id: 17,
                name: "Quentin",
                designation: "Developer",
                gender: "Male",
                teamName: "TeamA",
            },
            {
                id: 18,
                name: "Rita",
                designation: "Tester",
                gender: "Female",
                teamName: "TeamB",
            },
            {
                id: 19,
                name: "Sam",
                designation: "Developer",
                gender: "Male",
                teamName: "TeamC",
            },
            {
                id: 20,
                name: "Trudy",
                designation: "Manager",
                gender: "Female",
                teamName: "TeamD",
            },
        ]
    );
    let [selectedTeam, setSelectedTeam] = useState(
        JSON.parse(localStorage.getItem("selectedTeam")) || "TeamA"
    );
    function handleCardClick(event) {
        console.log(event.currentTarget.id);
        const updatedEmployees = employees.map((itm) =>
            Number(itm.id) === Number(event.currentTarget.id)
                ? { ...itm, teamName: selectedTeam }
                : itm
        );
        setEmployees(updatedEmployees);
    }

    //!useEeffect hook :start
    useEffect(() => {
        localStorage.setItem("employees", JSON.stringify(employees));
    }, [employees]);
    useEffect(() => {
        localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
    }, [selectedTeam]);

    //!useEeffect hook :end

    return (
        <Router>
            <Nav />
            <Header
                selectedTeam={selectedTeam}
                teamMembers={
                    employees.filter(
                        (employee) => employee.teamName === selectedTeam
                    ).length
                }
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Imloyees
                            selectedTeam={selectedTeam}
                            handleCardClick={handleCardClick}
                            employees={employees}
                            setSelectedTeam={setSelectedTeam}
                        />
                    }
                ></Route>
                <Route
                path="/groupedMembers"
                element={<Grouped
                selectedTeam={selectedTeam}
                employees={employees}
                setSelectedTeam={setSelectedTeam}
                />}
                ></Route>
                <Route path="*" element={<h1 className="text-danger">404 Not Found</h1>}></Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
