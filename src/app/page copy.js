import Image from "next/image";
import Card from "./components/card1";

export default function Home() {
  return (
    <>
    <div className="container-fluid">

    <div className="row mt-3">
      <div className="col-sm-12 col-md-4  mb-3">
      <Card title="ไทยวิวัฒน์ประกันภัย" description="ประกันรถยนต์ชั้น 1" price="7,500" imageUrl="https://ssw-uat-5guqcv.s3.ap-southeast-1.amazonaws.com/thaivivat_logo_ca2d0f91c3.webp" />
      </div>
      <div className="col-sm-12 col-md-4  mb-3">
      <Card title="ทิพยประกันภัย" description="ประกันรถยนต์ชั้น 1" price="5,999" imageUrl="https://ssw-uat-5guqcv.s3.ap-southeast-1.amazonaws.com/tip_logo_cca7bc8737.webp" />
      </div>
      <div className="col-sm-12 col-md-4  mb-3">
      <Card title="เมืองไทยประกันภัย" description="ประกันรถยนต์ชั้น 1" price="6,300" imageUrl="https://ssw-uat-5guqcv.s3.ap-southeast-1.amazonaws.com/muangth_logo_5e049e5f2c.webp" />
      </div>
    </div>


    </div>
    </>
  );
}
