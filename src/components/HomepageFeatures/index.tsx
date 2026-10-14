import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const guideCards = [
  {
    number: '01',
    title: 'Pilih akses Anda',
    description:
      'Kenali halaman yang digunakan administrator dan peserta sebelum memulai.',
    to: '/docs/intro#pilih-akses-web-anda',
  },
  {
    number: '02',
    title: 'Untuk administrator',
    description:
      'Mulai dari login dan lanjutkan ke panduan pengelolaan operasional ujian.',
    to: '/docs/administrator/login',
  },
  {
    number: '03',
    title: 'Untuk peserta',
    description:
      'Siapkan akses ujian Anda dan ikuti panduan sebelum mengerjakan soal.',
    to: '/docs/peserta/login',
  },
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.section} aria-labelledby="mulai-panduan">
      <div className="container">
        <div className={styles.heading}>
          <p className={styles.eyebrow}>PANDUAN PENGGUNA</p>
          <Heading as="h2" id="mulai-panduan">
            Mulai dari kebutuhan Anda
          </Heading>
          <p>
            Pilih panduan sesuai peran Anda untuk memulai penggunaan GoSAAD.
          </p>
        </div>
        <div className={styles.grid}>
          {guideCards.map((card) => (
            <Link className={styles.card} key={card.number} to={card.to}>
              <span className={styles.number}>{card.number}</span>
              <Heading as="h3">{card.title}</Heading>
              <p>{card.description}</p>
              <span className={styles.action}>Buka panduan →</span>
            </Link>
          ))}
        </div>
        <p className={styles.desktopCta}>
          Menyiapkan server GoSAAD?{' '}
          <Link to="/docs/mulai-di-sini/aplikasi-desktop">
            Gunakan GoSAAD Desktop →
          </Link>
        </p>
      </div>
    </section>
  );
}
