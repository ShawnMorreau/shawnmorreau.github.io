package Morreau.Shawn.Portfolio.Repos;

import Morreau.Shawn.Portfolio.Models.Post;
import org.springframework.data.repository.CrudRepository;

public interface IJPAPostRepo extends CrudRepository<Post,Long>{
    Post findById(long id);
    Iterable<Post> findAll();

}
