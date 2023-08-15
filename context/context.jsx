import { createContext, useState } from 'react';

export const TodoListContext = createContext();

export function TodoListProvider({ children }) {
  const [isPosted, setIsPosted] = useState(false);

  return (
    <TodoListContext.Provider value={{ isPosted, setIsPosted }}>
      {children}
    </TodoListContext.Provider>
  );
}
