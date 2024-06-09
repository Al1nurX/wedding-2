import Image from "next/image";
import gis from "../../../public/images/gis.png";
import insta from "../../../public/images/insta.png";

export default function Social() {
  return (
    <div className="flex justify-center ">
      <Image
        className="min-w-[100px]"
        height={100}
        width={100}
        src={gis}
        alt="gis"
      />
      <Image height={90} width={80} src={insta} alt="insta" />
    </div>
  );
}
