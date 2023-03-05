import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';

function testprice() {
  // api key= 705f13eb-3fd2-44b3-a536-84ee0a10a1d8
  const [cryptos, setCryptos] = useState();

  useEffect(() => {
    fetch({
      url: 'https://coinranking1.p.rapidapi.com/coins?limit=1200',
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '749cb16441msh27276ffc2efb167p15090ajsn8cf28aa64aae',
      },
    }).then((res) => setCryptos(res));
  }, []);

  return { cryptos };
}

export default testprice;
