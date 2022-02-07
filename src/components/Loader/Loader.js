import Template from 'react-loader-spinner';

import styles from './loader.module.scss';

const Loader = () => (
  <div className={styles.Loader}>
    <Template type="TailSpin" color="#02be6e" height={100} width={100} />
  </div>
);



export default Loader;