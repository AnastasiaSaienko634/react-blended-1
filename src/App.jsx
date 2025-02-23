import BlogCard from './components/BlogCard/BlogCard';
import Container from './components/Container/Container';
import CryptoHistory from './components/CryptoHistory/CryptoHistory';
import ForbesList from './components/ForbesList/ForbesList';
import Heading from './components/Heading/Heading';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import article from './data/article.json';
import stats from './data/stats.json';
import forbes from './data/forbes.json';
import transactions from './data/transactions.json';
import { formatDateToNow } from './helpers/formatDate';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard
          poster={article.poster}
          id={article._id}
          name={article.name}
          postedAt={formatDateToNow('2022-04-06T18:46:01.577Z')}
          avatar={article.avatar}
          description={article.description}
          title={article.title}
          tag={article.tag}
        />

        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" stats={stats} />

        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList forbes={forbes} />

        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory transactions={transactions} />
      </Container>
    </Section>
  );
};
