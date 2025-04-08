import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { map, take } from 'rxjs';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonModal,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { dice, search, wine } from 'ionicons/icons';
import { DrinksService, IDrink } from 'src/app/api/drinks.service';
import { SharedCardComponent } from 'src/app/components/shared-card/shared-card.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonSearchbar,
    IonButton,
    IonButtons,
    IonIcon,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonItem,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonModal,
    RouterLink,
    SharedCardComponent,
    CommonModule,
    FormsModule,
  ],
})
export class MainPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

  public queryText: string = '';
  public randomDrink!: IDrink;
  public drinksList: WritableSignal<IDrink[]> = signal([]);

  private drinksService = inject(DrinksService);

  public ngOnInit() {
    addIcons({
      wine,
      search,
      dice,
    });
    this.drinksService
      .getAll()
      .pipe(
        map((response) => response.drinks),
        take(1)
      )
      .subscribe((drinks) => this.drinksList.set(drinks));
  }

  public updateList(): void {
    if (this.queryText) {
      this.drinksService
        .search(this.queryText)
        .pipe(
          map((response) => response.drinks),
          take(1)
        )
        .subscribe((drinks) => this.drinksList.set(drinks));
    }
  }

  public getRandomDrink(): void {
    this.drinksService
      .getRandom()
      .pipe(
        map((response) => response.drinks[0]),
        take(1)
      )
      .subscribe((drink) => (this.randomDrink = drink));
  }

  public closeModal(): void {
    this.modal.dismiss(null, 'confirm');
  }
}
