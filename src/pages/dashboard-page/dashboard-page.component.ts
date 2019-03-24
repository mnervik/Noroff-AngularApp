import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../services/apis.service';
import 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  providers: [ApiService]
})
export class DashboardPageComponent implements OnInit {

  public randomDog; randomFox; randomShibe; catCode;

  constructor(protected router: Router, protected apiService: ApiService) {
  }

  ngOnInit() {
    if (!sessionStorage.getItem('AuthToken')) {
      this.router.navigate(['/']);
    }

    this.apiService.getRandomDog().subscribe(data => {
      // @ts-ignore
      this.randomDog = data.message;
    });

    this.apiService.getRandomFox().subscribe(data=>{
      // @ts-ignore
      this.randomFox = data.image;
    });

    this.apiService.getRandomShibe().subscribe(data=>{
      // @ts-ignore
      this.randomShibe = data[0];
    });

    /* This api does not require json */
    this.catCode = this.apiService.getCatCode();
  }
}
