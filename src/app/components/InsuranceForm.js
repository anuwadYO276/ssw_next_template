import React, { useState } from 'react';
import axios from 'axios';
import ConsentSection from './ConsentSection.js';
import LiffComponent from '../line-liff/LiffComponent';

export default function InsuranceForm() {
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [insuranceType, setInsuranceType] = useState('');
  const [interestedInsurance, setInterestedInsurance] = useState('');
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false); // State for loading

  const handleSubmit = async () => {
    // if (!fullname || !phone || !insuranceType || !interestedInsurance || !consent) {
    if (!fullname || !phone ){
      alert('กรุณากรอกข้อมูลให้ครบถ้วน และยินยอมก่อนส่งข้อมูลx');
      return;
    }

    try {
      setLoading(true); 
      const response = await axios.post('http://localhost:8888/send-message-notify', {
        fullname: fullname,
        phone: phone,
        insurance_type: insuranceType,
        interested_insurance: interestedInsurance,
        policy: consent,
        userId
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer SA7gSgVwEt5jgwB7ypljaLyfgfqU22M2btplCMp+zfIETupLJnlHkxYUOGKh2mWCBs3Qk1H8jfe3KIYBMC5twQpOGmst2ko/Y2E4pUcG42iHNh5QdqoLuHF7lt9qpw5aEfoNshfee2pcCiC+kBoLjwdB04t89/1O/w1cDnyilFU='
        }
      });
      alert('ข้อมูลถูกส่งเรียบร้อยแล้ว');
    } catch (error) {
      console.error('Error sending data', error);
      alert('เกิดข้อผิดพลาดในการส่งข้อมูล');
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="card card-body">
      <div className="mb-3">
        <label htmlFor="fullname" className="form-label">ชื่อ - นามสกุล</label>
        <input 
          type="text" 
          className="form-control" 
          id="fullname" 
          value={fullname} 
          onChange={(e) => setFullname(e.target.value)} 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">เบอร์โทรศัพท์</label>
        <input 
          type="text" 
          className="form-control" 
          id="phone" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          maxLength="10" 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="insurance_type" className="form-label">ประกันรถยนต์</label>
        <select 
          className="form-select" 
          id="insurance_type" 
          value={insuranceType} 
          onChange={(e) => setInsuranceType(e.target.value)}>
          <option value="1">ประกันรถยนต์</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="interested_insurance" className="form-label">เลือกชั้นประกันที่สนใจ</label>
        <select 
          className="form-select" 
          id="interested_insurance" 
          value={interestedInsurance} 
          onChange={(e) => setInterestedInsurance(e.target.value)}>
          <option value="">เลือกชั้นประกันที่สนใจ</option>
          <option value="1">1</option>
          <option value="2+">2+</option>
          <option value="3+">3+</option>
          <option value="3">3</option>
        </select>
      </div>

      {/* Section ความยินยอม */}
      <ConsentSection consent={consent} setConsent={setConsent} />

      <LiffComponent />
      <div className="mb-3">
        <button 
          type="button" 
          className="btn btn-primary" 
          onClick={handleSubmit}
          disabled={loading} // Disable button while loading
        >
          {loading ? 'ส่งข้อมูล...' : 'ส่งข้อมูล'}
        </button>
      </div>
    </div>
  );
}
