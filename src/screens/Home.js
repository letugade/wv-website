import '../styles/Home.css';
import '../styles/App.css';

import Layout from "../components/Layout.js";

import intro from "../assets/white-van-intro.gif";

function Home() {
  return (
      <Layout>
        <h1>UTM White Van</h1>
        <p>A UTM community discord for students, grads, & faculty to get advice for university, freely chat, and make new friends!</p>
        <p><strong> We Offer Free Candy... </strong></p>
        <div className="image-container">
          <img className="home-img" src={intro} />
          <iframe src="https://discord.com/widget?id=514949893278924802&theme=dark" width="250px" height="250px" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>
        <br />
      </Layout>
  );
}

export default Home;
