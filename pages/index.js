import Layout from '../components/Layout';

const Index = ({ bpi }) => (
  <Layout>
    <section>
      <h1>Welcome to BitzPrice!</h1>
    </section>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  };
};

export default Index;