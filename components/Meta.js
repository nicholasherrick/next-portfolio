import Head from 'next/head';

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Nicholas Herrick',
  keywords:
    'software, engineer, web, developer, programmer, full, stack, fullstack, frontend, backend, front, back, end, react, redux, next, node, mongo, mysql',
  description:
    'Full Stack Software Engineer & Web Developer with experience in the Denver area. Certified in Full Stack Web Development from the University of Denver. Skills include building and managing full stack applications using mostly Javascript frameworks and technologies and some PHP. Knowledgeable in UI/UX design principles & able to create responsive web pages. Aware of the importance of writing clear, easy to understand code in an organized and uniform process. Recognized as a conscientious and open minded individual that values teamwork, respect, and integrity. Excited to utilize and improve upon my skills while working with a great dev team.',
};

export default Meta;
