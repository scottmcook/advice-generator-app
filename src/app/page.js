"use client";
import Image from "next/image";
import HorizontalLine from "../../images/pattern-divider-desktop.svg";
import { useEffect, useState } from "react";

const ADVICE_SLIP_API = "https://api.adviceslip.com/advice";

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(ADVICE_SLIP_API)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No advice data</p>;

  return (
    <main className="flex max-w-3xl min-h-screen flex-col items-center justify-between p-24">
      <div className="p-8 text-center background-color-dark-grayish-blue rounded-lg ">
        <div className="pb-4 uppercase text-primary-neon tracking-[.25em] ">
          Advice #{data.slip.id}
        </div>
        <div className="pb-10 text-3xl font-medium">
          &ldquo;{data.slip.advice}&rdquo;
        </div>
        <div className="pb-8">
          <Image
            src={HorizontalLine}
            width={600}
            height={1}
            alt="divider"
          ></Image>
        </div>
      </div>
    </main>
  );
}
