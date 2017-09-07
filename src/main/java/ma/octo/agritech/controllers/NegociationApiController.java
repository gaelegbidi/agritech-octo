package ma.octo.agritech.controllers;

import ma.octo.agritech.Requests.StoreNegociationRequest;
import ma.octo.agritech.domains.Negociation;
import ma.octo.agritech.services.NegociationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/negociations")
public class NegociationApiController {

    @Autowired
    private NegociationService negociationService;

    @PostMapping( consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = {MediaType.APPLICATION_JSON_UTF8_VALUE})
    public Negociation store(@RequestBody StoreNegociationRequest storeNegociationRequest ) {
        return this.negociationService.saveByStoreRequest(storeNegociationRequest);
    }

}
