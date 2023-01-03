import '../../styles/App.css';
import Layout from "../../components/Layout.js";

import anchorLogo from "../../assets/anchor-logo.png";
import spotifyLogo from "../../assets/spotify-logo.png";
import applePodcastLogo from "../../assets/apple-podcast.jpg";
import youtubeLogo from "../../assets/youtube-logo.png";

import PodcastImage from "../../components/PodcastImage";

function Podcast() {
  return (
    <Layout>
        <h1>Podcast</h1>
        <p>
          Started over the pandemic, this podcast was made to help students transition into university. It has concluded,
          but the episodes are online for your enjoyment.
        </p>
        <h2>Listen to our Podcast</h2>
        <div style = {{display: "flex", justifyContent: "left"}}>
            <PodcastImage href='https://anchor.fm/utmwhitevan' src={anchorLogo} />
            <PodcastImage href='https://open.spotify.com/show/6BcR8UyPdFQgGLxtWtMcOV' src={spotifyLogo} />
            <PodcastImage href='https://podcasts.apple.com/ca/podcast/utm-white-van-podcast/id1526206234' src={applePodcastLogo} />
            <PodcastImage href='https://www.youtube.com/watch?v=hGOnSzNkYpU&list=PL8tzZnwFhlFYMhy3ff1g9ty7kAilBNuUD&ab_channel=UTMWhiteVan' src={youtubeLogo} />
        </div>
    </Layout>
  );
}

export default Podcast;
