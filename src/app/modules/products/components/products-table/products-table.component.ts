import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GetAllProductsResponse } from '../../../../models/interfaces/products/response/getAllProductsResponse';
import { ProductEvent } from '../../../../models/enums/products/ProductEvent';
import { EventAction } from 'src/app/models/interfaces/products/event/EventAction';
import { DeleteProductAction } from 'src/app/models/interfaces/products/event/DeleteProductAction';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: []
})
export class ProductsTableComponent {
  @Input() products: Array<GetAllProductsResponse> = []
  @Output() productEvent = new EventEmitter<EventAction>()
  @Output() deleteProductEvent = new EventEmitter<DeleteProductAction>()

  public productSelected!: GetAllProductsResponse
  public addProductEvent = ProductEvent.ADD_PRODUCT_EVENT
  public editProductEvent = ProductEvent.EDIT_PRODUCT_EVENT

  handleProductEvent(action: string, id?: string): void {
    if (action && action !== '') {
      const productEventData = id && id !== '' ? { action, id } : { action }
      // EMITIR O VALOR O EVENTO
      this.productEvent.emit(productEventData)
    }
  }

  handleDeleteProduct(product_id: string, productName: string): void {
    if(product_id !== '' && productName !== '')
    {
      //EMITIR O EVENTO PARA O COMPONENTE PAI
      this.deleteProductEvent.emit({
        product_id,
        productName,
      })
    }
  }
}
