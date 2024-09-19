// src/lib/metrics.js

import client from 'prom-client';

let register = null;

function getRegister() {
  if (!register) {
    register = new client.Registry();

    const gauge = new client.Gauge({
      name: 'example_metric',
      help: 'Example metric',
    });

    register.registerMetric(gauge);
    gauge.set(10);

    console.log('Metrics registered'); // ตรวจสอบการลงทะเบียน
  } else {
    console.log('Metrics already registered'); // ตรวจสอบการลงทะเบียนซ้ำ
  }

  return register;
}

export { getRegister };
