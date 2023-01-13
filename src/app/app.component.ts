import { Component } from '@angular/core';
import axios from 'axios';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-restaurant';
  restaurants: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    let auth_token = '2f3cb4a2f0d44749cfa13d99a40c34788f846f63f57b338bd768236527be2742d940b89c2194ad01814edd9172e18b975d47f6383eb53b5fb702d870a07af95a8a67bd9f55b93b98f59aa6c9a5854097664e7c6b5200d61ed164c59dae2abc976b98d04ac5fa5f40c364f9c5375e72b7430b4e5482e037fbdf569a388c6fb0f5';
    const config = {
      headers: { Authorization: `Bearer ${auth_token}` }
  };


  // ? GET the list of restaurants
    axios.get('http://localhost:1337/api/restaurants?populate=*', config).then(res => {
      // ? push data to restaurants array
        this.restaurants = res.data.data;
        console.log(this.restaurants);
    }).catch(err => {
            console.error(err);
    })
  }
}
