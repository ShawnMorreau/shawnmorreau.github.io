package Morreau.Shawn.Portfolio.Repos;

import Morreau.Shawn.Portfolio.Models.Post;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface IPostRepo {
    List<Post> getAllPosts();
}
