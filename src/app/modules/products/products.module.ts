// Angular Imports
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

// PrimeNg Imports
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { SharedModule } from "src/app/shared/shared.module";
import { TableModule } from 'primeng/table'
import { InputMaskModule } from 'primeng/inputmask'
import { InputSwitchModule } from 'primeng/inputswitch'
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputNumberModule } from "primeng/inputnumber";
import { DialogService, DynamicDialogModule } from "primeng/dynamicdialog";
import { DropdownModule } from "primeng/dropdown";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { TooltipModule } from "primeng/tooltip";
import { ConfirmationService } from "primeng/api";

import { ProductsHomeComponent } from './page/products-home/products-home.component';
import { PRODUCTS_ROUTES } from "./products.routing";
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductFormComponent } from "./components/product-form/product-form.component";

@NgModule({
    declarations: [
    ProductsHomeComponent,
    ProductsTableComponent,
    ProductFormComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(PRODUCTS_ROUTES),
        SharedModule,
        HttpClientModule,
        // PrimeNg
        CardModule,
        ButtonModule,
        TableModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        InputNumberModule,
        DynamicDialogModule,
        DropdownModule,
        ConfirmDialogModule,
        TooltipModule
    ],
    providers: [DialogService, ConfirmationService]
})

export class ProductsModule { }