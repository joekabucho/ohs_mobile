import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const Pusher: any;

@Injectable({
  providedIn: 'root'
})
export class PusherServiceService {

  public _pusher : any;
  constructor(public http: HttpClient) {
    this._pusher = new Pusher("f6eb63f7f95a02f87d40", {
      cluster: "ap2",
      encrypted: true
    });
  }

  getPusher(){
    return this._pusher;
  }
}
