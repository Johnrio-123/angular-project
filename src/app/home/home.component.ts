import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, MatIconModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  landingPageGrid = [
    {
      label: 'Furniture',
      backgroundUrl:
        'https://plus.unsplash.com/premium_photo-1670076513880-f58e3c377903?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'home',
    },
    {
      label: 'Decoration',
      backgroundUrl:
        'https://media.istockphoto.com/id/1432543179/photo/light-kitchen-interior-with-bar-countertop-and-seats-shelves-and-panoramic-window.jpg?s=2048x2048&w=is&k=20&c=R7zX907wNnC7uhOKsvvp0RJBvUYGOBngLn5ZyIHvAXg=',
      link: 'home',
    },
    {
      label: 'Posters',
      backgroundUrl:
        'https://plus.unsplash.com/premium_photo-1661780042612-aebf87ce09ce?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'home',
    },
  ];

  homeProducts = [
    {
      name: 'Wooden Coffee Table',
      rating: 4.5,
      price: 2999,
      imageUrl: 'https://plus.unsplash.com/premium_photo-1680098058374-e580a9dbaeef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Luxury Sofa Set',
      rating: 4.8,
      price: 18999,
      imageUrl: 'https://plus.unsplash.com/premium_photo-1673548917477-4c0c8889b439?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'King Size Bed Frame',
      rating: 4.6,
      price: 15999,
      imageUrl: 'https://images.unsplash.com/photo-1714138083505-fc47d575e3b1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'LED Floor Lamp',
      rating: 4.2,
      price: 799,
      imageUrl: 'https://plus.unsplash.com/premium_photo-1724094573989-43740dbd88f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Wooden Chair',
      rating: 4.3,
      price: 1299,
      imageUrl: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  getFullStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  hasHalfStar(rating: number): boolean {
    return rating % 1 >= 0.5;
  }
  
}
