'use client';

interface Motor { id: number; name: string; price: number; }

const LIST: Motor[] = [
  { id: 1, name: "Vario 160", price: 150000 },
  { id: 2, name: "NMAX 155", price: 180000 },
];

export default function Page() {
  const handleClick = (name: string) => alert ("Choose: " + name);

  return (
    <div className="p-8 space-y-3">
      {LIST.map((motor) => (
        <div key={motor.id} className="border p-3 rounded flex justify-between items-center">
          <span>{motor.name} - Rp {motor.price.toLocaleString()}</span>
          <button onClick={() => handleClick(motor.name)} className="bg-blue-600 text-white px-3 py-1">Choose</button>
        </div>
      ))}
    </div>
  )
}