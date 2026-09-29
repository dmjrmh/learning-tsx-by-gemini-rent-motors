interface Motor {
  id: number;
  nama: string;
  harga: number;
  tersedia: boolean;
}

export default function Page() {
  const motor: Motor = { id: 1, nama: "Honda Beat", harga: 15000000, tersedia: true};

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">{motor.nama}</h1>
      <p className="text-lg">Harga: Rp {motor.harga.toLocaleString()}</p>
      <p className="text-sm">{motor.tersedia ? "Available" : "Not Available"}</p>
    </div>
  )
};
