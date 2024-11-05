import React, { PureComponent } from "react";
import { MdPadding } from "react-icons/md";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Bar,
  ResponsiveContainer,
} from "recharts";

const laptop = [
  { product_id: "L001", product_title: "Dell XPS 13", price: 999 },
  {
    product_id: "L002",
    product_title: "Apple MacBook Pro 14-inch",
    price: 1999,
  },
  { product_id: "L003", product_title: "HP Spectre x360", price: 1250 },
  {
    product_id: "L004",
    product_title: "Lenovo ThinkPad X1 Carbon Gen 10",
    price: 1425,
  },
  { product_id: "L005", product_title: "Acer Swift 3", price: 750 },
  {
    product_id: "L006",
    product_title: "Microsoft Surface Laptop 4",
    price: 1100,
  },
  { product_id: "L007", product_title: "ASUS ZenBook 14", price: 900 },
];

const phone = [
  {
    product_id: "P001",
    product_title: "Samsung Galaxy S23 Ultra",
    price: 1199,
  },
  {
    product_id: "P003",
    product_title: "Google Pixel 7 Pro",
    price: 899,
  },
  {
    product_id: "P004",
    product_title: "OnePlus 11",
    price: 799,
  },
];

const chartPhones = phone.map((e) => ({
    name: e.product_title,
    price: e.price,
  }));

const chartLaptop = laptop.map((e) => ({
  name: e.product_title,
  price: e.price,
}));

export default class Example extends PureComponent {
  render() {
    return (
      <>
        <div className="w-[80%] py-20 mx-auto grid grid-cols-1 gap-10">
          <div className="border border-black/20 p-4 rounded-2xl ">
            <h1 className="ml-3 mb-5 font-semibold">Laptop</h1>
            <ComposedChart
              width={800}
              height={250}
              data={chartLaptop}
              margin={{
                top: 20,
                right: 80,
                bottom: 45,
                left: 20,
              }}
            >
              <XAxis
                dataKey="name"
                label={{
                  value: "Product Name",
                  position: "insideBottomRight",
                  offset: 0,
                  style: {
                    fontSize: "10px",
                  },
                }}
                tick={{ fontSize: 10 }}
                angle={-15}
                textAnchor="end"
                scale="band"
                dy={10}
              />
              <YAxis
                label={{
                  value: "Price",
                  angle: -90,
                  position: "insideLeft",
                  style: {
                    fontSize: "10px",
                  },
                }}
                style={{ fontSize: 10 }}
              />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="price"
                fill="rgba(149, 56, 226, 0.30)"
                stroke="#8884d8"
              />
              <Bar dataKey="price" barSize={20} fill="#9538E2" />
            </ComposedChart>
          </div>


          <div className="border border-black/20 p-4 rounded-2xl ">
            <h1 className="ml-3 mb-5 font-semibold">Phones</h1>
            <ComposedChart
              width={800}
              height={250}
              data={chartPhones}
              margin={{
                top: 20,
                right: 80,
                bottom: 45,
                left: 20,
              }}
            >
              <XAxis
                dataKey="name"
                label={{
                  value: "Product Name",
                  position: "insideBottomRight",
                  offset: 0,
                  style: {
                    fontSize: "10px",
                  },
                }}
                tick={{ fontSize: 10 }}
                textAnchor="middle"
                scale="band"
                dy={10}
              />
              <YAxis
                label={{
                  value: "Price",
                  angle: -90,
                  position: "insideLeft",
                  style: {
                    fontSize: "10px",
                  },
                }}
                style={{ fontSize: 10 }}
              />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="price"
                fill="rgba(149, 56, 226, 0.30)"
                stroke="#8884d8"
              />
              <Bar dataKey="price" barSize={20} fill="#9538E2" />
            </ComposedChart>
          </div>
        </div>
      </>
    );
  }
}
