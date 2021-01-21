import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { ProfileComponent } from "./components/profile/profile.component";

export const routes: Routes = [
    {path: '', component: LoginComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'profile', component: ProfileComponent },
  ];