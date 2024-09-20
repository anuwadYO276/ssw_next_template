"use client";

import React, { useState } from 'react';
import Button from '../app/components/Button';
import LoanForm from '../app/components/LoanForm';
import InsuranceForm from '../app/components/InsuranceForm';

export default function Page() {
  const [selectedOption, setSelectedOption] = useState('loan');
  const [loading, setLoading] = useState(false); // State for loading

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };


  const handleSubmit = async (fullname, phone, consent, userId, asset, insuranceType, interestedInsurance) => {
    const tab_data = asset ? 1 : 2;
  
    // ตรวจสอบข้อมูลที่กรอก
    if (tab_data === 1) {
      if (!fullname || !phone || !asset ) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        return;
      }
    } else {
      if (!fullname || !phone || !insuranceType || !interestedInsurance ) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        return;
      }
    }
  
    // สร้าง payload สำหรับส่งข้อมูล
    const payload = {
      fullname,
      phone,
      consent,
      userId,
      asset,
      insuranceType,
      interestedInsurance,
      tab_data
    };
  
    try {
      const response = await fetch('http://localhost:8888/send-message-notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer SA7gSgVwEt5jgwB7ypljaLyfgfqU22M2btplCMp+zfIETupLJnlHkxYUOGKh2mWCBs3Qk1H8jfe3KIYBMC5twQpOGmst2ko/Y2E4pUcG42iHNh5QdqoLuHF7lt9qpw5aEfoNshfee2pcCiC+kBoLjwdB04t89/1O/w1cDnyilFU='
        },
        body: JSON.stringify(payload)
      });
  
      if (!response.ok) {
        const errorText = await response.text(); // อ่านข้อความที่ตอบกลับ
        throw new Error(`Network response was not ok: ${errorText}`);
      }
  
      const data = await response.json();
      console.log('Success:', data);
      alert('ส่งข้อมูลสำเร็จ');
    } catch (error) {
      console.error('Error:', error);
      alert('เกิดข้อผิดพลาดในการส่งข้อมูล: ' + error.message); // แสดงข้อความข้อผิดพลาด
    }
  };
  

  return (
    <>
    <div className="row">
      <div className="col-6 mb-4 d-grid gap-2">
        <Button className="btn btn-warning" onClick={() => handleOptionSelect('loan')}>
          สนใจขอสินเชื่อ
        </Button>
      </div>
      <div className="col-6 mb-4 d-grid gap-2">
        <Button className="btn btn-dark" onClick={() => handleOptionSelect('insurance')}>
          สนใจซื้อประกันภัย
        </Button>
      </div>

      <div className="col-lg-12 col-sm-12 mb-4">
        <div className="collapse show mb-4" id="tab_loan">
          {selectedOption === 'loan' && (
            <LoanForm handleSubmit={handleSubmit} loading={loading} />
          )}
          {selectedOption === 'insurance' && (
            <InsuranceForm handleSubmit={handleSubmit} loading={loading} />
          )}
        </div>
      </div>
    </div>
    </>
  );
}
