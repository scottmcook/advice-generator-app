"use client";
import Image from "next/image";
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.slip.advice}
    </main>
  );
}
