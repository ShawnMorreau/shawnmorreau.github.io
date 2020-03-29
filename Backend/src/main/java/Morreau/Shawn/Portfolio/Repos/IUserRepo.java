package Morreau.Shawn.Portfolio.Repos;

import Morreau.Shawn.Portfolio.Models.User;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface IUserRepo {
    int addUser(UUID id,User user);
    default int addUser(User user){
        UUID id = UUID.randomUUID();
        return addUser(id, user);
    }
    List<User> getAllUsers();
    int deleteUser(UUID id);
    int updateUser(UUID id, User user);
    Optional<User> selectUser(UUID id);


}
