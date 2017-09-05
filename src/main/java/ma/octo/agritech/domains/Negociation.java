package ma.octo.agritech.domains;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "NEGOCIATION")
public class Negociation  {

    @Id
    @GeneratedValue
    private Long id;

    private Double price;

    @ManyToOne()
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne()
    @JoinColumn(name = "production_id")
    private Production production;

    public Negociation(Double price, User user, Production production) {
        this.price = price;
        this.user = user;
        this.production = production;
    }

    public Negociation() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Production getProduction() {
        return production;
    }

    public void setProduction(Production production) {
        this.production = production;
    }
}