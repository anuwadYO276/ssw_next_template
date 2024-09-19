import React, { useState } from 'react';
import ConsentSection from './ConsentSection.js';
import LiffComponent from '../line-liff/LiffComponent';

export default function LoanForm() {
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [asset, setAsset] = useState('');
  const [consent, setConsent] = useState(false);

  const handleSubmit = () => {
    if (!fullname || !phone || !asset || !consent) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน และยินยอมก่อนส่งข้อมูล');
      return;
    }

    // ส่งข้อมูล
    alert('ข้อมูลถูกส่งเรียบร้อยแล้ว');
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
        <label htmlFor="asset" className="form-label">เลือกประเภทสินทรัพย์</label>
        <select 
          className="form-select" 
          id="asset" 
          value={asset} 
          onChange={(e) => setAsset(e.target.value)}>
          <option value="">เลือกประเภทสินทรัพย์</option>
          <option value="มอเตอร์ไซค์">มอเตอร์ไซค์</option>
          <option value="รถยนต์">รถยนต์</option>
          <option value="บ้านและที่ดิน">บ้านและที่ดิน</option>
          <option value="รถบรรทุก">รถบรรทุก</option>
          <option value="รถเพื่อการเกษตร">รถเพื่อการเกษตร</option>
        </select>
      </div>

      {/* Section ความยินยอม */}
      <ConsentSection consent={consent} setConsent={setConsent} />

      
      <LiffComponent />

      <div className="mb-3">
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>ส่งข้อมูล</button>
      </div>
    </div>
  );
}
