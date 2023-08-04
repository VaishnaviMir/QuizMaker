import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuizMakerCategoryComponent } from './quiz-maker-category.component';
import { QuizMakerResultComponent } from '../quiz-maker-result/quiz-maker-result.component';
import { QuizMakerCategoryRoutingModule } from './quiz-maker-category-routing.module';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    DropdownModule,
    CardModule,
    AccordionModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    QuizMakerCategoryRoutingModule,
  ],
  declarations: [QuizMakerCategoryComponent, QuizMakerResultComponent],
})
export class QuizMakerCategoryAppModule {}
