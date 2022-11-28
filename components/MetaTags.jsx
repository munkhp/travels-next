import { Fragment } from "react";

export default function MetaTags({ title, type = 'website', url, description, image }) {
    return <Fragment>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <link rel="canonical" href={url} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content={type} />
        <meta property="og:title"
            content={title} />
        <meta property="og:description"
            content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Travels in Mongolia" />
        <meta property="og:updated_time" content="2022-11-27T12:51:04+00:00" />
        <meta property="og:published_time" content="2022-11-27T12:51:04+00:00" />
        <meta property="og:modified_time" content="2022-11-27T12:51:04+00:00" />
        <meta property="og:image"
            content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title"
            content={title} />
        <meta name="twitter:description"
            content={description} />
        <meta name="twitter:image"
            content={image} />
    </Fragment>
}