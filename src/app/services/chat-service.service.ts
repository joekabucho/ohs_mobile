import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PusherServiceService } from './../services/pusher-service.service';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  private _url = 'http://13.59.82.69:5000';
  private _channel : any;
  constructor(public http: HttpClient, private _pusher : PusherServiceService) {
    this._channel = this._pusher.getPusher().subscribe('chat-bot');  
  }


  sendMessage( message : string) : Observable<any>{
    const param = {
      type: 'human',
      message,
    };
    return this.http.post(`${this._url}/message`, param)
  }
  getChannel(){
    return this._channel;
  }
}