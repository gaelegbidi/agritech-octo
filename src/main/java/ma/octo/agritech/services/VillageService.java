package ma.octo.agritech.services;

import ma.octo.agritech.repositories.VillageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VillageService {

    @Autowired
    private VillageRepository villageRepository;
}
