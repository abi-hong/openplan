'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@repo/ui';
import React, { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('홍희수'); 

  const fetchPhoto = async () => {
    try {
      const res = await fetch("https://picsum.photos/id/0/info");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      router.push(`/result?data=${encodeURIComponent(JSON.stringify(data))}`);
    } catch (error) {
      console.error("사진 정보를 가져오는 중 오류 발생:", error);
      const messageBox = document.createElement('div');
      messageBox.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        text-align: center;
        font-family: sans-serif;
      `;
      messageBox.innerHTML = `
        <p>사진 정보를 가져오는 데 실패했습니다. 다시 시도해주세요.</p>
        <button onclick="this.parentNode.remove()" style="margin-top: 15px; padding: 8px 15px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">확인</button>
      `;
      document.body.appendChild(messageBox);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h1 className={styles.title}>안녕하세요<br />{name}입니다.</h1>
        <div className={styles.ctas}>
          <Button onClick={fetchPhoto} variant="primary">다음</Button>
        </div>
      </div>
    </div>
  );
}