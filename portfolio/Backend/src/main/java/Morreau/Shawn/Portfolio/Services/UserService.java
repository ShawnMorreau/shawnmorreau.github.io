package Morreau.Shawn.Portfolio.Services;

import Morreau.Shawn.Portfolio.Models.User;
import Morreau.Shawn.Portfolio.Repos.IUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {
    private IUserRepo repo;
    @Autowired
    public UserService(@Qualifier("postgres") IUserRepo repo){
        this.repo = repo;
    }
    public int addUser(User user){
        return repo.addUser(user);
    }

    public List<User> getAllUsers(){
        return repo.getAllUsers();
    }
    public Optional<User> getUserByID(UUID id){
        return repo.selectUser(id);
    }
    public int updateUser(UUID id, User user){
        return repo.updateUser(id, user);
    }
    public int deleteUser(UUID id){
        return repo.deleteUser(id);
    }
}
