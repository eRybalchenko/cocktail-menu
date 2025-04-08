import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { map, take } from 'rxjs';
import { DrinksService, IDrink } from 'src/app/api/drinks.service';
import { ActivatedRoute } from '@angular/router';
import { SharedCardComponent } from 'src/app/components/shared-card/shared-card.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    SharedCardComponent,
    CommonModule,
    FormsModule,
  ],
})
export class DetailsPage implements OnInit {
  public drinkDetails: IDrink | undefined;

  private readonly route = inject(ActivatedRoute);
  private coctailsService = inject(DrinksService);

  public ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.coctailsService
      .getById(id)
      .pipe(
        map((response) => response.drinks[0]),
        take(1)
      )
      .subscribe((drink) => (this.drinkDetails = drink));
  }
}
