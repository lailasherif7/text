import TabPanel from '@restart/ui/esm/TabPanel';
import React, { Component } from 'react';
import { getMovies } from '../services/fakeMoviesServies';

class Movies extends Component {
    state = {
        movies: getMovies()
    };
    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m.id !== movie.id);
        this.setstate({ movies });
    };
    
    render()
    {
        if (this.state.movies.length === 0) return <p> There are no movies in the database</p>;
        return
        <table className="table">
            <thead>
                <tr>
                    <th> title</th>
                    <th> genre</th>
                    <th> stock</th>
                    <th> rate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tbody>
                    {this.state.movies.map(movies => (
                        <tr> key={movie._id}
                        <td> {movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                         <button
                            onClick={() => this.handleDelete(movies)}
                            className=".btn.btn-danger.btn-sm">
                            Delete </button>
                        </td> 

                    </tr>
                    ))}
                
               </tbody>
          </tbody>
        </table>
    };

}
 
export default Movies ;