"use client";
import React, { useEffect, useState } from 'react';
import CardPea from './components/CardPea';
import Card4 from './components/Card4';
import Card7 from './components/Card7';
import ChartCustom from './components/chart';

 

const dataChart = {
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
};


const data4 = {
  1: {
    'name': 'มีชื่อมิเตอร์',
    'position': 'iOS Developer',
    'avatar': 'https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/17.png',
    'score': 1
  },
  2: {
    'name': 'ประเภทมิเตอร์',
    'position': 'UI/UX Designer',
    'avatar': 'https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/8.png',
    'score': 68
  },
  3: {
      'name': 'ปริมาณหน่วยที่ใช้',
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

const dataChartx = {
  labels: [ 'มิถุนายน  2566',
            'กรกฎาคม  2566',
            'สิงหาคม 2566',
            'กันยายน 2566',
            'ตุลาคม 2566',
            'พฤศจิกายน 2566',
            'ธันวาคม 2566',
            'มกราคม 2567',
            'กุมภาพันธ์ 2567',
            'มีนาคม 2567',
            'เมษายน 2567',
            'พฤษภาคม 2567'
          ],
  datasets: [
    {
      label: 'ประวัติการชำระเงิน',
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
      borderWidth: 1,
      data: [398.59, 339.39, 366.65
            ,399.98, 525.55, 362.48
            ,202.72, 242.46, 201.70
            ,447.85, 697.86, 563.62

      ],
    },
  ],
};

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addressIds, setAddressIds] = useState([]);

  useEffect(() => {
    // ดึงข้อมูลจาก API
    const fetchData = async () => {
      try {
        const params = new URLSearchParams({
          "reference_no": "JNM670602034NF59X",
          "customer_idcard": "3450300184256",
          "user": "32759",
          "system": "vloan"
        });

        const response = await fetch(`http://10.1.112.108:8071/api/pea/v1/result-meter?${params.toString()}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic TE9TLVZsb2FuOjA5ODhzU1dlLTEzMmEtN2ZiOS04MjA5LWRlZjA2NDUtODExNGM1OA==',
            'Cookie': 'laravel_session=ZMYxvz4kZDotwG9oXNHY4XyfUTgpNFIqaUJPzLev'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <br /><br /><br /><br />
      <h1>API Data</h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(data.detail.detail_result, null, 2)}</pre> */}
      
      
      <div className='container-fluid'> 
    
   
{/* <div className="row">

<div className="col-lg-12 mb-4">
  <div className="card-shadow">
    <div className="card-body">
  <ChartCustom type="line" data={dataChartx} width={300} height={0}/>
    </div>
  </div>
</div>

</div> */}


{/* <div className="row">

<div className="col-lg-3 mb-4">
  <Card7 
    title="การตรวจสอบ"
    description="ผลการตรวจสอบ ระมัดระวัง" 
    TextHead1="รายการ" 
    TextHead2="กลุ่ม" 
    data={data4} 
    DataDropdown={DataDropdown}
    />
  </div>


<div className="col-lg-3 mb-4">
 <div className="mb-3">
 <Card4
  title="395.74" 
  description="บ้านเลขที่ ไฟเพื่อการเกษตร"
  Chart="pie"
  data = {dataChart}
  width={150}
  height={150}
  /> 
 </div>
 <div className="mb-3">
  <Card4
    title="242.61" 
    description="บ้านเลขที่ 140"
    Chart="pie"
    data = {dataChart}
    width={150}
    height={150}
    /> 
 </div>
</div>

</div> */}


<div className='row mt-5'>
  <div className='col-lg-12 mb-4'> 
    <h3>ผลการตรวจสอบ</h3>
  </div>
  <div className='col-lg-12 mb-4'> 
    <div className="card-shadow">
    <div className="card-body">
    <table className="table table-bordered">
      <thead>
        <tr align="center">
          <th scope="col">ลำดับ</th>
          <th scope="col">รายการ</th>
          <th scope="col">เกณฑ์</th>
          <th scope="col">รายละเอียด</th>
          <th scope="col">กลุ่ม</th>
        </tr>
      </thead>
      <tbody>
        {
          data.detail.detail_result.map((item, index) => (
            <tr key={index}>
              <th scope="row"><div align='center'>{index + 1}</div></th>
              <td>{item.section}</td>
              <td>{item.criteria}</td>
              <td>{item.description}</td>
              <td><div align='center'>{item.group}</div></td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </div>
    </div>
  </div>

  
  
</div>

<div className='row mt-5'>
  <div className='col-lg-12 mb-4'> 
    <h3>ประวัติการชำระเงิน</h3>
  </div>
      {
        data.detail.history.map((item, index) => (
          <div key={index} className="col-lg-3 mb-4">
            <CardPea 
              title={'บ้านเลขที่ '+item.house_no} 
              description="ประวัติการชำระเงินย้อนหลัง เฉลี่ย" 
              TextHead1="เดือน" 
              TextHead2="ยอดชำระ" 
              data={item.payment} DataDropdown={DataDropdown}
              average={item.net_amount_average} 
              />
           </div>
        ))
      }


</div>
</div>
    </div>
  );
}
