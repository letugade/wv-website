import '../../styles/App.css';
import Layout from "../../components/Layout.js";

function Repo() {
  return (
      <Layout>
        <h1>Repo</h1>
        <p>
          This is the github repo with all the projects which are affiliated with UTM White Van. Feel free to make some projects 
          that you feel the server can use!
        </p>
        <p>
          Here are a couple of projects we have been working on:
          <ul>
            <li>Anon Bot</li>
            <li>Daisy Reminder Bot</li>
            <li>Snowball Bot</li>
          </ul>
          and more...
        </p>
        <a style={{textDecoration: "none"}}href="https://github.com/white-van"><strong>Contribute Now</strong></a>
      </Layout>
  );
}

export default Repo;
