import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  score: number = 0;
  username: string;
  userResult: object;

  constructor(private http: HttpClient, private router: Router) {}
  
  getQuestions(): Observable<any> {
    return this.http.get("http://localhost:8080/questions");
  }

  getScores(): Observable<any> {
    return this.http.get("http://localhost:8080/scores");
  }

  postScores(score: number): Observable<any> {
    return this.http.post("http://localhost:8080/scores", score);
  }

  calculateScore(form: object, questions: any, username: string): any {
    this.username = username;

    for (let i = 0; i < questions.length; i++) {
      if (form[i] === questions[i].answer) {
        this.score++;
      }
    }
    console.log(this.score);
    this.router.navigate(["results"]);
    // return this.userResult
  }
}
