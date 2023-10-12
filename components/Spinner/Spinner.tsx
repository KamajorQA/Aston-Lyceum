'use client';
import { Dna } from 'react-loader-spinner';
import s from './spinner.module.css';

function Spinner() {
  return (
    <section className={s.preloadContainer}>
      <Dna visible={true} height="80" width="80" ariaLabel="dna-loading" />
    </section>
  );
}

export { Spinner };
