import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';

export default function Home() {

  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? <Loading /> : ''}
      <Header />
    </>
  )
}