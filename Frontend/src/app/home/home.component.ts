import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCarouselAutoplayComponent } from '../components/carousel.component';
import { NzSplitterComplexComponent } from '../components/collapsible.component';
import { NzDemoFormNormalLoginComponent } from '../components/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzButtonModule,
    NzDividerModule,
    NzGridModule,
    NzCarouselAutoplayComponent,
    NzSplitterComplexComponent,
    NzDemoFormNormalLoginComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  features = [
    {
      title: 'TypeScript',
      description: 'Written in TypeScript with predictable static types.',
    },
    {
      title: 'Powerful Components',
      description: 'Rich set of high-quality components out of the box.',
    },
    {
      title: 'TypeScript',
      description: 'Written in TypeScript with predictable static types.',
    },
    {
      title: 'TypeScript',
      description: 'Written in TypeScript with predictable static types.',
    },
    {
      title: 'TypeScript',
      description: 'Written in TypeScript with predictable static types.',
    },
    {
      title: 'TypeScript',
      description: 'Written in TypeScript with predictable static types.',
    },
  ];
}
