```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Scale, ChevronLeft, ChevronRight, Info } from 'lucide-angular';

@Component({
  selector: 'app-demo-macro-plan',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './demo-macro-plan.component.html',
  styleUrls: ['./demo-macro-plan.component.css']
})
export class DemoMacroPlanComponent implements OnInit {
  readonly icons = { Scale, ChevronLeft, ChevronRight, Info };
  activeDay: string = "Day 1";
  currentPage: number = 1;
  readonly recipesPerPage: number = 3;
  dummyMacroPlan = // Your dummy data here

  get currentDayPlan() {
    return this.dummyMacroPlan[this.activeDay];
  }

  get totalPages() {
    return Math.ceil((this.currentDayPlan?.Meals.length || 0) / this.recipesPerPage);
  }

  get currentMeals() {
    const startIndex = (this.currentPage - 1) * this.recipesPerPage;
    const endIndex = startIndex + this.recipesPerPage;
    return this.currentDayPlan?.Meals.slice(startIndex, endIndex) || [];
  }

  setActiveDay(day: string) {
    this.activeDay = day;
    this.currentPage = 1;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  ngOnInit() {}
}
```