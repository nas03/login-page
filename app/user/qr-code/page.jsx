"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import { Space, Table, Tag } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Modal } from "antd";

const nutritionData = {
  perServing: {
    caloricValue: { value: 63, unit: "kcal" },
    energy: { value: 264, unit: "kJ" },
    fat: { value: 0.3, unit: "g" },
    saturatedFats: { value: "< 0.1", unit: "g" },
    monounsaturatedFats: { value: "< 0.1", unit: "g" },
    polyunsaturatedFats: { value: 0.1, unit: "g" },
    carbohydrates: { value: 15.8, unit: "g" },
    sugars: { value: 12.3, unit: "g" },
    protein: { value: 1.0, unit: "g" },
    dietaryFiber: { value: 1.4, unit: "g" },
    cholesterol: { value: 0.0, unit: "mg" },
    sodium: { value: "< 0.1", unit: "g" },
    water: { value: 82.4, unit: "g" },
  },
};
const formatKey = (key) => {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between lowercase and uppercase
    .replace(/_/g, " ") // Replace underscores with space
    .toLowerCase() // Convert to lowercase
    .replace(/(?:^|\s)\S/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
};
const Page = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="ml-auto mr-auto flex flex-row items-center justify-center gap-10">
        <Image
          width={500}
          height={500}
          src={"/images/fruit-code.jpg"}
          alt="scan"
        />
        <button
          onClick={showModal}
          className="text-md mb-3  mt-5 rounded-md bg-[#234338] pb-3 pl-5 pr-5 pt-3 font-bold text-white hover:cursor-pointer"
        >
          Scan
        </button>
        <Modal
          open={open}
          title=""
          onOk={handleOk}
          onCancel={handleCancel}
          footer={(_, { OkBtn }) => (
            <>
              <OkBtn />
            </>
          )}
        >
          <h1 className="text-center text-3xl font-bold text-[#262626]">
            Kiwi
          </h1>
          <div className="nutrition-facts-container rounded-md bg-gray-100 p-8 shadow-md">
            <h2 className="mb-4 text-center text-2xl font-bold">
              Nutrition Facts per Serving
            </h2>
            <div className="h-100 ml-auto mr-auto grid grid-cols-2 overflow-y-scroll">
              {Object.entries(nutritionData.perServing).map(([key, value]) => (
                <div key={key} className="mb-2 p-5">
                  <strong>{formatKey(key)}:</strong>
                  <span className="ml-2">
                    {value.value} {value.unit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Page;
