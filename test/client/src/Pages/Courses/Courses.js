import React, { useState, useEffect } from 'react'
import styles from './Courses.module.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
function Courses() {
    const [courses, setCources] = useState([])
    // const [toggle, setToggle] = useState(false)
    // const [filteredCources, setFilteredCources] = useState([])
    // const [resultItem, setResultItem] = useState([])

    const [input, setInput] = useState("")
    const [sort, setSort] = useState(false)

    const handleSort = () => {
        setSort(!sort)
    }
    const search = (e) => {
        setInput(e.target.value)
    }
    useEffect(() => {
        axios.get("http://localhost:8080/courses")
            .then(res => { setCources(res.data); })

    }, [])
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/courses/${id}`)
        const deleteItem = courses.filter(item => item._id != id)
        setCources(deleteItem)
    }
    // const filter = () => {
    //     setToggle(!toggle)
    //     toggle ? setCources([...filteredCources].sort((a, b) => a.price - b.price)) : setCources([...filteredCources])
    // }
    return (
        <>
            <section className={styles.section}>
                <div className={styles.textCenter}>
                    <span className={styles.line}></span>
                    <h1 className={styles.heading}>Popular Courses</h1>
                    <button className={styles.btn} onClick={handleSort} >Sort For Price</button>
                    <input value={input} onChange={search} placeholder='Search for item' className={styles.search} />
                </div>
                <Container>

                    <div className={styles.rowContainer}>
                        <Row>
                            {sort == false ?
                                courses
                                    .filter(item => input == "" ? courses : item.Title.toLowerCase().includes(input.toLowerCase()))
                                    .sort((a, b) => a.price > b.price ? 1 : -1)
                                    .map(course => (
                                        <Col key={course._id}>
                                            <img src={course.imgUrl} className={styles.img} />
                                            <div className={styles.cardText}>
                                                <p>{course.Title}</p>
                                                <div>{course.subTitle}</div>
                                            </div>
                                            <div className={styles.cardFooter}>
                                                <div className={styles.cardImgDiv}>
                                                    <img src={course.accImg} />
                                                    <div className={styles.position}> {course.accName},<span>{course.accPosition}</span></div>
                                                </div>
                                                <div className={styles.price}>
                                                    {course.price}$
                                                </div>

                                            </div>
                                            <button className={styles.btn} onClick={() => handleDelete(course._id)}>Delete</button>
                                        </Col>
                                    )) :
                                courses.filter(item => input == "" ? courses : item.Title.toLowerCase().includes(input.toLowerCase()))
                                    .map(course => (
                                        <Col key={course._id}>
                                            <img src={course.imgUrl} className={styles.img} />
                                            <div className={styles.cardText}>
                                                <p>{course.Title}</p>
                                                <div>{course.subTitle}</div>
                                            </div>
                                            <div className={styles.cardFooter}>
                                                <div className={styles.cardImgDiv}>
                                                    <img src={course.accImg} />
                                                    <div className={styles.position}> {course.accName},<span>{course.accPosition}</span></div>
                                                </div>
                                                <div className={styles.price}>
                                                    {course.price}$
                                                </div>
                                            </div>
                                            <button className={styles.btn} onClick={() => handleDelete(course._id)}>Delete</button>
                                        </Col>
                                    ))
                            }
                        </Row>
                    </div>
                </Container>
            </section>

        </>
    )
}

export default Courses