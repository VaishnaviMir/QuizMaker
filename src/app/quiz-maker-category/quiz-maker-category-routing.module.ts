import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizMakerResultComponent } from '../quiz-maker-result/quiz-maker-result.component';
import { QuizMakerCategoryComponent } from './quiz-maker-category.component';

const routes: Routes = [
  {
    path: '',
    component: QuizMakerCategoryComponent,
  },
  { path: 'results', component: QuizMakerResultComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizMakerCategoryRoutingModule {}
