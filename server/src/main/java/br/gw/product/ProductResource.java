package br.gw.product;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.SecurityContext;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;

@Path("/product")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Tag(name = "Product")
public class ProductResource {

    private ProductService service;

    public ProductResource(ProductService productService) {
        this.service = productService;
    }

    @GET
    @Path("/page/{page}/{size}")
    public Response pageSort(@PathParam("page") int page, @PathParam("size") int size){
        return service.pageSort(page,size);
    }

}
