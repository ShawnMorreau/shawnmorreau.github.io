package Morreau.Shawn.Portfolio.Controllers;

import Morreau.Shawn.Portfolio.Models.Post;
import Morreau.Shawn.Portfolio.Services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/blog")
@RestController
public class PostController {
    private PostService postService;
    @Autowired
    public PostController(PostService postService){
        this.postService = postService;
    }
    @RequestMapping
    public String Home(){
        return "DAMN U IZ STOOPID";
    }
    @RequestMapping("/posts")
    public List<Post> getAllPosts(){
        return postService.getAllPosts();
    }
}
