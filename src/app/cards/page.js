

"use client";
import React, { useEffect, useState } from 'react';
import SpinKit from '../components/SpinKit';
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import CardsStatistics1 from '../components/CardsStatistics1';
import CardsStatistics2 from '../components/CardsStatistics2';
import CardsStatistics3 from '../components/CardsStatistics3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightAndDownLeftFromCenter,faHourglass,faClock,faUser,faTruck,faArrowUp } from '@fortawesome/free-solid-svg-icons';



export default function Page() {

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
            'Cookie':'laravel_session=ZMYxvz4kZDotwG9oXNHY4XyfUTgpNFIqaUJPzLev'
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
    return <SpinKit/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <>  

    {/* <pre>{JSON.stringify(data.detail, null, 2)}</pre> */}
      <div className="row">
        <div className="col-lg-12 col-sm-12 mb-3">
          <Card1 
            title="Congratulations John! 🎉"
            text="You have done 72% more sales today. Check your new badge in your profile."
            img="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/illustrations/man-with-laptop-light.png"
            button="View Badges"
            btn = "btn btn-sm btn-primary"
          />
        </div>

        <div className="col-lg-3 col-sm-6 mb-4">
          <CardsStatistics1 
            title="Session"
            text="58,352"
            percentage="(+29%)"
            small="Last Week Analytics"
            status="text-success"
            icon={faUpRightAndDownLeftFromCenter}
            boxclass="badge bg-label-primary rounded p-2"
          />
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
          <CardsStatistics1 
            title="Time On Site"
            text="28m 14s"
            percentage="(+18%)"
            small="Last Week Analytics"
            status="text-success"
            icon={faHourglass}
            boxclass="badge bg-label-info rounded p-2"
          />
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
          <CardsStatistics1 
            title="Bounce Rate"
            text="62%"
            percentage="(-14%)"
            small="Last Week Analytics"
            status="text-danger"
            icon={faClock}
            boxclass="badge bg-label-danger rounded p-2"
          />
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
          <CardsStatistics1 
            title="Users"
            text="18,472"
            percentage="(+42%)"
            small="Last Week Analytics"
            status="text-success"
            icon={faUser}
            boxclass="badge bg-label-success rounded p-2"
          />
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
          <CardsStatistics2 
            title="On route vehicles"
            text="42"
            percentage="(+18.2%)"
            small="than last week"
            span="avatar-initial rounded bg-label-primary"
            icon={faTruck}
            shadow="card card-border-shadow-primary h-100"
          />
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
          <CardsStatistics2 
            title="On route vehicles"
            text="42"
            percentage="(+18.2%)"
            small="than last week"
            span="avatar-initial rounded bg-label-warning"
            icon={faTruck}
            shadow="card card-border-shadow-warning h-100"
          />
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
          <CardsStatistics2 
            title="On route vehicles"
            text="42"
            percentage="(+18.2%)"
            small="than last week"
            span="avatar-initial rounded bg-label-danger"
            icon={faTruck}
            shadow="card card-border-shadow-danger h-100"
          />
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
          <CardsStatistics2 
            title="On route vehicles"
            text="42"
            percentage="(+18.2%)"
            small="than last week"
            span="avatar-initial rounded bg-label-info"
            icon={faTruck}
            shadow="card card-border-shadow-info h-100"
          />
        </div>
        
        <div className="col-lg-3 col-sm-6 mb-4">
          <CardsStatistics3 
            title="Total Sales"
            text="8,352"
            small="12% of target"
            status="text-success"
            span="+29% "
            icon={faArrowUp}
            spanclass="avatar-initial rounded-circle bg-label-primary"
            divclass="avatar avatar-md border-5 border-light-primary rounded-circle mx-auto mb-4"
          />
        </div>


        <div className="col-lg-12 col-sm-12 mb-3">
          <div className="mt-3">
            <h3>ตัวอย่างการดึง API</h3>
          <Card2 
            title="Transactions"
            text=""
            data={data.detail.history}
          />
          </div>
        </div>
      </div>

    </>
  );
}