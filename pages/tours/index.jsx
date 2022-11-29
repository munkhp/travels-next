import { useState, useEffect, Fragment } from 'react'
import Banner from '../../components/Partials/Banner';
import useWindowDimensions from '../../utils/windowDimensions';
import Select from 'react-select';
import axios from "axios";
import apiUrl from '../../utils/apiUrl';
import arrayChunk from '../../utils/arrayChunk';
import ContentLoader from "react-content-loader";
import { TourCard } from '../../components/Tour';
import Pagination from '../../components/Pagination';
import MetaTags from '../../components/MetaTags';
import Head from 'next/head';
const Tours = ({ destinationOptions }) => {
    const [tours, setTours] = useState([]);
    const [colSize, setCols] = useState(3);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [destination, setDestination] = useState(null);
    const [destinationId, setDestinationId] = useState(null);
    const [duration, setDuration] = useState(null);
    const [maxDuration, setMaxDuration] = useState(null);
    const { width } = useWindowDimensions();
    const customStyles = {
        container: (provided, state) => ({
            ...provided,
            zIndex: 11
        }),
    }
    const durationOptions = [{
        value: 1,
        label: '01'
    }, {
        value: 2,
        label: '02'
    }, {
        value: 3,
        label: '03'
    }, {
        value: 4,
        label: '04'
    }, {
        value: 5,
        label: '05'
    }, {
        value: 6,
        label: '06'
    }, {
        value: 7,
        label: '07'
    }, {
        value: 8,
        label: '08'
    }, {
        value: 9,
        label: '09'
    }, {
        value: 10,
        label: '10'
    }, {
        value: 11,
        label: '11'
    }, {
        value: 12,
        label: '12'
    }];
    useEffect(() => {
    }, [])
    useEffect(() => {
        let colSize = 0;
        if (width <= 600) {
            colSize = 1;
        } else if (width >= 601 && width < 992) {
            colSize = 2;
        } else {
            colSize = 3;
        }
        setCols(colSize)
    }, [width])
    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(
                    `${apiUrl}/tours?page=${page}&destination=${destinationId}&maxDuration=${maxDuration}`
                );
                const { data, pages: totalPages, total } = await res.data;
                setPages(totalPages);
                setTours(data);
                setTotal(total);
                setLoading(false);
                setError(null);
            } catch (error) {
                console.log(error);
                setLoading(false);
                setTotal(0);
                if (error.response?.status === 404) {
                    setError("No results found");
                } else
                    setError(" ");
            }
        }
        getData()
    }, [page, destinationId, maxDuration])
    const handleSubmit = async (e) => {
        e.preventDefault();
        setDestinationId(destination?.value);
        setMaxDuration(duration?.value);
        setPage(1);
    }
    return (
        <Fragment>
            <Head>
                <title>Travels in Mongolia - Our Tours</title>
                <MetaTags title='Travels in Mongolia - Our Tours' description='We offer wide variety of tours covering all regions of Mongolia.' url='https://travelsinmongolia.com/tours' image='https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359920/travels/group-tour-view_tt6cdl.jpg' />
            </Head>
            <Banner customClass="tour-view">
                <div className="page-title-wrapper">
                    <div className="page-title-content">
                        <ol className="breadcrumb">
                            <li>
                                <a href="/" className="link home">Home</a>
                            </li>
                            <li className="active">
                                <div className="link">Tours</div>
                            </li>
                        </ol>
                        <div className="clearfix"></div>
                        <h1 className="captions">Tours</h1>
                    </div>
                </div>
            </Banner>
            <div className="tour-result-main padding-top padding-bottom">
                <div className="container">
                    <div className="result-meta">
                        <div className="row">
                            <div className="col-md-12 col-lg-4">
                                <div className="result-count-wrapper">Results Found:
                                    <span className="result-count"> {total}</span>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-8">
                                <div className="result-filter-wrapper">
                                    <form onSubmit={handleSubmit}>
                                        <div className="selection-bar">
                                            <div className="select-wrapper">
                                                <Select instanceId="1" options={destinationOptions} placeholder={'Destinations'} isClearable={true} onChange={(value) => setDestination(value)} />
                                            </div>
                                            <div className="select-wrapper">
                                                <Select instanceId="2" options={durationOptions} styles={customStyles} placeholder={'Max duration'} isClearable={true} onChange={(value) => setDuration(value)} />
                                            </div>
                                            <div className="select-wrapper">
                                                <button type="submit" data-hover="LET'S GO!" className="btn btn-slide">
                                                    <span className="text">search now</span>
                                                    <span className="icons fa fa-long-arrow-right"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="result-body">
                        <div className="row">
                            <div className="col-md-12">
                                {((loading || tours.length === 0) && !error) ? (
                                    arrayChunk([...Array(3)], colSize).map((row, i) => (
                                        <div key={i} className="row">
                                            {row.map((col, i) => (
                                                <div className="col-xs-12 col-sm-6 col-md-4" key={i}>
                                                    <ContentLoader uniqueKey="tours-loader" viewBox="0 0 360 328">
                                                        <rect x="0" y="0" rx="5" ry="5" width="360" height="220" />
                                                        <rect x="0" y="253" rx="4" ry="4" width="360" height="13" />
                                                        <rect x="0" y="287" rx="3" ry="3" width="330" height="10" />
                                                        <rect x="0" y="318" rx="3" ry="3" width="350" height="10" />
                                                    </ContentLoader>
                                                </div>
                                            ))}
                                        </div>
                                    ))
                                ) : error ? (
                                    <h3 className="error-text">{error}</h3>
                                ) : (
                                    <div className="tours-list">
                                        {arrayChunk([...tours], colSize).map((row, i) => (
                                            <div key={i} className="row">
                                                {row.map((col, i) => (
                                                    <div className="col-xs-12 col-sm-6 col-md-4" key={i}>
                                                        <TourCard tour={col} key={col._id} />
                                                    </div>
                                                ))}
                                            </div>
                                        ))
                                        }
                                        <Pagination page={page} pages={pages} changePage={setPage} />
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >)
}
export async function getServerSideProps(context) {
    const url = `${apiUrl}/destinations`;
    const res = await axios.get(url);
    const { data: destinations } = await res.data;
    let destinationOptions = [];
    destinations.forEach(destination => {
        destinationOptions.push({
            value: destination._id,
            label: destination.title
        });
    });
    return { props: { destinationOptions } };
}
export default Tours;