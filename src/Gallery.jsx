import { useQuery } from "@tanstack/react-query";
import axiosFetch from "./fetchData";
import { useAppGlobalContext } from "./AppContext";

const Gallery = () => {
  const {searchVal} = useAppGlobalContext();
  console.log(searchVal);

  const {data, isLoading, isError} = useQuery({
    queryKey: ['unspphotos', searchVal],
    queryFn: async ()=>{
      const {data} = await axiosFetch.get(`/?query='${searchVal}'`);
      console.log(data.results);
      return data.results;
    }
  });
  
  if(isLoading){
    return (
      <section className="image-container">
          <h3>Loading data.. please wait!</h3>
      </section>
    )
  }

  return (
      <section className="image-container">
          {
            data.map((img)=>{
              const {urls} = img;
              return <img src={urls.regular} key={img.id} className="img"></img>
            })
          }
      </section>
  );
}
export default Gallery;