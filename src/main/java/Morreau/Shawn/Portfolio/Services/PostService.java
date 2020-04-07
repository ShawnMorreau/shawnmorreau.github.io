package Morreau.Shawn.Portfolio.Services;

import Morreau.Shawn.Portfolio.Models.Post;
import Morreau.Shawn.Portfolio.Repos.IJPAPostRepo;
import Morreau.Shawn.Portfolio.Repos.IPostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Iterator;
import java.util.List;

@Service
public class PostService {

    @Autowired
    private IJPAPostRepo postRepo;

    private IPostRepo repo;
    @Autowired
    public PostService(@Qualifier("posts") IPostRepo repo){
        this.repo = repo;
    }
    public List<Post> getAllPosts(){
        return repo.getAllPosts();
    }
    public int addPost(Post post){
        postRepo.save(post);
        return 1;
    }
    public Iterable<Post> getPosts(){
        return postRepo.findAll();
    }
    public void deletePost(Long id){postRepo.deleteById(id);}
}
