import { useQueryClient } from "@tanstack/react-query";
import { useAppGlobalContext } from "./AppContext";

const SearchForm = () => {
  const {searchVal, setSearchVal} = useAppGlobalContext();
  const queryClient = useQueryClient();
  console.log(`Search value = ${searchVal}`);

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={(e)=> handleSubmit(e)}>
        <input type="text" name='search' placeholder='cat' className='form-input search-input' value={searchVal} onChange={(e)=> {
          const inputVal = e.target.value;
          setSearchVal(inputVal);
          // queryClient.invalidateQueries({queryKey: ['unspphotos']});
          }
          }/>
        <button type="submit" className="btn">search</button>
      </form>
    </section>
  )
}
export default SearchForm