package br.gw.product;

import br.gw.utils.PageDTO;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.core.Response;

import java.util.List;
import java.util.Objects;

@RequestScoped
public class ProductService {

    private ProductRepository repository;

    @Inject
    public ProductService(ProductRepository productRepository) {
        this.repository = productRepository;
    }

    public Response pageSort(int page, int size){
        if(page < 0 || size < 1){
            return Response.status(422).build();
        }
        List<Product> lista = repository.pageList(page,size);
        if(Objects.isNull(lista)){
            return Response.noContent().build();
        }
        PageDTO<Product> pageDTO = new PageDTO<>();
        pageDTO.setLista(lista);
        pageDTO.setPages(repository.pageCount(page,size));
        pageDTO.setTotal(repository.pageTotal(page,size));
        return Response.ok(pageDTO).build();
    }

}
