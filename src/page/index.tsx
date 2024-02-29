import React from "react";
import CarTable from "../components/CarTable/CarTable";
import "tailwindcss/tailwind.css";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex justify-center">
        <CarTable />
      </div>
    </main>
  );
};

export default Home;
