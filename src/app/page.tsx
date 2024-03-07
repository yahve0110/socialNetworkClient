// pages/index.js (или index.tsx для TypeScript)
"use client"

import React, { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    // Перенаправление на страницу профиля
    window.location.href = '/profile';
  }, []);

  // Возвращаем заглушку (это может быть загрузочный индикатор или другое содержимое)
  return (
    <section>
      Loading...
    </section>
  );
};

export default HomePage;
