import { useState } from "react";
import { useGetProfessorsQuery } from "./professorSlice";
import { useNavigate } from "react-router-dom"; //exported as an object(not default)
import { ProfessorDetails } from "./ProfessorDetails";

<<<<<<< HEAD:src/features/professors/ProfessorList.jsx
// import { Navbar } from "../../Layout/Navbar";
// import { Footer } from "../../components/Footer";

function ProfessorList() {
=======
import { Navbar } from "../store/Navbar";
import { Footer } from "./Footer";

export function ProfessorList() {
>>>>>>> 364a9f2ff1b3fb936ec913b2f3f2888f5246f020:src/components/ProfessorList.jsx
  const navigate = useNavigate();
  const { data: professors = [], isLoading, error } = useGetProfessorsQuery();

  if (isLoading) {
    return <p>Loading Professors...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!professors.length) {
    return <p>There are no professors in this department.</p>;
  }

  return (
    <main>
      <ul>
        {professors.map((prof) => (
          <li
            onClick={() => {
              navigate(`/Professor-details/${prof.id}`);
            }}
            key={prof.id}
          >
            <ProfessorDetails professor={prof} />
          </li>
        ))}
      </ul>
    </main>
  );
}
export default ProfessorList;
