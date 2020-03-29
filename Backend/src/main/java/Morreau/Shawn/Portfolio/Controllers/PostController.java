package Morreau.Shawn.Portfolio.Controllers;

import Morreau.Shawn.Portfolio.Models.Post;
import Morreau.Shawn.Portfolio.Services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@RequestMapping("/api/blog")
@RestController
public class PostController {
    private PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @RequestMapping
    public List<Post> Home() {
        List<Post> posts = new ArrayList<Post>();
        Iterable<Post> iterable = postService.getPosts();
        iterable.forEach(posts::add);
        return posts;
    }

    @RequestMapping("/posts")
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }

    @PostMapping("/add")
    public @ResponseBody ResponseEntity<String> addPost(@RequestBody Post post){
        postService.addPost(post);
        return new ResponseEntity<>("POST RESPONSE", HttpStatus.OK);
    }

    @RequestMapping("/other")
    public @ResponseBody
    Iterable<Post> getPosts() {
        return postService.getPosts();
    }

    @DeleteMapping
    public @ResponseBody
    ResponseEntity<String> deletePost(@RequestBody Post post) {
        System.out.println(post.getId());
        postService.deletePost(post.getId());
        return new ResponseEntity<>("Delete Response", HttpStatus.OK);
    }
}
