import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Calendar, Scale, Clock, ChevronLeft, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-demo-meal-plan',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './demo-meal-plan.component.html',
  styleUrls: ['./demo-meal-plan.component.css']
})
export class DemoMealPlanComponent {
  readonly icons = { Calendar, Scale, Clock, ChevronLeft, ChevronRight };
  activeDay = 1;
  demoMealPlan = {
    "id": "12345",
    "bmi": 24.5,
    "physicalGoals": "Weight Loss",
    "activityLevels": "Moderately active",
    "listOfDiets": ["Gluten-Free", "Dairy-Free"],
    "createdByUserName": "JohnDoe",
    "createdByUserID": "user_001",
    "createdAt": "2025-01-09T10:00:00Z",
    "updatedAt": "2025-01-09T12:00:00Z",
    "updatedBy": "JohnDoe",
    "isRecipeGenerated": true,
    "flag": false,
    "mealPlan": [
      {
        "day": 1,
        "meals": {
          "breakfast": {
            "name": "Avocado Toast",
            "calories": 350,
            "ingredients": ["Whole grain bread", "Avocado", "Salt", "Pepper"],
            "instructions": "Toast the bread, mash the avocado, and spread it on the toast. Add salt and pepper to taste."
          },
          "lunch": {
            "name": "Grilled Chicken Salad",
            "calories": 450,
            "ingredients": ["Grilled chicken", "Mixed greens", "Tomatoes", "Cucumber", "Olive oil", "Lemon juice"],
            "instructions": "Grill the chicken, chop the vegetables, and mix everything in a bowl. Drizzle with olive oil and lemon juice."
          },
          "dinner": {
            "name": "Quinoa and Vegetable Stir-fry",
            "calories": 500,
            "ingredients": ["Quinoa", "Bell peppers", "Broccoli", "Soy sauce", "Garlic", "Ginger"],
            "instructions": "Cook the quinoa. Stir-fry the vegetables with garlic and ginger, then mix with quinoa and soy sauce."
          },
          "snacks": [
            {
              "name": "Apple Slices with Almond Butter",
              "calories": 200,
              "ingredients": ["Apple", "Almond butter"],
              "instructions": "Slice the apple and serve with almond butter for dipping."
            },
            {
              "name": "Carrot Sticks with Hummus",
              "calories": 150,
              "ingredients": ["Carrot sticks", "Hummus"],
              "instructions": "Serve carrot sticks with hummus on the side."
            }
          ]
        },
        "totalDailyCalories": 1650,
        "nutritionalBreakdown": {
          "carbohydrates": "45%",
          "proteins": "30%",
          "fats": "25%"
        },
        "healthBenefits": [
          "Supports weight loss through balanced meals",
          "Promotes muscle maintenance with sufficient protein",
          "Boosts energy levels with nutrient-rich foods"
        ]
      },
      {
        "day": 2,
        "meals": {
          "breakfast": {
            "name": "Oatmeal with Berries",
            "calories": 300,
            "ingredients": ["Oats", "Almond milk", "Berries", "Honey"],
            "instructions": "Cook the oats with almond milk. Top with berries and honey."
          },
          "lunch": {
            "name": "Turkey Wrap",
            "calories": 400,
            "ingredients": ["Whole wheat wrap", "Turkey slices", "Lettuce", "Tomato", "Mustard"],
            "instructions": "Assemble the wrap with turkey, lettuce, tomato, and mustard."
          },
          "dinner": {
            "name": "Baked Salmon with Asparagus",
            "calories": 550,
            "ingredients": ["Salmon fillet", "Asparagus", "Olive oil", "Lemon"],
            "instructions": "Bake the salmon with asparagus, drizzle with olive oil and lemon."
          },
          "snacks": [
            {
              "name": "Greek Yogurt with Nuts",
              "calories": 180,
              "ingredients": ["Greek yogurt", "Mixed nuts"],
              "instructions": "Top Greek yogurt with mixed nuts."
            },
            {
              "name": "Celery Sticks with Peanut Butter",
              "calories": 150,
              "ingredients": ["Celery sticks", "Peanut butter"],
              "instructions": "Serve celery sticks with peanut butter."
            }
          ]
        },
        "totalDailyCalories": 1580,
        "nutritionalBreakdown": {
          "carbohydrates": "40%",
          "proteins": "35%",
          "fats": "25%"
        },
        "healthBenefits": [
          "Enhances digestion with fiber-rich foods",
          "Provides essential Omega-3 fatty acids",
          "Stabilizes blood sugar with balanced macros"
        ]
      },
      {
        "day": 3,
        "meals": {
          "breakfast": {
            "name": "Smoothie Bowl",
            "calories": 320,
            "ingredients": ["Frozen banana", "Spinach", "Almond milk", "Chia seeds"],
            "instructions": "Blend ingredients and serve in a bowl."
          },
          "lunch": {
            "name": "Vegetable Soup",
            "calories": 400,
            "ingredients": ["Vegetable broth", "Carrots", "Celery", "Onions", "Garlic"],
            "instructions": "Simmer vegetables in broth until tender."
          },
          "dinner": {
            "name": "Chicken and Sweet Potato",
            "calories": 520,
            "ingredients": ["Chicken breast", "Sweet potato", "Olive oil", "Rosemary"],
            "instructions": "Roast chicken and sweet potato with olive oil and rosemary."
          },
          "snacks": [
            {
              "name": "Fruit Salad",
              "calories": 180,
              "ingredients": ["Mixed fruits", "Mint"],
              "instructions": "Chop fruits and garnish with mint."
            },
            {
              "name": "Trail Mix",
              "calories": 200,
              "ingredients": ["Mixed nuts", "Dried fruits"],
              "instructions": "Combine mixed nuts and dried fruits."
            }
          ]
        },
        "totalDailyCalories": 1620,
        "nutritionalBreakdown": {
          "carbohydrates": "50%",
          "proteins": "25%",
          "fats": "25%"
        },
        "healthBenefits": [
          "Improves immunity with antioxidants",
          "Supports lean muscle development",
          "Boosts metabolism with nutrient-dense meals"
        ]
      }
    ]
  };

  get currentDayPlan() {
    return this.demoMealPlan.mealPlan.find(day => day.day === this.activeDay);
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  setActiveDay(day: number): void {
    this.activeDay = day;
  }

  getMealEntries(meals: any): [string, any][] {
    return Object.entries(meals).filter(([type]) => type !== 'snacks');
  }
}