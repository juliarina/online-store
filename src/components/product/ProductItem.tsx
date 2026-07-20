import React from "react";
import sneakersImage from "../../assets/01-REEBOK-F34RUREEA-REER00244534-Grey.webp";

function ProductItem() {
  return (
    <div className=" flex flex-col gap-2 px-2">
      <img className="min-w-0 w-full h-auto" src={sneakersImage} alt="productName" />
      <div className="flex flex-col gap-1">
        <span className="line-clamp-2">
          Reebok Energen Tech Plus 2 Women's Running Shoes - Grey
        </span>
        <div className="flex gap-1">
          <span className="text-[0.9rem] font-bold">Rp909.300</span>
          <span className="truncate relative text-[0.8rem] line-through text-gray-500">Rp1.000.000</span>
          <span className="text-[0.8rem] h-fit px-1 font-bold rounded-sm text-red-500 bg-red-200">10%</span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
