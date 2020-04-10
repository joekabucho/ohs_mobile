import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from './../../services/chat-service.service';
import { ChatModel } from './../../models/chat-model';




@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],
})
export class ChatbotPage implements OnInit {
  chats : ChatModel[] = [];
  message : string;
  sending : boolean;

  constructor( private _chat : ChatServiceService) { }

  ngOnInit() {
    this.ionViewDidLoad();
  }
  ionViewDidLoad() {
    // subscribe to pusher's event
    this._chat.getChannel().bind('chat', data => {
     if(data.type !== 'bot'){
       data.isMe = true;
     };
     this.chats.push(data);
   });
 }
 sendMessage() {
   this.sending = true;
   this._chat.sendMessage(this.message)
     .subscribe(resp => {
       this.message = '';
       this.sending = false;
     }, err => {
       this.sending = false;
     } );
 }

}
