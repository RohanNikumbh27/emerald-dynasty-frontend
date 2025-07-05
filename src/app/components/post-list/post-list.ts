import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './post-list.html',
  styleUrl: './post-list.scss',
})
export class PostList {
  posts = [
    { author: 'alice', date: new Date(), content: 'Hello EmeraldDynasty!' },
    { author: 'bob', date: new Date(), content: 'This is a sample post.' },
  ];
}
