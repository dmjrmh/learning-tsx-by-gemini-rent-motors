'use client';

import { useState } from "react";

export default function Page() {
  const [today, setToday] = useState<number>(1);
  const price = 10000;

  return (
    <div className="p-8 space-y-4 max-w-sm">
      <label className="block text-sm">Rent Duration (Days):</label>
      <input 
        type="number"
        min={1}
        value={today}
        onChange={(e) => setToday(Number(e.target.value))}
        className="border rounded px-2 py-1 w-full"
      />
      <p className="font-bold text-lg">Total Price: Rp {(price * today).toLocaleString()}</p>
    </div>
  )
}