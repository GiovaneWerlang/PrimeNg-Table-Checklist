package br.gw.product;

import br.gw.crud.CrudRepository;
import jakarta.enterprise.context.RequestScoped;

@RequestScoped
public class ProductRepository extends CrudRepository<Product> {
}
