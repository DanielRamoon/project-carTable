"use client";

import React, { useState } from "react";
import Actions from "./Actions";
import Rating from "./Rating";
import { Car } from "../../types/types";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import { FaCheck } from "react-icons/fa";
import { cars as initialCars } from "../../data/carData";

const CarTable: React.FC = () => {
  const [cars, setCars] = useState<Car[]>(initialCars);

  const handleEdit = (carId: number) => {
    console.log("Editar carro com ID:", carId);
  };

  const handleDelete = (carId: number) => {
    const updatedCars = cars.filter((car) => car.id !== carId);
    setCars(updatedCars);
  };

  const handleRatingChange = (carId: number, newRating: number) => {
    const updatedCars = cars.map((car) =>
      car.id === carId ? { ...car, rating: newRating } : car
    );
    setCars(updatedCars);
  };

  const handleEditStatus = (carId: number, newStatus: string) => {
    const updatedCars = cars.map((car) =>
      car.id === carId ? { ...car, status: newStatus } : car
    );
    setCars(updatedCars);
  };

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div
        className="sm:hidden"
        style={{ marginTop: -150, overflowY: "hidden", marginBottom: "auto" }}
      >
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-lg shadow-lg mb-2 p-6 w-full lg:w-auto"
            style={{
              width: "340px",
              marginLeft: "auto",
              marginRight: "20px",
              marginTop: "5px",
            }}
          >
            <div className="flex items-center relative">
              <Image
                src={car.imageUrl}
                alt={car.name}
                width={120}
                height={280}
                className="mr-8"
              />
              <div className="absolute top-4 right-4">
                <div
                  className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ marginRight: "245px" }}
                >
                  <FaCheck color="white" size={14} />
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {car.name}
                  </p>

                  <Actions
                    onEdit={() => handleEdit(car.id)}
                    onDelete={() => handleDelete(car.id)}
                    onEditStatus={(newStatus) =>
                      handleEditStatus(car.id, newStatus)
                    }
                  />
                </div>
                <p className="text-xs mb-2">
                  Next Reservation: {car.nextReservation}
                </p>
                <div className="mt-2 mb-4">
                  <Rating
                    rating={car.rating}
                    onClick={(value) => handleRatingChange(car.id, value)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden sm:block">
        <table className="w-full rounded-lg shadow-lg sm:text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-8 text-left text-gray-500">Car</th>
              <th className="py-3 px-8 text-left text-gray-500">
                Next Reservation
              </th>
              <th className="py-3 px-8 text-left text-gray-500">Status</th>
              <th className="py-3 px-8 text-left text-gray-500">Rating</th>
              <th className="py-3 px-8 text-left text-gray-500">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {cars.map((car) => (
              <tr key={car.id}>
                <td className="py-3 px-8 text-center">
                  <div className="flex items-center justify-center">
                    <Image
                      src={car.imageUrl}
                      alt={car.name}
                      width={60}
                      height={60}
                      className="mr-2 align-middle"
                    />
                    <span>{car.name}</span>
                  </div>
                </td>

                <td className="py-3 px-8 text-left">{car.nextReservation}</td>

                <td className="py-3 px-8 text-left">
                  <span
                    className={`rounded-full px-2 ${
                      car.status === "Available"
                        ? "bg-green-200 text-green-700"
                        : car.status === "Reserved"
                        ? "bg-blue-200 text-blue-700"
                        : ""
                    }`}
                  >
                    {car.status}
                  </span>
                </td>

                <td className="py-3 px-8 text-left">
                  <Rating
                    rating={car.rating}
                    onClick={(value) => handleRatingChange(car.id, value)}
                  />
                </td>

                <td className="py-3 px-8 text-left">
                  <Actions
                    onEdit={() => handleEdit(car.id)}
                    onDelete={() => handleDelete(car.id)}
                    onEditStatus={(newStatus) =>
                      handleEditStatus(car.id, newStatus)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CarTable;
