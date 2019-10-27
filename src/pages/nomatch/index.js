import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
const Nomatch = () => {
    return (<div className={styles.nomatch}>
        <section>
            <h1>404</h1>
            <p>
                <Link to="/">Go Back</Link>
            </p>
        </section>
    </div>);
};
export default Nomatch;
