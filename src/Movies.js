import React, {useState} from 'react'
import { handshakeFiveMovies, moviesWatched, moviesWatching } from './movieList'

 function Movies() {


    const [handshakeReview, setHandshakeReview] = useState()
    const [watchedReview, setWatchedReview] = useState()
    const [watchingReview, setWatchingReview] = useState()
    


    function handleHandshakeReviewClick(e) {
        let selection = handshakeFiveMovies[e].review
        setHandshakeReview(selection)
        if (selection === handshakeReview) {
            setHandshakeReview()
        }
    }

    function handleWatchingReviewClick(e) {
        let selection = moviesWatching[e].review
        setWatchingReview(selection)
        if (selection === watchingReview) {
            setWatchingReview()
        }
    }

    function handleWatchedReviewClick(e) {
        let selection = moviesWatched[e].review
        setWatchedReview(selection)
        if (selection === watchedReview) {
            setWatchedReview()
        }
    }

        
    


    const handshakeId = handshakeFiveMovies.map((movie, index) => (
     
        <div className="movieHandshake"  key={movie.id}>
            <img src={movie.poster} alt="movie posters" className="movie" />
            <div className="word_box">
            <h4 className="title">{movie.title}</h4>
            <h4 className="star">{Array(movie.rating).fill(String.fromCharCode(10029))}</h4>
            { handshakeReview === movie.review ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => handleHandshakeReviewClick(index)}
                style={{display: movie.review === "" ? "none" : ""}}
                >arrow_drop_up_icon</i>
                <p className="review" style={{display:  movie.review ? "block" : "none"}}>{movie.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => handleHandshakeReviewClick(index)}
                 style={{display: movie.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>
            
        </div>
    ))
    const nowWatchingMovies = moviesWatching.map((movie, index) => (
        <div className="now_watching_movies"    key={movie.id}>
            <img src={movie.poster} alt="movie posters" className="movie" />
            <div className="word_box">
            <h4 className="title">{movie.title}</h4>
            <h4 className="star">{Array(movie.rating).fill(String.fromCharCode(10029))}</h4>
            { watchingReview === movie.review ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => handleWatchingReviewClick(index)} 
                style={{display: movie.review === "" ? "none" : ""}}>arrow_drop_up_icon</i>
                <p className="review" style={{display:  movie.review ? "block" : "none"}}>{movie.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => handleWatchingReviewClick(index)}
                 style={{display: movie.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>    
            
        </div>
    ))
    const recentlyWatchedMovies = moviesWatched.map((movie, index) => (
        <div className="recently_watched_movies"  key={movie.id}>
            <img src={movie.poster} alt="movie posters" className="movie" />
            <div className="word_box">
            <h4 className="title">{movie.title}</h4>
            <h4 className="star">{Array(movie.rating).fill(String.fromCharCode(10029))}</h4>
            { watchedReview === movie.review ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => handleWatchedReviewClick(index)} 
                style={{display: movie.review === "" ? "none" : ""}}>arrow_drop_up_icon</i>
                <p className="review" style={{display:  movie.review ? "block" : "none"}}>{movie.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => handleWatchedReviewClick(index)}
                 style={{display: movie.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>   
            
        </div>
    ))
    
    
    
    
    
    return (
        <div>
            <h1 className="section_title" id="movies">Movies</h1>
            <h2 className="sub_section_title">Handshake Five</h2>
            <div className="movies_handshake_flex">
            {handshakeId}
            </div>
            <h2 className="sub_section_title">Currently Watching
            </h2>
            <div className="currently_watching_flex">
            {nowWatchingMovies}
            </div>
            <h2 className="sub_section_title">Recently Watched</h2>
            <div className="recently_watched_flex">
            {recentlyWatchedMovies}
            </div>
        </div>
    )
}

export default Movies