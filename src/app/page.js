"use client";
import React, { useEffect, useState } from 'react';
import Card3 from './components/card3';
import Card4 from './components/card4';
import Card5 from './components/card5';
import Card6 from './components/card6';
import Card7 from './components/card7';


const data = {
  // labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
      borderWidth: 1,
      data: [300, 50, 100],
    },
  ],
};

const data1 = {
  1: {'฿ 100,000': 'ทุนประกัน'},
  2: {'ซ่อมอู่': 'ประเภทการซ่อม'},
  3: {'฿ 2,500,000': 'ทรัพย์สินบุคคล ภายนอก'},
}

const data2 = {
  1: {'฿ 450,000': 'ทุนประกัน'},
  2: {'ซ่อมอู่': 'ประเภทการซ่อม'},
  3: {'฿ 5,000,000': 'ทรัพย์สินบุคคล ภายนอก'},
}

const data3 = {
  1: {'฿ 500,000': 'ทุนประกัน'},
  2: {'ซ่อมอู่': 'ประเภทการซ่อม'},
  3: {'฿ 5,000,000': 'ทรัพย์สินบุคคล ภายนอก'},
}
// https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/17.png
const data4 = {
  1: {
    'name': 'Nathan Wagner',
    'position': 'iOS Developer',
    'avatar': 'https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/17.png',
    'score': 33
  },
  2: {
    'name': 'Emma Bowen',
    'position': 'UI/UX Designer',
    'avatar': 'https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/8.png',
    'score': 68
  },
  3: {
      'name': 'Alma Gonzalez',
      'position': 'Product Manager',
      'avatar': 'https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/2.png',
      'score': 18
  },
  4: {
    'name': 'Nathan Wagner',
    'position': 'iOS Developer',
    'avatar': 'https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/17.png',
    'score': 33
  },
  5: {
    'name': 'Emma Bowen',
    'position': 'UI/UX Designer',
    'avatar': 'https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/8.png',
    'score': 68
  },
  6: {
      'name': 'Alma Gonzalez',
      'position': 'Product Manager',
      'avatar': 'https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/2.png',
      'score': 18
  },
};
const DataDropdown = {
  1: {
    'ItemName': 'Action',
    'href': '#/action-1',  
  },
  2: {
    'ItemName': 'Another action',
    'href': '#/action-1',  
  },
  3: {
    'ItemName': 'Something else',
    'href': '#/action-1',  
  },
}


const data5 = {
  1: {
    'name': 'Nathan Wagner',
    'position': 'iOS Developer',
    'avatar': '',
    'score': 33
  },
  2: {
    'name': 'Emma Bowen',
    'position': 'UI/UX Designer',
    'avatar': '',
    'score': 68
  },
  3: {
      'name': 'Alma Gonzalez',
      'position': 'Product Manager',
      'avatar': '',
      'score': 18
  }
};


export default function Home() {
  return (
    <>
    <br/><br/><br/><br/>

    <div className='container-fluid'> 
    <div className="row">
    <div className="col-lg-6 mb-4">
      <Card3 
          title="Congratulations John! " 
          description="You have done 72% more sales today. Check your new badge in your profile."
          image="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/illustrations/man-with-laptop-light.png" 
      />  
    </div>
    
    <div className="col-lg-6 mb-3">
      <div className="row">
      <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
      
      <Card4
          title="8,258" 
          description="Total Orders"
          Chart="doughnut"
          data = {data}
          width={150}
          height={150}
      /> 
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
      <Card4
          title="4,228" 
          description="Total Orders"
          Chart="line"
          data = {data}
          width={150}
          height={150}
      /> 
      </div>
      </div>
    </div>
    <div className="col-lg-4 mb-4">
    <Card6 
        title="ไทยวิวัฒน์ประกันภัย" 
        description="ประกันรถยนต์ชั้น 1" 
        price="฿ 7,500" 
        TextPrice="ผ่อน 8 เดือน"
        image="https://ssw-uat-5guqcv.s3.ap-southeast-1.amazonaws.com/thaivivat_logo_ca2d0f91c3.webp"
        btnName="เลือกแผนประกัน"
        btnClass="btn btn-primary"
        data = {data1}
        TextAlert="ผ่อนเงินสด 0% นาน 12 เดือน ไม่ง้อบัตรเครดิต"
    />
    </div>
    <div className="col-lg-4 mb-4">
    <Card6 
        title="ทิพยประกันภัย" 
        description="ประกันรถยนต์ชั้น 1" 
        price="฿ 6,300" 
        TextPrice="ผ่อน 12 เดือน"
        image="https://ssw-uat-5guqcv.s3.ap-southeast-1.amazonaws.com/tip_logo_cca7bc8737.webp"
        btnName="เลือกแผนประกัน"
        btnClass="btn btn-primary"
        data = {data2}
        TextAlert="ผ่อนเงินสด 0% นาน 12 เดือน ไม่ง้อบัตรเครดิต"
    />
    </div>
    <div className="col-lg-4 mb-4">
    <Card6 
        title="เมืองไทยประกันภัย" 
        description="ประกันรถยนต์ชั้น 1" 
        price="฿ 5,999" 
        TextPrice="ผ่อน 8 เดือน"
        image="https://ssw-uat-5guqcv.s3.ap-southeast-1.amazonaws.com/muangth_logo_5e049e5f2c.webp"
        btnName="เลือกแผนประกัน"
        btnClass="btn btn-primary"
        data = {data3}
        TextAlert="ผ่อนเงินสด 0% นาน 12 เดือน ไม่ง้อบัตรเครดิต"
    />
    </div>
    <div className="col-lg-4 mb-4">
    <Card5 
          title="Upcoming Webinar" 
          description="Next Generation Frontend Architecture Using Layout Engine And React Native Web."
          image="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/illustrations/sitting-girl-with-laptop-dark.png"
          btnName="Join the event"
          urlName="#"
          btnClass="btn btn-primary"
      />  
    </div>
    <div className="col-lg-4 mb-4">
    <Card5 
          title="Upcoming Webinar" 
          description="Next Generation Frontend Architecture Using Layout Engine And React Native Web."
          image="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/illustrations/sitting-girl-with-laptop-dark.png"
          btnName="Join the event"
          urlName="#"
          btnClass="btn btn-primary"
      />  
    </div>
    <div className="col-lg-4 mb-4">
    <Card5 
          title="Upcoming Webinar" 
          description="Next Generation Frontend Architecture Using Layout Engine And React Native Web."
          image="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/illustrations/sitting-girl-with-laptop-dark.png"
          btnName="Join the event"
          urlName="#"
          btnClass="btn btn-primary"
      />  
    </div>
    <div className="col-lg-4 mb-4">
    <Card7
          title="Team Members" 
          description=""
          TextHead1="Name"
          TextHead2="Task"
          data={data4}
          DataDropdown ={DataDropdown}
      />  
    </div>
    <div className="col-lg-4 mb-4">
    <Card7
          title="Conversion Rate" 
          description="Compared To Last Month"
          TextHead1="INSTRUCTORS"
          TextHead2="COURSES"
          data={data5}
          DataDropdown ={DataDropdown}
      />  
    </div>

    </div>
    </div>
   
    </>
  );
}
