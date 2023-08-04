import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizMakerApiService } from '../quiz-maker-api.service';
import { questionAnswers } from '../shared/quiz-maker-modal';

@Component({
  selector: 'app-quiz-maker-result',
  templateUrl: './quiz-maker-result.component.html',
  styleUrls: ['./quiz-maker-result.component.scss'],
})
export class QuizMakerResultComponent implements OnInit {
  public category: number = 0;
  public result: Array<questionAnswers> = [];
  public checkAnswer: boolean = false;
  public count: number = 0;

  constructor(
    private quizMakerApiService: QuizMakerApiService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.result = this.quizMakerApiService.getResultData();
    this.getScore();
  }
  getScore() {
    this.result.forEach((ele, indx, val) => {
      if (
        this.result[indx].selectedAnswer == this.result[indx].correct_answer
      ) {
        this.count++;
        this.checkAnswer = true;
      }
    });
  }
  newQuizClicked() {
    this.router.navigate(['/']);
  }
}
