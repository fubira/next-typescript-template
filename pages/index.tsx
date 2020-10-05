import '@/css/index.scss';
import Head from 'next/head';
import Container from '@/components/container';
import HelloWorld from '@/components/HelloWorld';

const Index = (): JSX.Element => {
  return (
    <Container>
      <HelloWorld />
    </Container>
  );
};

export default Index;
