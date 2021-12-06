import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { MaterialModule } from './material/material.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProdutoComponent } from './produto/produto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VendaComponent } from './venda/venda.component';


@NgModule({
  declarations: [							
    AppComponent,
    HomeComponent,
    NavbarComponent,
    EstoqueComponent,
    ProdutoComponent,
    ClienteComponent,
    VendaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatTooltipModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
