import Head from 'next/head';
import React, { Fragment } from 'react';

const Success = () => (
    <Fragment>
        <Head>
            <title>Travels in Mongolia - Request successful!</title>
        </Head>
        <section className="page-success">
            <div className="page-wrapper">
                <div className="page-content">
                    <h2>Success!</h2>
                    <div className="margin-bottom15">Thank you for your interest in our services. You request has been successful. We will contact you as soon as possible.</div>
                </div>
            </div>
        </section>
    </Fragment>
);

export default Success;