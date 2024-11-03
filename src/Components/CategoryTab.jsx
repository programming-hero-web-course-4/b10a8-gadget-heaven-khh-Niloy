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
      <div className="grid grid-cols-3 gap-5 w-[80%] mx-auto">
        {products.map((e, index) => (
          <div key={index} className="border border-black/20 p-4">
            <h1>{e.product_title}</h1>
            <Link to={`/p/${e.product_id}`}>Details</Link>

          </div>
        ))}
      </div>
    </div>
  );
}