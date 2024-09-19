"use client";
import React, { useState } from 'react';
import Button from '../app/components/Button';
import LoanForm from '../app/components/LoanForm';
import InsuranceForm from '../app/components/InsuranceForm';
import LiffComponent from '../app/line-liff/LiffComponent';

export default function Page() {
  const [selectedOption, setSelectedOption] = useState('loan');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
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
            <LoanForm />
          )}
          {selectedOption === 'insurance' && (
            <InsuranceForm />
          )}
        </div>
      </div>
    </div>
    </>
  );
}
