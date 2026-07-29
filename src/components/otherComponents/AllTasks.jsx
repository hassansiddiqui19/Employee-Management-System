import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTasks = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="mt-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-100 p-5 shadow-lg">

      {/* Heading */}
      <h2 className="mb-5 text-2xl font-bold text-gray-700">
        Employee Task Dashboard
      </h2>

      {/* Header */}
      <div className="grid grid-cols-5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 text-center font-semibold text-white shadow-md sticky top-0">
        <h2 className="text-left">Employee</h2>
        <h2>New</h2>
        <h2>Active</h2>
        <h2>Completed</h2>
        <h2>Failed</h2>
      </div>

      {/* Employees */}
      <div className="mt-3 h-[350px] space-y-3 overflow-y-auto pr-2">

        {authData?.employees?.map((elem, index) => (
          <div
            key={index}
            className="grid grid-cols-5 items-center rounded-xl bg-white px-6 py-4 text-center shadow transition-all duration-300 hover:scale-[1.01] hover:shadow-xl"
          >
            <h2 className="text-left font-semibold text-gray-700">
              {elem.firstName}
            </h2>

            <span className="mx-auto w-12 rounded-full bg-blue-100 py-1 font-bold text-blue-700">
              {elem.taskNumbers.newTask}
            </span>

            <span className="mx-auto w-12 rounded-full bg-yellow-100 py-1 font-bold text-yellow-700">
              {elem.taskNumbers.active}
            </span>

            <span className="mx-auto w-12 rounded-full bg-green-100 py-1 font-bold text-green-700">
              {elem.taskNumbers.completed}
            </span>

            <span className="mx-auto w-12 rounded-full bg-red-100 py-1 font-bold text-red-700">
              {elem.taskNumbers.failed}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
};

export default AllTasks;