import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const features = [
  
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
