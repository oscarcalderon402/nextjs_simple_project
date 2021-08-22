import Container from '../components/container';
import User from '../components/users';
import Head from 'next/head';
import fetch from 'isomorphic-fetch';

const Index = (props) => {
  return (
    <Container>
      <Head>
        <title>Next.js Project - Home</title>
      </Head>
      <h1>Next</h1>
      <User users={props.users} />
    </Container>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch('https://reqres.in/api/users');
  const data = await res.json();

  return { users: data.data };
};

export default Index;
