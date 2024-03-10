"use client"

import React, { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    window.location.href = '/profile';
  }, []);

  return (
    <section>
      Loading...
    </section>
  );
};

export default HomePage;
