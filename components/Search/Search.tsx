'use client';

import { getPostsBySearch } from '@/services/getPosts';
import { FormEventHandler, ChangeEventHandler, useState } from 'react';

type Props = {
  onSearch: (value: any[]) => void;
};

function Search({ onSearch }: Props) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmitSearch: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const posts = await getPostsBySearch(searchQuery);

    onSearch(posts);
  };

  const handleSearchInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmitSearch}>
      <input
        type="search"
        placeholder="введите текст запроса..."
        value={searchQuery}
        onChange={handleSearchInput}
      />
      <button type="submit">Поиск</button>
    </form>
  );
}

export { Search };
