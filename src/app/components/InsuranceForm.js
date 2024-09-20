// D:\ssw_next_template\src\app\components\InsuranceForm.js

import React, { useState } from 'react';
import ConsentSection from './ConsentSection.js';
import LiffComponent from '../line-liff/LiffComponent';

export default function InsuranceForm({ handleSubmit, loading }) {
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [insuranceType, setInsuranceType] = useState('1');
  const [interestedInsurance, setInterestedInsurance] = useState('');
  const [consent, setConsent] = useState(false);
  const [userId, setUserId] = useState('');

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
          <option value="1" selected>ประกันรถยนต์</option> 
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

      <ConsentSection consent={consent} setConsent={setConsent} />
      <LiffComponent setUserId={setUserId} />


      <div className="mb-3">
        <button 
          type="button" 
          className="btn btn-primary" 
          onClick={() => handleSubmit(fullname, phone, consent, userId,'', insuranceType, interestedInsurance)}
          disabled={loading}
        >
          {loading ? 'ส่งข้อมูล...' : 'ส่งข้อมูล'}
        </button>
      </div>
    </div>
  );
}
