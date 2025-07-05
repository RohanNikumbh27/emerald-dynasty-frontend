import { Component } from '@angular/core';
import { MessageForm } from '../../components/message-form/message-form';
import { MessageList } from '../../components/message-list/message-list';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [MessageList, MessageForm],
  templateUrl: './messages.html',
  styleUrl: './messages.scss',
})
export class Messages {}
