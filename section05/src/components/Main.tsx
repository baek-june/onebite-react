import React from 'react';

export default function Main() {
  const objA = {
    a: 1,
    b: 2,
  };
  return (
    <main>
      <h1>main</h1>
      <h2>a: {objA.a}</h2>
      <h2>b: {objA.b}</h2>
    </main>
  );
}
