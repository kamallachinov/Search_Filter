import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './Create.module.scss'
import { Helmet } from "react-helmet";
import axios from 'axios'
function Create() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add Page</title>
                <link rel="icon" type="image/png" href="https://cdn.pixabay.com/photo/2017/04/20/07/07/add-2244771_960_720.png" sizes="16x16" />
            </Helmet>
            <Formik
                initialValues={{ imgUrl: '', Title: '', subTitle: '', accImg: '', accName: '', accPosition: '', price: '' }}
                validationSchema={Yup.object({
                    imgUrl: Yup.string()
                        .min(20, 'Must be 20 characters or less')
                        .required('Required'),
                    Title: Yup.string()
                        .max(10, 'Must be 10 characters or less')
                        .required('Required'),
                    subTitle: Yup.string()
                        .max(8, 'Must be 8 characters or less')
                        .required('Required'),
                    accImg: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    accName: Yup.string()
                        .max(10, 'Must be 10 characters or less')
                        .required('Required'),
                    accPosition: Yup.string()
                        .max(10, 'Must be 10 characters or less')
                        .required('Required'),
                    price: Yup.number().required("required")
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                    resetForm()
                    const myObj = {
                        imgUrl: values.imgUrl,
                        Title: values.Title,
                        subTitle: values.subTitle,
                        accImg: values.accImg,
                        accName: values.accName,
                        accPosition: values.accPosition,
                        price: values.price
                    }
                    axios.post("http://localhost:8080/courses", myObj)
                }}
            >
                {(formik, values) => (
                    <div className={styles.mainDiv}>
                        <form onSubmit={formik.handleSubmit} className={styles.form}>
                            <label htmlFor="imgUrl">imgUrl</label>
                            <input
                                id="imgUrl"
                                type="text"
                                {...formik.getFieldProps('imgUrl')}
                            />
                            {formik.touched.imgUrl && formik.errors.imgUrl ? (
                                <div>{formik.errors.imgUrl}</div>
                            ) : null}

                            <label htmlFor="Title">Title</label>
                            <input
                                id="Title"
                                type="text"
                                {...formik.getFieldProps('Title')}
                            />
                            {formik.touched.Title && formik.errors.Title ? (
                                <div>{formik.errors.Title}</div>
                            ) : null}

                            <label htmlFor="subTitle">subTitle</label>
                            <input id="subTitle" type="text" {...formik.getFieldProps('subTitle')} />
                            {formik.touched.subTitle && formik.errors.subTitle ? (
                                <div>{formik.errors.subTitle}</div>
                            ) : null}

                            <label htmlFor="accImg">accImg</label>
                            <input id="accImg" type="text" {...formik.getFieldProps('accImg')} />
                            {formik.touched.accImg && formik.errors.accImg ? (
                                <div>{formik.errors.accImg}</div>
                            ) : null}


                            <label htmlFor="accName">accName</label>
                            <input id="accName" type="text" {...formik.getFieldProps('accName')} />
                            {formik.touched.accName && formik.errors.accName ? (
                                <div>{formik.errors.accName}</div>
                            ) : null}

                            <label htmlFor="accPosition">accPosition</label>
                            <input id="accPosition" type="text" {...formik.getFieldProps('accPosition')} />
                            {formik.touched.accPosition && formik.errors.accPosition ? (
                                <div>{formik.errors.accPosition}</div>
                            ) : null}

                            <label htmlFor="price">price</label>
                            <input id="price" type="number" {...formik.getFieldProps('price')} />
                            {formik.touched.price && formik.errors.price ? (
                                <div>{formik.errors.price}</div>
                            ) : null}
                            <button type="submit" className={styles.btn}>Submit</button>
                        </form>
                    </div>
                )}
            </Formik>


        </>
    )
}

export default Create