const PodcastImage = (prop) => {
    return(
        <div>
            <a href={prop.href}><img src={prop.src} width="100px" height="100px" style={{marginRight: "1vw"}} /></a>
        </div>
    )
}

export default PodcastImage;