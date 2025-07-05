import { Component } from '@angular/core';
import { PostList } from '../../components/post-list/post-list';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [PostList],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {}
