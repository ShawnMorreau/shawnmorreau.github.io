package Morreau.Shawn.Portfolio.Services;

import Morreau.Shawn.Portfolio.Models.Post;
import Morreau.Shawn.Portfolio.Repos.IPostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    private IPostRepo repo;
    @Autowired
    public PostService(@Qualifier("Posts") IPostRepo repo){
        this.repo = repo;
    }
    public List<Post> getAllPosts(){
        return repo.getAllPosts();
    }
}
