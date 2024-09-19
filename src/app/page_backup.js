"use client";
import React, { useEffect, useState } from 'react';
import Card1 from './components/Card1';
import CardsStatistics1 from './components/CardsStatistics1';
import CardsStatistics2 from './components/CardsStatistics2';
import CardsStatistics3 from './components/CardsStatistics3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightAndDownLeftFromCenter,faHourglass,faClock,faUser,faTruck,faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
 
  return (
    <>
    <div className="row">
        <div className="col-lg-12 col-sm-6 mb-4">
          <Card1 
            title="Welcome to the NextJS Template 🎉"
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
        

        
      </div>

    </>
  );
}