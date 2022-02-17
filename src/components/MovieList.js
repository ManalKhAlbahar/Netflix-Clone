
import Movie from './Movie';



export default function MovieList(props) {
    console.log(props);
    return (
        <>
         {
               props.movies.map(value => {
                return( <>
                  <Movie data = {value}/>

                </>
                )
            
         })
         }   
        
        </>
    )
}