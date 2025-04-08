import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonSearchbar, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { dice, search, wine } from 'ionicons/icons';
import { DrinksService } from 'src/app/api/drinks.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonSearchbar,
    IonButton,
    IonIcon,
    CommonModule,
    FormsModule
  ]
})
export class MainPage implements OnInit {
  public queryText: string = '';

  private drinksService = inject(DrinksService);

  constructor() { }

  public ngOnInit() {
    addIcons({ 
      wine,
      search,
      dice,
    });
    this.drinksService.getAll().subscribe(value => console.log(value))
  }

  public updateList(): void {
    if (this.queryText) {
      this.drinksService.search(this.queryText).subscribe(value => console.log(value))
    }
  }

  public getRandomDrink(): void {
    this.drinksService.getRandom().subscribe(value => console.log(value))
  }

}
