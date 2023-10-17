'use client';
import { Dna } from 'react-loader-spinner';
import s from './spinner.module.css';

type Props = {
  height: string;
  width: string;
};
function Spinner({ height, width }: Props) {
  return (
    <section className={s.preloadContainer}>
      <Dna
        visible={true}
        height={height}
        width={width}
        ariaLabel="dna-loading"
      />
    </section>
  );
}

export { Spinner };
