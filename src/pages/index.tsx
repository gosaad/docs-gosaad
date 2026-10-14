import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const logoUrl = useBaseUrl('img/gosaad-icon.svg');
  const telegramLogoUrl = useBaseUrl('img/telegram-logo.svg');
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          className={styles.brandIcon}
          src={logoUrl}
          alt="Logo GoSAAD"
          width="96"
          height="96"
        />
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          Panduan {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          Panduan langkah demi langkah untuk menyiapkan, melaksanakan, dan
          mengevaluasi ujian.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/administrator/login">
            Saya Administrator
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/peserta/login">
            Saya Peserta
          </Link>
        </div>
        <a
          className={styles.telegramLink}
          href="https://t.me/gosaad02"
          aria-label="Bergabung diskusi GoSAAD di Telegram">
          <img src={telegramLogoUrl} alt="" width="28" height="28" />
          <span>Diskusi bersama di Telegram</span>
        </a>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Panduan penggunaan"
      description="Panduan penggunaan GoSAAD untuk administrator dan peserta.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
