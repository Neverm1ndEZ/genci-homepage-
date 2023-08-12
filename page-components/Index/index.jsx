import Leaderboard from '@/components/Leaderboard/Leaderboard';
import Cards from '../../components/Cards/Cards';
import Hero from './Hero';
import TodoList from '@/components/Todolist/Todolist';
import Streakboard from '@/components/Streakboard/Streakboard';

export const Index = () => {
  return (
    <div className="">
      <Hero />
      <Cards />
      <TodoList />
      <Streakboard />
      <Leaderboard />
    </div>
  );
};
