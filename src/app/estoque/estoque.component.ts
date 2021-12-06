import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProdutoComponent } from '../produto/produto.component';

export interface ProdutosData {
  id: number;
  name: string;
  capacidade: string;
  cor: string;
}

@Component({
  selector: 'estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  displayedColumns: string[] = ['id', 'name', 'capacidade', 'cor'];
  produtos= [{id: 1, name: 'iPhone 12 Pro Max', capacidade: '128gb', cor: 'gold'}, 
            {id: 2, name: 'iPhone 11 Pro Max', capacidade: '128gb', cor: 'gold'},
            {id: 3, name: 'Apple Watch Series 6', capacidade: '', cor: 'gold'}];
  dataSource: MatTableDataSource<ProdutosData>;

  

  constructor(public dialog: MatDialog) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.produtos);
   }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openNewProduct() {
    this.dialog.open(ProdutoComponent);
  }

  ngOnInit() {
  }

}
