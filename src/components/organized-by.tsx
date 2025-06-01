import { FC } from "react";
import swiftAhmedabadLogo from "../assets/2025/swift-ahmedabad.svg";
import swiftHyderabadLogo from "../assets/2025/swift-hyderabad.svg";
import swiftMumbaiLogo from "../assets/2025/swift-mumbai.svg";
import swiftLogo from "../assets/2025/swift.svg";

interface OrganizedByProps {}

const OrganizedBy: FC<OrganizedByProps> = () => {
  return (
    <div className="flex flex-col max-w-6xl mx-auto">
      <h2 className="text-2xl text-center mb-12 uppercase font-oliver">
        organized with ❤️ by
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-12">
        <div className="flex justify-center items-center gap-2">
          <img src={swiftLogo} alt="Swift Delhi" className="h-9 w-9" />
          <p className="font-calSans text-lg">Swift Delhi</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img src={swiftLogo} alt="Swift Bengaluru" className="h-9 w-9" />
          <p className="font-calSans text-lg">Swift Bengaluru</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img src={swiftMumbaiLogo} alt="Swift Mumbai" className="h-9 w-9" />
          <p className="font-calSans text-lg">Swift Mumbai</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img
            src={swiftHyderabadLogo}
            alt="Swift Hyderabad"
            className="h-9 w-9"
          />
          <p className="font-calSans text-lg">Swift Hyderabad</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img
            src={swiftAhmedabadLogo}
            alt="Swift Ahmedabad"
            className="h-9 w-9"
          />
          <p className="font-calSans text-lg">Swift Ahmedabad</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img src={swiftLogo} alt="Swift Surat" className="h-9 w-9" />
          <p className="font-calSans text-lg">Swift Surat</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img src={swiftLogo} alt="Swift Chennai" className="h-9 w-9" />
          <p className="font-calSans text-lg">Swift Chennai</p>
        </div>
      </div>
      <div className="h-24" />
    </div>
  );
};

export default OrganizedBy;
