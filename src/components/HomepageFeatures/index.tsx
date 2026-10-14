import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const guideCards = [
  {
    number: '01',
    title: 'Administrator',
    description:
      'Kelola data, bank soal, jadwal, pelaksanaan, dan hasil ujian.',
    to: '/docs/administrator/login',
    action: 'Buka panduan Administrator',
  },
  {
    number: '02',
    title: 'Peserta',
    description:
      'Siapkan nomor ujian dan password sebelum masuk ke ruang ujian.',
    to: '/docs/peserta/login',
    action: 'Buka panduan Peserta',
  },
  {
    number: '03',
    title: 'Mengenal GoSAAD',
    description:
      'Pahami halaman akses yang tepat sebelum memulai penggunaan GoSAAD.',
    to: '/docs/intro',
    action: 'Lihat gambaran GoSAAD',
  },
];

const workflowSteps = [
  {
    number: '01',
    title: 'Siapkan soal',
    description: 'Buat bank soal atau mulai dari dokumen Word yang sudah tersedia.',
    to: '/docs/administrator/persiapan/bank-soal',
  },
  {
    number: '02',
    title: 'Laksanakan ujian',
    description: 'Atur jadwal, token, dokumen, dan pemantauan peserta.',
    to: '/docs/administrator/pelaksanaan/tambah-jadwal',
  },
  {
    number: '03',
    title: 'Nilai lebih cepat',
    description: 'Kelola koreksi jawaban dan periksa hasil setelah ujian selesai.',
    to: '/docs/administrator/evaluasi/koreksi',
  },
  {
    number: '04',
    title: 'Baca hasil',
    description: 'Gunakan hasil ujian dan rekap peserta sebagai bahan langkah berikutnya.',
    to: '/docs/administrator/evaluasi/hasil-ujian',
  },
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.section} aria-labelledby="mulai-panduan">
      <div className="container">
        <div className={styles.heading}>
          <p className={styles.eyebrow}>PANDUAN PENGGUNA</p>
          <Heading as="h2" id="mulai-panduan">
            Mulai sesuai peran Anda
          </Heading>
          <p>
            Pilih jalur yang tepat agar Anda langsung masuk ke panduan yang
            relevan.
          </p>
        </div>
        <div className={styles.grid}>
          {guideCards.map((card) => (
            <Link className={styles.card} key={card.number} to={card.to}>
              <span className={styles.number}>{card.number}</span>
              <Heading as="h3">{card.title}</Heading>
              <p>{card.description}</p>
              <span className={styles.action}>{card.action} →</span>
            </Link>
          ))}
        </div>

        <section className={styles.workflow} aria-labelledby="alur-go-saad">
          <div className={styles.workflowHeading}>
            <p className={styles.eyebrow}>ALUR KERJA GoSAAD</p>
            <Heading as="h2" id="alur-go-saad">
              Dari ujian ke proses asesmen yang terbaca
            </Heading>
            <p>
              Ikuti urutan ini bila Anda mengelola ujian dari awal hingga
              hasilnya siap ditinjau.
            </p>
          </div>
          <ol className={styles.workflowList}>
            {workflowSteps.map((step) => (
              <li className={styles.workflowItem} key={step.number}>
                <span className={styles.workflowNumber}>{step.number}</span>
                <div>
                  <Heading as="h3">{step.title}</Heading>
                  <p>{step.description}</p>
                  <Link to={step.to}>Lihat langkahnya →</Link>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.community} aria-labelledby="diskusi-go-saad">
          <div>
            <p className={styles.communityEyebrow}>BUTUH BANTUAN?</p>
            <Heading as="h2" id="diskusi-go-saad">
              Bergabung dalam diskusi GoSAAD
            </Heading>
            <p>
              Tanyakan penggunaan fitur dan berbagi pengalaman dengan komunitas
              GoSAAD di Telegram.
            </p>
          </div>
          <a
            className={styles.communityLink}
            href="https://t.me/gosaad02"
            aria-label="Bergabung diskusi GoSAAD di Telegram">
            Diskusi di Telegram →
          </a>
        </section>

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
