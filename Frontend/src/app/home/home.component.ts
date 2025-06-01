import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';

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
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  features = [
    {
      title: 'Enterprise-Class',
      description:
        'Designed for enterprise-level applications with a professional UI design language.',
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
      title: 'Themes',
      description:
        'Customizable theme with CSS variables for easy style customization.',
    },
    {
      title: 'International',
      description:
        'Extensive internationalization support for dozens of languages.',
    },
    {
      title: 'Accessibility',
      description:
        'Follows WCAG standards to ensure accessibility for all users.',
    },
  ];
}
