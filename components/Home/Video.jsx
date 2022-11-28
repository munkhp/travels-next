import React from 'react'

export default function Video() {
    const [showVideo, setVideo] = React.useState(false);
    const [blockClass, setBlockClass] = React.useState(null);
    const toggleVideo = () => {
        let show = !showVideo;
        let css = show ? "show-video" : null;
        setBlockClass(css);
        setVideo(show);
    }
    return <section className="videos layout-1">
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div className="video-wrapper padding-top padding-bottom">
                        <h5 className="sub-title">
                            Go on an unforgettable
                        </h5>
                        <h2 className="title">ADVENTURE</h2>
                        <div className="text">
                            Discover breathtaking landscapes and stunning wilderness with us where it is normally hard to reach with regular vehicles.
                        </div>
                        <a href="/tours" className="btn btn-maincolor">
                            view more
                        </a>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="video-thumbnail">
                        <div className="video-bg">
                            <img
                                src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359930/travels/video-bg_k0wkyj.jpg"
                                alt=""
                                className="img-responsive"
                            />
                        </div>
                        <button className="video-button-play" onClick={toggleVideo}>
                            <i className="icons fa fa-play"></i>
                        </button>
                        <button className={"video-button-close " + blockClass} onClick={toggleVideo}></button>
                        {showVideo && (<iframe className="video-embed " src="https://www.youtube.com/embed/eV_nwgsUsrc?controls=0&autoplay=1" title="YouTube" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)}
                    </div>
                </div>
            </div>
        </div>
    </section>
}