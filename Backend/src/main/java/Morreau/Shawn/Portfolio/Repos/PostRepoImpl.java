package Morreau.Shawn.Portfolio.Repos;

import Morreau.Shawn.Portfolio.Models.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("Posts")
public class PostRepoImpl implements IPostRepo{
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public PostRepoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Post> getAllPosts() {
        String sql = "SELECT title,content FROM post";
        return jdbcTemplate.query(sql,(data, i)->{
            String title = data.getString("title");
            String content = data.getString("content");
            return new Post(title,content);
        });
    }
}
