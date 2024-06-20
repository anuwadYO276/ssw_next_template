import Image from "next/image";
import Card1 from "../components/card1";
import Card2 from "../components/card2";
import Card3 from "../components/card3";

export default function cards() {
  return (
    <>
    <br/><br/><br/><br/>
    <div className="container-fluid">

    <h5>Cards 1</h5>
    <div className="row mt-3">
      <div className="col-sm-12 col-md-4  mb-3">
      <Card1 title="ไทยวิวัฒน์ประกันภัย" description="ประกันรถยนต์ชั้น 1" price="7,500" imageUrl="https://ssw-uat-5guqcv.s3.ap-southeast-1.amazonaws.com/thaivivat_logo_ca2d0f91c3.webp" />
      </div>
      <div className="col-sm-12 col-md-4  mb-3">
      <Card1 title="ทิพยประกันภัย" description="ประกันรถยนต์ชั้น 1" price="5,999" imageUrl="https://ssw-uat-5guqcv.s3.ap-southeast-1.amazonaws.com/tip_logo_cca7bc8737.webp" />
      </div>
      <div className="col-sm-12 col-md-4  mb-3">
      <Card1 title="เมืองไทยประกันภัย" description="ประกันรถยนต์ชั้น 1" price="6,300" imageUrl="https://ssw-uat-5guqcv.s3.ap-southeast-1.amazonaws.com/muangth_logo_5e049e5f2c.webp" />
      </div>
    </div>

    
    <h5>Cards 2</h5>
    <div className="row mt-3">
      <div className="col-sm-12 col-md-3  mb-3">
      <Card2 title="ไทยวิวัฒน์ประกันภัย" description="ประกันรถยนต์ชั้น 1" price="7,500" imageUrl="https://ssw-uat-5guqcv.s3.ap-southeast-1.amazonaws.com/thaivivat_logo_ca2d0f91c3.webp" />
      </div>
      <div className="col-sm-12 col-md-3  mb-3">
      <Card2 title="ทิพยประกันภัย" description="ประกันรถยนต์ชั้น 1" price="5,999" imageUrl="https://ssw-uat-5guqcv.s3.ap-southeast-1.amazonaws.com/tip_logo_cca7bc8737.webp" />
      </div>
      <div className="col-sm-12 col-md-3  mb-3">
      <Card2 title="เมืองไทยประกันภัย" description="ประกันรถยนต์ชั้น 1" price="6,300" imageUrl="https://ssw-uat-5guqcv.s3.ap-southeast-1.amazonaws.com/muangth_logo_5e049e5f2c.webp" />
      </div>
      <div className="col-sm-12 col-md-3  mb-3">
      <Card2 title="เมืองไทยประกันภัย" description="ประกันรถยนต์ชั้น 1" price="6,300" imageUrl="https://ssw-uat-5guqcv.s3.ap-southeast-1.amazonaws.com/muangth_logo_5e049e5f2c.webp" />
      </div>
    </div>


    
    <h5>Cards 3</h5>
    <div className="row mt-3">
      <div className="col-sm-12 col-md-2  mb-3">
      <Card3 title="ไทยวิวัฒน์ประกันภัย" description="ประกันรถยนต์ชั้น 1" price="7,500" imageUrl="https://ssw-uat-5guqcv.s3.ap-southeast-1.amazonaws.com/thaivivat_logo_ca2d0f91c3.webp" />
      </div>
    </div>


    </div>
    </>
  );
}
