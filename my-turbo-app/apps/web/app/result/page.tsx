'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@repo/ui';
import React from 'react';
import pageStyles from '../page.module.css';
import resultStyles from './result.module.css';

export default function Result() {
  const params = useSearchParams();
  const router = useRouter();
  const data = params.get("data");

  if (!data) {
    return (
      <div className={`${pageStyles.page} ${resultStyles.resultPageBackground}`}>
        <div className={pageStyles.main}>
          <p className={resultStyles.text}>결과 없음</p>
          <div className={pageStyles.ctas}>
            <Button onClick={() => router.push('/')} variant="primary">
              이전
            </Button>
          </div>
        </div>
      </div>
    );
  }

  let photo;
  try {
    photo = JSON.parse(decodeURIComponent(data));
  } catch (error) {
    console.error("데이터 파싱 중 오류 발생:", error);
    return (
      <div className={pageStyles.page}>
        <div className={pageStyles.main}>
          <p className={resultStyles.text}>잘못된 데이터 형식입니다.</p>
          <div className={pageStyles.ctas}>
            <Button onClick={() => router.push('/')} variant="primary">
              이전
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${pageStyles.page} ${resultStyles.resultPageBackground}`}>
      <div className={pageStyles.main}>
        <img src={photo.download_url} alt="사진" className={resultStyles.image} />
        <div className={resultStyles.infoCard}>
          <div className={resultStyles.infoItem}>
            <p className={resultStyles.infoLabel}>id</p>
            <p className={resultStyles.infoValue}>{photo.id}</p>
          </div>
          <div className={resultStyles.infoItem}>
            <p className={resultStyles.infoLabel}>author</p>
            <p className={resultStyles.infoValue}>{photo.author}</p>
          </div>
        </div>

        <div className={resultStyles.infoCard}>
          <div className={resultStyles.infoItem}>
            <p className={resultStyles.infoLabel}>width</p>
            <p className={resultStyles.infoValue}>{Number(photo.width).toLocaleString()}</p>
          </div>
          <div className={resultStyles.infoItem}>
            <p className={resultStyles.infoLabel}>height</p>
            <p className={resultStyles.infoValue}>{Number(photo.height).toLocaleString()}</p>
          </div>
        </div>

        <div className={resultStyles.infoCard}>
          <div className={resultStyles.infoItem}>
            <p className={resultStyles.infoLabel}>url</p>
            <p className={`${resultStyles.infoValue} ${resultStyles.link}`}>{photo.url}</p>
          </div>
          <div className={resultStyles.infoItem}>
            <p className={resultStyles.infoLabel}>download_url</p>
            <p className={`${resultStyles.infoValue} ${resultStyles.link}`}>{photo.download_url}</p>
          </div>
        </div>
        <div className={pageStyles.ctas}>
          <Button onClick={() => router.push('/')} variant="primary">
            이전
          </Button>
        </div>
      </div>
    </div>
  );
}