import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { DrinksService } from 'src/app/api/drinks.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetailsPage implements OnInit {
  @Input() private id: string = '11007';

  public drinkDetails$!: Observable<any>;

  private coctailsService = inject(DrinksService);

  ngOnInit() {
    this.drinkDetails$ = this.coctailsService.getById(this.id);
  }

}
