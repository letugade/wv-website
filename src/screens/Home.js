import logo from '../assets/logo.svg';
import '../styles/App.css';
import Layout from "../components/Layout.js";

function Home() {
  return (
      <Layout>
        <h1>UTM White Van</h1>
        <p>A UTM community discord for students, grads, & faculty to get advice for university, freely chat, and make new friends!</p>
        <p><strong> We Offer Free Candy... </strong></p>
        <button> Join the Server </button>
      </Layout>
  );
}

export default Home;
