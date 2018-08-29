import { Component } from '@angular/core';
import { ItemMenu } from '../../models/item-menu.model';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})

export class AppHeaderComponent {
  items: Array<ItemMenu> = [
    new ItemMenu('Зарегистрированные товарные знаки на территории РФ', '', true),
    new ItemMenu('Зарегистрированные товарные знаки за пределами РФ', '' ),
    new ItemMenu('Зарегистрированные промышленные образцы на территории РФ', '' ),
    new ItemMenu('Зарегистрированные промышленные образцы за пределами РФ', '' ),
    new ItemMenu('Поданные заявки на территории РФ', '' ),
    new ItemMenu('Поданные заявки за пределами РФ', '' ),
    new ItemMenu('Поданные заявки на патенты на территории РФ', '' ),
    new ItemMenu('Поданные заявки на патенты за пределами РФ', '' ),
    new ItemMenu('Результаты проверки', '' ),
    new ItemMenu('Отдельный поиск', '' )
  ];
}