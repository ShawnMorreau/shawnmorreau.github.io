package Morreau.Shawn.Portfolio.Models;


import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;
import java.util.UUID;

public class User {
    private final UUID id;
    @NotBlank
    private String name;

    public User(@JsonProperty("id") UUID id,
                @JsonProperty("name") String name){
        this.id = id;
        this.name = name;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }

    public User(String name){
        this.name = name;
        this.id = UUID.randomUUID();
    }

    public String getName() {
        return name;
    }
    public void setName(String name){
        this.name = name;
    }
    public UUID getID(){
        return id;
    }
}
