import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import Icon, {type IconName} from '@site/src/components/Icon';
import styles from './styles.module.css';

type GuideCard = {
  icon: IconName;
  title: string;
  description: string;
  to: string;
  action: string;
};

const guideCards: GuideCard[] = [
  {
    icon: 'dashboard',
    title: 'Administrator',
    description:
      'Kelola data, bank soal, jadwal, pelaksanaan, dan hasil ujian.',
    to: '/docs/administrator/login',
    action: 'Buka panduan Administrator',
  },
  {
    icon: 'user',
    title: 'Peserta',
    description:
      'Siapkan nomor ujian dan password sebelum masuk ke ruang ujian.',
    to: '/docs/peserta/login',
    action: 'Buka panduan Peserta',
  },
  {
    icon: 'bookOpen',
    title: 'Mengenal GoSAAD',
    description:
      'Pahami halaman akses yang tepat sebelum memulai penggunaan GoSAAD.',
    to: '/docs/intro',
    action: 'Lihat gambaran GoSAAD',
  },
];

const workflowSteps = [
  {
    number: '1',
    title: 'Siapkan soal',
    description: 'Buat bank soal atau mulai dari dokumen Word yang sudah tersedia.',
    to: '/docs/administrator/persiapan/bank-soal',
  },
  {
    number: '2',
    title: 'Laksanakan ujian',
    description: 'Atur jadwal, token, dokumen, dan pemantauan peserta.',
    to: '/docs/administrator/pelaksanaan/tambah-jadwal',
  },
  {
    number: '3',
    title: 'Nilai lebih cepat',
    description: 'Kelola koreksi jawaban dan periksa hasil setelah ujian selesai.',
    to: '/docs/administrator/evaluasi/koreksi',
  },
  {
    number: '4',
    title: 'Baca hasil',
    description: 'Gunakan hasil ujian dan rekap peserta sebagai bahan langkah berikutnya.',
    to: '/docs/administrator/evaluasi/hasil-ujian',
  },
];

function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  centered = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
}) {
  return (
    <div className={clsx(styles.sectionHeading, centered && styles.centered)}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <Heading as="h2" id={id}>
        {title}
      </Heading>
      <p className={styles.lead}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  const telegramLogoUrl = useBaseUrl('img/telegram-logo.svg');
  return (
    <div className="container">
      <section className={styles.section} aria-labelledby="mulai-panduan">
        <SectionHeading
          id="mulai-panduan"
          eyebrow="Panduan pengguna"
          title="Mulai sesuai peran Anda"
          description="Pilih jalur yang tepat agar Anda langsung masuk ke panduan yang relevan."
          centered
        />
        <div className={styles.grid}>
          {guideCards.map((card) => (
            <Link className={clsx('card', styles.card)} key={card.title} to={card.to}>
              <span className={styles.iconBox}>
                <Icon name={card.icon} />
              </span>
              <Heading as="h3">{card.title}</Heading>
              <p>{card.description}</p>
              <span className={styles.action}>
                {card.action}
                <Icon name="arrowRight" size="sm" className={styles.arrow} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section
        className={clsx(styles.section, styles.divided)}
        aria-labelledby="alur-go-saad">
        <SectionHeading
          id="alur-go-saad"
          eyebrow="Alur kerja GoSAAD"
          title="Dari ujian ke proses asesmen yang terbaca"
          description="Ikuti urutan ini bila Anda mengelola ujian dari awal hingga hasilnya siap ditinjau."
        />
        <ol className={styles.workflowList}>
          {workflowSteps.map((step) => (
            <li className={styles.workflowItem} key={step.number}>
              <span className={styles.stepNumber} aria-hidden="true">
                {step.number}
              </span>
              <Heading as="h3">{step.title}</Heading>
              <p>{step.description}</p>
              <Link className={styles.action} to={step.to}>
                Lihat langkahnya
                <Icon name="arrowRight" size="sm" className={styles.arrow} />
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.community} aria-labelledby="diskusi-go-saad">
        <div>
          <p className={styles.eyebrow}>Butuh bantuan?</p>
          <Heading as="h2" id="diskusi-go-saad">
            Bergabung dalam diskusi GoSAAD
          </Heading>
          <p className={styles.lead}>
            Tanyakan penggunaan fitur dan berbagi pengalaman dengan komunitas
            GoSAAD di Telegram.
          </p>
        </div>
        <a
          className={clsx('button button--lg', styles.communityButton)}
          href="https://t.me/gosaad02"
          rel="noopener noreferrer"
          target="_blank">
          <img src={telegramLogoUrl} alt="" width="20" height="20" />
          Diskusi di Telegram
        </a>
      </section>

      <p className={styles.desktopCta}>
        <Icon name="monitor" size="sm" />
        <span>
          Menyiapkan server GoSAAD?{' '}
          <Link to="/docs/mulai-di-sini/aplikasi-desktop">
            Gunakan GoSAAD Desktop
          </Link>
        </span>
      </p>
    </div>
  );
}
