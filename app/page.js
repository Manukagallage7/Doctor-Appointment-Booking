import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h2>Welcome to the Doctor Appointment Booking App</h2>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white">Book Appointment</Button>
    </div>
  )
}