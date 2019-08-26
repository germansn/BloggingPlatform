import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable()
export class PostService {

  constructor( private http : HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(
      'http://localhost:44367/api/Posts',
      { observe : 'response'} 
    )//.pipe( catchError( this.handleError ))
  }

  handleError( error : HttpErrorResponse) {

    if(error.error instanceof ErrorEvent) {
      console.log('Error FrontEnd', error.error.message);
    }
    else {
      console.log('Error BackEnd', error.status, error.message);
    }

    return throwError('Falló Http GET!!!');
  }

  postUsuario(post : Post) {
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    return this.http.post<Post>(
      'https://5c8ef17a3e557700145e85c7.mockapi.io/usuarios',
      post,
      httpOptions
    );
  }

  deletePost(id : number) {
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    return this.http.delete<Post>(
      'https://5c8ef17a3e557700145e85c7.mockapi.io/usuarios/' + id,
      httpOptions
    );
  }

  putPost(usuario : Post, id : number ) {
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    return this.http.put<Post>(
      'https://5c8ef17a3e557700145e85c7.mockapi.io/usuarios/' + id,
      usuario,
      httpOptions
    );
  }

}
