import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';
import { GetAllProductsResponse } from 'src/app/models/interfaces/products/response/getAllProductsResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataTransferService {
  // Quando uma propriedade retorna um observable colocamos o $ para identificar
  public productsDataEmitter$ = new BehaviorSubject<Array<GetAllProductsResponse> | null>(null)
  public productsDatas: Array<GetAllProductsResponse> = []

  setProductsDatas(products: Array<GetAllProductsResponse>): void {
    if (products) {
      this.productsDataEmitter$.next(products)
      this.getProductsDatas();
    }
  }

  getProductsDatas(): Array<GetAllProductsResponse> {
    this.productsDataEmitter$.pipe(
      take(1),
      map((data) => data?.filter((product) => product.amount > 0))
    )
      .subscribe({
        next: (response) => {
          if (response) {
            this.productsDatas = response
          }
        },
      })
    return this.productsDatas
  }
}
