package Morreau.Shawn.Portfolio.Models;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotNull;

public class Post {

    private long id;
    private @NotNull String title;
    private @NotNull String content;

    public Post(@JsonProperty("title") String title,@JsonProperty("content") String content){
        this.title = title;
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }
}
