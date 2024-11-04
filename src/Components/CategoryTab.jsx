import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";

export default function CategoryTab() {
  const { categoryName } = useParams();
  const data = useLoaderData();
  const [products, setproducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filterCategory = [...data].filter((e) => e.category === categoryName);
    setproducts(filterCategory);

    if (filterCategory.length == 0) {
      setproducts(data);
    }
  }, [categoryName]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {products.map((e, index) => ((
          <div className="card card-compact bg-base-100">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        )))}
      </div>
    </div>
  );
}