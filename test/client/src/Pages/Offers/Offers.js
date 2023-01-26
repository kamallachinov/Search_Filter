import React from 'react'
import styles from './Offers.module.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const p = {
    padding: "6rem"
}

function Offers() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.row}>
                    <Container fluid>
                        <Row>
                            <Col lg={6} style={p} className={styles.colLeft}>
                                <h1>Register now and get a discount <span>50%</span> discount until 1 January</h1>
                                <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
                                <button className={styles.btn}>Register now</button>
                            </Col>
                            <Col lg={6} style={p} className={styles.colRight}>
                                <h1>Search for your course</h1>
                                <form className={styles.form}>
                                    <input placeholder='Course name'/>
                                    <input placeholder='Category'/>
                                    <input placeholder='Degree'/>
                                    <button className={styles.btn}>Submit</button>
                                </form>
                            </Col>
                        </Row>

                    </Container>


                </div>
            </section>

        </>
    )
}

export default Offers