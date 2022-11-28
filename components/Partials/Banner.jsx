export default function Banner({ id, customClass, bgImg, children }) {
    return <section id={id} className={'page-banner ' + customClass} style={{
        backgroundImage: bgImg ? `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0.1) 25%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.1) 75%,
      rgba(0, 0, 0, 0) 90%,
      rgba(0, 0, 0, 0) 0
    ), url(${bgImg})` : null
    }}>
        <div className="container">
            {children}
        </div>
    </section>
}