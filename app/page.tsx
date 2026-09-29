import MotorCard from "./MotorCard";

export default function Page() {
  return (
    <div className="p-8 space-y-2">
      <MotorCard name="Honda PCX" price={200000}/>
      <MotorCard name="Yamaha XMAX" price={275000}/>
    </div>
  )
}