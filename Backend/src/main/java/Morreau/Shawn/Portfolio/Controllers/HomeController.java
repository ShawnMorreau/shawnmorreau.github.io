package Morreau.Shawn.Portfolio.Controllers;

import Morreau.Shawn.Portfolio.Models.User;
import Morreau.Shawn.Portfolio.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.UUID;

@RequestMapping("api/v1/")
@RestController
public class HomeController {

    private final UserService userService;
    @Autowired
    public HomeController(UserService userService){
        this.userService = userService;
    }
    @PostMapping
    public void addUser(@RequestBody User user){
        userService.addUser(user);
    }
    @RequestMapping
    public String addUserGivenName(@RequestParam("name") String name){
        userService.addUser(new User(UUID.randomUUID(), name));
        System.out.println("holy batman line 29 home cont");
        return "we did it biish";
    }
    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }
    @GetMapping("/user")
    public User getPersonById(@RequestParam UUID id){
        return userService.getUserByID(id)
                .orElse(null);
    }
    @DeleteMapping(path="{id}")
    public void deleteUser(@PathVariable("id") UUID id){
        userService.deleteUser(id);
    }
    @PutMapping(path="{id}")
    public void updateUser(@PathVariable("id") UUID id,@RequestBody @Valid @NotNull User user){
        userService.updateUser(id,user);
    }


}
