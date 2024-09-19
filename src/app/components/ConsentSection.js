import React from 'react';

export default function ConsentSection({ consent, setConsent }) {
  return (
    <div className="mb-3">
      <p>ข้าพเจ้าให้ความยินยอมกับบริษัทฯ ในการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลของข้าพเจ้าในการติดต่อเพื่อเสนอผลิตภัณฑ์และบริการของบริษัทฯและรับรองว่าได้อ่านและรับทราบประกาศความเป็นส่วนตัวแล้ว </p>

      <div className="form-check">
        <input 
          className="form-check-input" 
          type="radio" 
          name="policy" 
          id="consent_yes" 
          checked={consent === true} 
          onChange={() => setConsent(true)} 
        />
        <label className="form-check-label" htmlFor="consent_yes">ยินยอม</label>
      </div>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="radio" 
          name="policy" 
          id="consent_no" 
          checked={consent === false} 
          onChange={() => setConsent(false)} 
        />
        <label className="form-check-label" htmlFor="consent_no">ไม่ยินยอม</label>
      </div>

      <div className="mb-3">
        <a href="https://www.sawad.co.th/%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%81%e0%b8%b2%e0%b8%a8%e0%b8%84%e0%b8%a7%e0%b8%b2%e0%b8%a1%e0%b9%80%e0%b8%9b%e0%b9%87%e0%b8%99%e0%b8%aa%e0%b9%88%e0%b8%a7%e0%b8%99%e0%b8%95%e0%b8%b1%e0%b8%a7/" className="text-underline">ประกาศความเป็นส่วนตัว</a>
      </div>
    </div>
  );
}
