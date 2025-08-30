import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environment.development";
import { Observable, catchError, throwError } from "rxjs";
import { Product } from "../model/product";

@Injectable()
export class ProductService {

    private API_URL = environment.apiUrl;
    private T_URL: string = 'product';

    constructor(protected http: HttpClient) {
    }

    getUrl() {
        return this.T_URL;
    }

    getApiUrl() {
        return this.API_URL;
    }

    page(page: number, size: number): Observable<any[]> {

        return this.http.get<Product[]>(`${this.API_URL}${this.T_URL}/page/${page}/${size}`).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        return throwError(() => new Error(`${error.status} - ${error.status === 0 ? 'Sem conexão' : error.statusText} `));
    }
}