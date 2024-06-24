"use client";
import React, { useEffect, useState } from 'react';
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';









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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <>  
    <br/><br/><br/><br/>

    <div className="container">
      
      
      

    {/* <pre>{JSON.stringify(data.detail, null, 2)}</pre> */}
      <div className="row">
        <div className="col-lg-8 mb-3">
          <Card1 
            title="Congratulations John! 🎉"
            text="You have done 72% more sales today. Check your new badge in your profile."
            img="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/illustrations/man-with-laptop-light.png"
            button="View Badges"
            btn = "btn btn-sm btn-primary"
          />
        </div>
        <div className="col-lg-12">
          <div className="mt-3">
          <Card2 
            title="Transactions"
            text=""
            data={data.detail.history}
          />
          </div>
        </div>
      </div>
    
    </div>
    
    
    </>
  );
}