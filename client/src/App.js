import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [points1, setPoints1] = useState(0);
  const [points2, setPoints2] = useState(0);
  const [points3, setPoints3] = useState(0);
  const [total, setTotal] = useState(0);
  const url = 'http://localhost:3001';
  const [monthData, setMonthData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setMonthData(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

function getPoints(item) {
  let sum = 0;
  if(item > 50 && item <= 100) {
    sum = sum + (item - 50);
    return sum;
  } else if(item > 100) {
    sum = sum + 50 + (item - 100) * 2;
    return sum;
  } else {
    return sum;
  }
};

 let map0 = monthData[0]
 let sum0 = 0;
 for(let idx in map0) {
    sum0 += getPoints(map0[idx]);
 }

 let map1 = monthData[1]
 let sum1 = 0;
 for(let idx in map1) {
    sum1 += getPoints(map1[idx]);
 }

 let map2 = monthData[2]
 let sum2 = 0;
 for(let idx in map2) {
    sum2 += getPoints(map2[idx]);
 }

 let total1 = sum1 + sum2 + sum0;

 useEffect(() => {
  setPoints1(sum0);
  setPoints2(sum1);
  setPoints3(sum2);
  setTotal(total1);
}, [sum0, sum1, sum2, total1])

  return (
    <div>
      <h1>Month one earned reward points: {points1}</h1>
      <h1>Month two earned reward points: {points2}</h1>
      <h1>Month three earned reward points: {points3}</h1>
      <h1>Total: {total}</h1>
    </div>
  );
}

export default App;
