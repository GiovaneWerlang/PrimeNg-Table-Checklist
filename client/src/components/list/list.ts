import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBar } from 'primeng/progressbar';
import { Slider } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { Tag } from 'primeng/tag';
import { Product } from '../model/product';
import { ProductService } from '../service/productservice.service';
import { PaginatorModule } from 'primeng/paginator';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-list',
  imports: [TableModule, ButtonModule, HttpClientModule, CommonModule,
    CommonModule, MultiSelectModule, InputTextModule, PaginatorModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
  providers: [ProductService,MessageService]
})
export class List implements OnInit {
  products!: Product[];
  selectedProducts!: Product[];
  loading: boolean = true;
  pages: number = 0;
  total: number = 0;

  first = 0;
  rows = 10;

  constructor(private productService: ProductService, private messageService: MessageService) { }

  ngOnInit() {
    this.loadPage(this.first, this.rows);
  }

  onPageChange(event: any) {
    console.log(event)
    this.loadPage(event.page, event.rows);
  }

  loadPage(page: number, rows: number) {
    this.loading = true;
    this.productService.page(page, rows).subscribe((products: any) => {
      this.products = products?.lista;
      this.pages = products?.pages;
      this.total = products?.total;
      this.loading = false;
    });
  }

  onRowSelect(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name });
    }

    onRowUnselect(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Product Unselected', detail: event.data.name });
    }
}
