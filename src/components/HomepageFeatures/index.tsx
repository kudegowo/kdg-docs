import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'For Parents & Guardians',
    emoji: '👨‍👩‍👧',
    description: (
      <>
        Pay school fees easily, track your child's progress, and stay connected 
        with teachers. Everything you need in one place.
      </>
    ),
    link: '/docs/for-parents',
  },
  {
    title: 'For Schools',
    emoji: '🏫',
    description: (
      <>
        Manage enrolment, collect fees securely, track attendance, and communicate 
        with parents — all from one platform.
      </>
    ),
    link: '/docs/for-schools',
  },
  {
    title: 'For Tutors',
    emoji: '📚',
    description: (
      <>
        Find students, manage your lessons, track assignments, and get paid 
        securely. Grow your tutoring practice.
      </>
    ),
    link: '/docs/for-tutors',
  },
];

const ProductAreas = [
  {
    title: 'School Payments',
    emoji: '💳',
    description: 'Pay fees securely through trusted payment providers',
    link: '/docs/product-areas/school-payments',
    status: 'Coming Q3 2026',
  },
  {
    title: 'SafeSchool',
    emoji: '🛡️',
    description: 'Secure pickup codes, safety ratings, training & emergency alerts',
    link: '/docs/product-areas/safe-school',
    status: 'Coming Q3 2026',
  },
  {
    title: 'Education',
    emoji: '📖',
    description: 'Homework, grades, and digital report cards',
    link: '/docs/product-areas/education',
    status: 'Coming 2027',
  },
  {
    title: 'Financial Literacy',
    emoji: '🎓',
    description: 'Teaching kids about money through fun lessons',
    link: '/docs/product-areas/financial-literacy',
    status: 'Coming 2027',
  },
];

function Feature({title, emoji, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={styles.featureLink}>
        <div className={clsx('card', styles.featureCard)}>
          <div className="text--center" style={{fontSize: '3rem', marginBottom: '1rem'}}>
            {emoji}
          </div>
          <div className="text--center padding-horiz--md">
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

function ProductArea({title, emoji, description, link, status}: typeof ProductAreas[0]) {
  return (
    <div className={clsx('col col--3')}>
      <Link to={link} className={styles.featureLink}>
        <div className={clsx('card', styles.productCard)}>
          <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>
            {emoji}
          </div>
          <Heading as="h4" style={{marginBottom: '0.5rem'}}>{title}</Heading>
          <p style={{fontSize: '0.9rem', marginBottom: '0.5rem'}}>{description}</p>
          <span className={styles.statusBadge}>{status}</span>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <Heading as="h2">Who It's For</Heading>
          </div>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      
      <section className={styles.productAreas}>
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <Heading as="h2">Product Areas</Heading>
            <p>Everything you need to connect families, schools, and tutors</p>
          </div>
          <div className="row">
            {ProductAreas.map((props, idx) => (
              <ProductArea key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.paymentDisclaimer}>
        <div className="container">
          <div className={clsx('card', styles.disclaimerCard)}>
            <div className="text--center">
              <Heading as="h3">🔒 Your Money is Safe</Heading>
              <p>
                KudEgOwo partners with trusted payment providers like <strong>Paystack</strong>, <strong>PayPal</strong>, and local banks 
                to process your payments securely. <strong>We never hold or handle your money directly</strong> — your funds 
                go straight to your school through these verified partners.
              </p>
              <Link to="/docs/how-it-works/payments" className="button button--primary">
                Learn How Payments Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
