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
  const logoUrl = useBaseUrl('img/gosaad-logo.svg');
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img
          className={styles.brandIcon}
          src={logoUrl}
          alt="Logo GoSAAD"
          width="80"
          height="80"
        />
        <Heading as="h1" className="hero__title">
          Panduan {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          Panduan langkah demi langkah untuk menyiapkan, melaksanakan, dan
          mengevaluasi ujian.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/administrator/login">
            Saya Administrator
          </Link>
          <Link
            className="button button--outline button--primary button--lg"
            to="/docs/peserta/login">
            Saya Peserta
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
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
