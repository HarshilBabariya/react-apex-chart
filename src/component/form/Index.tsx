import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Table from '../table/Index';
import Bubble from '../chart/Index';

const Formiks = () => {

    const [fData, setFData] = useState<any>([]);
    const [data, setData] = useState<any>([]);

    //initialize the values of input
    const initialValue = {
        x: "",
        y: ""
    };

    // validation for the form inputs
    const validationSchema = Yup.object({
        x: Yup.string().max(2, `* Only two digits are allowed!!`).required(`* Value can't be empty!!`),
        y: Yup.string().max(2, `* Only two digits are allowed!!`).required(`* Value can't be empty!!`)
    });

    // form submit event
    const showHandler = (values: any) => {

        values.z = 10;

        const datas = {
            x: values.x,
            y: values.y,
            z: 10
        };

        // convert the object into an array
        const items = Object.values(datas);
        setFData([...fData, items]);
        setData([...data, datas]);

        // re-assign the input field value
        values.x = '';
        values.y = '';
    };

    return (
        <>
            <div className="border" style={{ 'width': '600px', 'marginLeft': '350px', 'padding': '20px' }}>
                <div>
                    <h1>Insert Data to show on graph</h1>
                </div>
                <br />
                <Formik
                    initialValues={initialValue}
                    validationSchema={validationSchema}
                    onSubmit={showHandler}
                >
                    <Form>
                        <label htmlFor="x">Enter X :</label>
                        <Field id="x" name="x" type='number' autoComplete='off' />
                        <div className='text-danger'>
                            <ErrorMessage name='x' />
                        </div>
                        <br />
                        <label htmlFor="y">Enter Y :</label>
                        <Field id="y" name="y" type='number' autoComplete='off' />
                        <div className='text-danger'>
                            <ErrorMessage name='y' />
                        </div>
                        <br />
                        <button className='btn btn-outline-dark' type="submit">Show</button>
                    </Form>
                </Formik>
            </div>
            <br />
            <Table list={data} />
            <br />
            <Bubble list={fData} data={data} />
        </>
    )
}

export default Formiks;