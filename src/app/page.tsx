import Image from "next/image";
import homeImg from 'public/home.jpg';

export default function Home() {
  return (
    <div className="relative">
       <div className="absolute inset-0 overflow-hidden">
        <Image
          src={homeImg}
          alt="quadcopter flying in front of rural home" 
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative z-10 h-screen flex items-center justify-center">
        <h4 className="text-4x1 font-bold text-white">Home Page</h4>
      </div>
    </div>
   
  );
}
