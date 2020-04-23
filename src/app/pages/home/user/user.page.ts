import { Component, OnInit } from '@angular/core';
import { PropertyProxy } from '../../../models/proxies/property.proxy';
import { SwipeEvent } from 'ng-swipe';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: [ './user.page.scss' ],
})
export class UserPage implements OnInit {

  /**
   * Lista de propriedades
   */
  public listProperty: PropertyProxy[] = [
    {
      street: 'Almeida dos passaros',
      township: 'Vila Rica',
      city: 'Salto',
      description: 'Ótimo local para dormir e estar perto da faculdade',
      university: 'FACENS',
      rooms: 2,
      pricePerUser: 500,
      isFull: false,
      userId: 0,
      imageUrl: './assets/imgs/room_image.jpg',
    },
    {
      street: 'Almeida dos passaros2',
      township: 'Vila Rica',
      city: 'Salto',
      description: 'Ótimo local para dormir e estar perto da faculdade',
      university: 'FACENS',
      rooms: 2,
      pricePerUser: 500,
      isFull: false,
      userId: 0,
      imageUrl: './assets/imgs/room_image.jpg',
    },
    {
      street: 'Almeida dos passaros3',
      township: 'Vila Rica',
      city: 'Salto',
      description: 'Ótimo local para dormir e estar perto da faculdade',
      university: 'FACENS',
      rooms: 2,
      pricePerUser: 500,
      isFull: false,
      userId: 0,
      imageUrl: './assets/imgs/room_image.jpg',
    },
  ];

  /**
   * Variável que guarda a faculdade a ser pesquisada
   */
  public searchUniversity: string = '';

  /**
   * Variável que calcula o valor do swipe feito
   */
  public startSwipeValue: number = 0;

  constructor(
      private readonly navController: NavController,
  ) {
  }

  ngOnInit() {
  }

  public updateUniversity(): void {
    console.log(this.searchUniversity);
  }

  /**
   * A função que controla o começo do swipe
   */
  public onSwipeMove(event: SwipeEvent) {
    console.log(`swipe direction: ${ event.direction }`);
    console.log(`swipe distance: ${ event.distance }`);
    if (this.startSwipeValue === 0) {
      this.startSwipeValue = event.distance;
    }
  }

  /**
   * Função que controla o final do swipe e se deve executar uma ação
   */
  public onSwipeEnd(event: SwipeEvent) {
    console.log(`swipe direction end: ${ event.direction }`);
    console.log(`swipe distance end: ${ event.distance }`);

    if (event.distance - this.startSwipeValue > 30 && event.direction === 'x') {
      console.log('left page');
      this.navController.navigateForward('/home/owner');
    }
  }
}
