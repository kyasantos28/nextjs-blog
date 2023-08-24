import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <h3>My Impression on my First Month as a Third-year BSCpE Student</h3>
        <p>Ever since the vacation days, I am already excited to go to school again because I was supposed
          to transfer to another school due to financial problems. Things did not go well with my transfer and I am 
          now supposed to continue my third year here in University of the Assumption. I was not able to attend school
          in the first few weeks because of the delay. Now, I am trying to keep up with the lessons that I missed.</p>
        <p>There are a lot of changes that happened in our first month. The most significant is the change of our program
          chair. He caused a lot of trouble during his time here in the university. It is a relief that we no longer have to 
          deal with him. With our new program chair and adviser now, things are going smooth and easy. Our lessons are
          interesting and our professors teach well. With this, this year will be a good one with my classmates.</p>
        <p>I know now how to update my website.</p>

          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </section>
    </Layout>
  );
}