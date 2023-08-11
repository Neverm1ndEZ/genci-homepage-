import Cards from '../../components/Cards/Cards';
import Hero from './Hero';

import TodoList from '@/components/Todolist/Todolist';

export const Index = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <TodoList />
    </div>
  );
};
