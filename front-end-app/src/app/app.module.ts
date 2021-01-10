import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//service
import { FoodService } from './food.service';
import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewFormComponent } from './new-form/new-form.component';


const appRoutes: Routes = [
  //loads page one as the home page
  { path: '', component: PageOneComponent },

  //second page
  { path: 'page-two', component: PageTwoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    NewFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],  providers: [
        FoodService
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
