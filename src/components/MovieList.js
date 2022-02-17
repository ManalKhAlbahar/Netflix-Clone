import Movie from './Movie'
export default function MovieList(props){
    console.log(2222,props.movies);
    return (
        <div className='divid'>
         {
               props.movies.map(value => {
                return( <>
                  <Movie  data = {value} UpdateMovies={props.UpdateMovies}/>

                </>
                )
            
         })
         }   
        
        </div>
    )
}