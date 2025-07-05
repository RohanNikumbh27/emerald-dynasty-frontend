import { Component, HostListener } from '@angular/core';
import { PostForm } from '../../components/post-form/post-form';
import { PostList } from '../../components/post-list/post-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostList, PostForm],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  showForm = true;
  showFormOnDesktop = true;

  @HostListener('window:resize')
  onResize() {
    this.updateFormDisplay();
  }

  ngOnInit() {
    this.updateFormDisplay();
  }

  updateFormDisplay() {
    this.showFormOnDesktop = window.innerWidth > 700;
    this.showForm = this.showFormOnDesktop;
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
