import { useGetDepartmentsQuery } from "./departmentSlice";
import { useNavigate } from "react-router-dom"; //exported as an object(not default)
<<<<<<< HEAD:src/features/departments/DepartmentList.jsx
=======
import { DepartmentDetails } from "./DepartmentDetails";

import { Navbar } from "../store/Navbar";
import { Footer } from "./Footer";
>>>>>>> 364a9f2ff1b3fb936ec913b2f3f2888f5246f020:src/components/DepartmentList.jsx

export function DepartmentList() {
  const navigate = useNavigate();
  const { data: departments = [], isLoading, error } = useGetDepartmentsQuery();

  if (isLoading) {
    return <p>Loading Departments...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!departments.length) {
    return <p>There are no departments.</p>;
  }

  return (
    <>
      <h1> Our Departments</h1>
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setFilter(e.target.value)}
        />
      </form>
      <ul className="dept-list">
        {departments.map((d) => (
          <li key={d.id}>
            <h2>
              {d.name} #{d.id}
            </h2>
            <address>{d.address}</address>
            {/* <Link to={`/departments/${d.id}`}>See details</Link> */}
          </li>
        ))}
      </ul>
    </>
  );
}
