interface Props {
  name: string;
  price: number;
}

export default function MotorCard({name, price}: Props) {
  return (
    <div className="border p-3 rounded">
      <h4 className="font-bold">{name}</h4>
      <p className="text-sm">Rp {price}/day</p>
    </div>
  )
}