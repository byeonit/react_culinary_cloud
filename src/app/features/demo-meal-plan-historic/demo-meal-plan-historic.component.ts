import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Calendar, Scale, Clock, ChevronLeft } from 'lucide-angular';

@Component({
  selector: 'app-demo-meal-plan-historic',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './demo-meal-plan-historic.component.html',
  styleUrls: ['./demo-meal-plan-historic.component.css']
})
export class DemoMealPlanHistoricComponent {
  readonly icons = { Calendar, Scale, Clock, ChevronLeft };
  selectedPlan: any = null;
  selectedDay: number = 1;
  demoMealPlanHistory = {
    mealPlanHistory: [
      {
        id: "12345",
        name: "Week 1 Meal Plan",
        dateCreated: "2025-01-09T10:00:00Z",
        summary: {
          protein: "150g",
          carbs: "200g",
          fats: "60g",
          calories: "2200"
        },
        days: [
          {
            day: 1,
            meals: {
              breakfast: {
                name: "Avocado Toast",
                calories: 350,
                ingredients: [
                  "Whole grain bread", 
                  "Avocado", 
                  "Salt", 
                  "Pepper"
                ],
                instructions: "Toast the bread, mash the avocado, and spread it on the toast. Add salt and pepper to taste."
              },
              lunch: {
                name: "Grilled Chicken Salad",
                calories: 450,
                ingredients: [
                  "Grilled chicken",
                  "Mixed greens",
                  "Tomatoes",
                  "Cucumber",
                  "Olive oil",
                  "Lemon juice"
                ],
                instructions: "Grill the chicken, chop the vegetables, and mix everything in a bowl. Drizzle with olive oil and lemon juice."
              },
              dinner: {
                name: "Quinoa and Vegetable Stir-fry",
                calories: 500,
                ingredients: [
                  "Quinoa",
                  "Bell peppers",
                  "Broccoli",
                  "Soy sauce",
                  "Garlic",
                  "Ginger"
                ],
                instructions: "Cook the quinoa. Stir-fry the vegetables with garlic and ginger, then mix with quinoa and soy sauce."
              },
              snacks: [
                {
                  name: "Apple Slices with Almond Butter",
                  calories: 200,
                  ingredients: ["Apple", "Almond butter"],
                  instructions: "Slice the apple and serve with almond butter for dipping."
                },
                {
                  name: "Carrot Sticks with Hummus",
                  calories: 150,
                  ingredients: ["Carrot sticks", "Hummus"],
                  instructions: "Serve carrot sticks with hummus on the side."
                }
              ]
            },
            totalDailyCalories: 1650,
            nutritionalBreakdown: {
              carbohydrates: "45%",
              proteins: "30%",
              fats: "25%"
            },
            healthBenefits: [
              "Supports weight loss through balanced meals",
              "Promotes muscle maintenance with sufficient protein",
              "Boosts energy levels with nutrient-rich foods"
            ]
          }
        ]
      }
    ]
  };

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  handleBack(): void {
    this.selectedPlan = null;
    this.selectedDay = 1;
  }

  setSelectedPlan(plan: any): void {
    this.selectedPlan = plan;
  }

  setSelectedDay(day: number): void {
    this.selectedDay = day;
  }

  getCurrentDayPlan(): any {
    return this.selectedPlan?.days.find((d: any) => d.day === this.selectedDay);
  }

  getMealEntries(meals: any): [string, any][] {
    return Object.entries(meals).filter(([type]) => type !== 'snacks');
  }
}