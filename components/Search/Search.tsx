'use client';
import {
  FormEventHandler,
  ChangeEventHandler,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { Audio } from 'react-loader-spinner';
import { getPostsBySearch } from '@/services/getPosts';
import { useAppDispatch } from '@/services/reduxHooks';
import { setPosts } from '@/redux/slices/postsSlice';
import { useDebounce } from '@/services/useDebounce';
import s from './search.module.css';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const debounceSearchQuery = useDebounce(searchQuery, 500);

  const dispatch = useAppDispatch();

  const handleDebounceRequest = useCallback(async () => {
    if (debounceSearchQuery.length > 2) {
      setIsLoading(true);
      const posts = await getPostsBySearch(debounceSearchQuery);

      dispatch(setPosts(posts));
      setIsLoading(false);
    }
  }, [dispatch, debounceSearchQuery]);

  useEffect(() => {
    handleDebounceRequest();
  }, [debounceSearchQuery, handleDebounceRequest]);

  const handleSubmitSearch: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    setIsLoading(true);
    const posts = await getPostsBySearch(searchQuery);

    dispatch(setPosts(posts));
    setIsLoading(false);
  };

  const handleSearchInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmitSearch} className={s.searchForm}>
      <input
        type="search"
        placeholder="введите текст запроса..."
        value={searchQuery}
        onChange={handleSearchInput}
      />
      <button type="submit" className="actionButton">
        {!!isLoading ? (
          <Audio
            height="15"
            width="37"
            color="#fff"
            ariaLabel="audio-loading"
            visible={true}
          />
        ) : (
          'Поиск'
        )}
      </button>
    </form>
  );
}

export { Search };
