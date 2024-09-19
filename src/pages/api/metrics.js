// src/pages/api/metrics.js

import { getRegister } from '../../lib/metrics';

export default async (req, res) => {
  try {
    const register = getRegister();
    res.setHeader('Content-Type', register.contentType);
    res.status(200).send(await register.metrics());
  } catch (error) {
    console.error('Error in metrics endpoint:', error);
    res.status(500).send('Error');
  }
};
