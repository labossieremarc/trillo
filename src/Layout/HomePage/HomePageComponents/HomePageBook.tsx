import React from 'react';
import BookForm from '../../../Utilities/BookForm/BookForm';
import styles from './HomePageComponents.module.scss'

const HomePageBook = () => {


    return (
        <section className={styles.section_book}>
            <div className={styles.book}>
                <div className={styles.book__form}>
                    <BookForm/>
                </div>
            </div>
        </section>
    )
}

export default HomePageBook;