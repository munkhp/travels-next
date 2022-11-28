import Banner from "../../components/Partials/Banner"
import Tools from "../../components/Tools/Tools"
import DomesticFlights from "../../components/Tools/DomesticFlights"
import FAQs from "../../components/Tools/FAQs"
import InternationalFlights from "../../components/Tools/InternationalFlights"
import Railway from "../../components/Tools/Railway"
import UsefulFacts from "../../components/Tools/UsefulFacts"
import VisaInfo from "../../components/Tools/VisaInfo"
import { Fragment, useState } from 'react'
import MetaTags from '../../components/MetaTags'
import Head from 'next/head'
const TravelTools = () => {
    const [tool, setTool] = useState(0);
    return <Fragment>
        <Head>
            <title>Travels in Mongolia - Travel Tools</title>
            <MetaTags title='Travels in Mongolia - Travel Tools' description='All the basics you need before traveling to Mongolia' url='https://travelsinmongolia.com/travel-tools' image='https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359919/travels/bg-banner-tools_gaz0w1.jpg' />
        </Head>
        <Banner customClass="tools-page" id="banner">
            <div className="page-title-wrapper">
                <div className="page-title-wrapper">
                    <div className="page-title-content">
                        <ol className="breadcrumb">
                            <li>
                                <a href="#" className="link home">Home</a>
                            </li>
                            <li className="active">
                                <a href="#" className="link">travel tools</a>
                            </li>
                        </ol>
                        <div className="clearfix"></div>
                        <h1 className="captions">travel tools</h1>
                    </div>
                </div>
            </div>
        </Banner>
        <section className="padding-top padding-bottom">
            <div className="container">
                <Tools selected={(index) => setTool(index)} />
                {tool === 0 && <FAQs />}
                {tool === 1 && <InternationalFlights />}
                {tool === 2 && <DomesticFlights />}
                {tool === 3 && <VisaInfo />}
                {tool === 4 && <UsefulFacts />}
                {tool === 5 && <Railway />}
            </div>
        </section>
    </Fragment >
}
export default TravelTools;