"use client";

import Banner from "../../components/Partials/Banner"
import Tools from "../../components/Tools/Tools"
import DomesticFlights from "../../components/Tools/DomesticFlights"
import FAQs from "../../components/Tools/FAQs"
import InternationalFlights from "../../components/Tools/InternationalFlights"
import Railway from "../../components/Tools/Railway"
import UsefulFacts from "../../components/Tools/UsefulFacts"
import VisaInfo from "../../components/Tools/VisaInfo"
import { Fragment, useState } from 'react'
const TravelTools = () => {
    const [tool, setTool] = useState(0);
    return <Fragment>
        <Banner customClass="tools-page" id="banner">
            <div className="page-title-wrapper">
                <div className="page-title-wrapper">
                    <div className="page-title-content">
                        <ol className="breadcrumb">
                            <li>
                                <button className="link home">Home</button>
                            </li>
                            <li className="active">
                                <button className="link">travel tools</button>
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