import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './message-list.html',
  styleUrl: './message-list.scss',
})
export class MessageList {
  messages = [
    { from: 'alice', date: new Date(), content: 'Hey there!' },
    { from: 'bob', date: new Date(), content: 'Hello! How are you?' },
  ];
}
