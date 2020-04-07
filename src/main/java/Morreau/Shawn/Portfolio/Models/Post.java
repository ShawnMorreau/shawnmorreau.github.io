package Morreau.Shawn.Portfolio.Models;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "post")
public class Post {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id private Long id;
    private @NotNull String title;
    private @NotNull String content;

    protected Post() {
    }

    public Post(@JsonProperty("title") String title, @JsonProperty("content") String content) {
        this.title = title;
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public Long getId() {
        return id;
    }
}
