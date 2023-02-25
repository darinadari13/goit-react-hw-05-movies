import { useSearchParams } from 'react-router-dom';


export default function SearchForm() {
  const [, setSearchParams] = useSearchParams();
 

  const onSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value.toLowerCase().trim();
    if (!query) return;
    setSearchParams({ search: query });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          
          type="text"
          placeholder="Enter name of movie"
          name="query"
        />
        <button type="submit">
          Search
        </button>
      </form>
    </div>
  );
}