import React from "react";
import Image from "next/image";

const Sports = async () => {
  const data = await fetch("http://localhost:5000/news/");
  const news = await data.json();
  // console.log(news.data);

  return (
    <div className="">
      <h1 className="text-2xl font-bold">Sports News</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {/* First news item */}
        {news.data.slice(0, 1).map((n, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg  p-4 row-span-3"
          >
            <div className="flex justify-between">
              <div>
                <div className="relative h-60 ">
                  <Image
                    src={n.image[0]}
                    alt={n.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <h2 className="text-xl font-bold">{n.title}</h2>
                <p>{n.description}</p>
              </div>
            </div>
          </div>
        ))}
        {/* Last three news items as rows */}
        {news.data.slice(4, 7).map((n, index) => (
          <div key={index} className="bg-white border rounded-lg  p-4">
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl font-medium">{n.title}</h2>
              </div>
              <div className="relative h-20 w-40">
                <Image
                  src={n.image[0]}
                  alt={n.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
        {news.data.slice(1, 4).map((n, index) => (
          <div key={index} className="bg-white border rounded-lg  p-4">
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl font-medium">{n.title}</h2>
              </div>
              <div className="relative h-20 w-40">
                <Image
                  src={n.image[0]}
                  alt={n.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;
