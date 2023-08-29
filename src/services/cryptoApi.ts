const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': 'ecfb8607d7msh561792eb12a4e3ap12bd7bjsnff5c15aff577',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
  export{}