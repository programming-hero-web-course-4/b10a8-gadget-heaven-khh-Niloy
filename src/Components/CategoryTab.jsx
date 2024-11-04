import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";

export default function CategoryTab() {
  const  categoryName  = useParams();
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
          <div className="w-full">
            <img
              src={e.product_image}
              alt="Shoes"
              className=" h-[11rem] w-full object-cover rounded-2xl mt-3"
            />
          </div>
          <div className="card-body">
            <h2 className="text-[15px] font-semibold mt-3">{e.product_title}</h2>
            <p className="text-[#09080F]/60">Price: {e.price}$</p>
            <div className="card-actions">
              <Link to={`/p/${e.product_id}`}>
                <button className="border-[1.35px] border-[#9538E2] py-2 px-3 text-xs rounded-full">
                  <span className="text-[#9538E2] font-semibold">View Details</span>
                  </button>
              </Link>
            </div>
          </div>
        </div>
        )))}
      </div>
    </div>
  );
}