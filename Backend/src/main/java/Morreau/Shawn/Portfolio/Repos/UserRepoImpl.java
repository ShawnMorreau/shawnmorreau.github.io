package Morreau.Shawn.Portfolio.Repos;

import Morreau.Shawn.Portfolio.Models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("postgres")//fakerepo
public class UserRepoImpl implements IUserRepo {
    private static List<User> DB = new ArrayList<User>();
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public UserRepoImpl(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<User> getAllUsers() {
        final String sql = "SELECT id, name FROM users;";
        return jdbcTemplate.query(sql,(resultSet , i )->{
            UUID id = UUID.fromString(resultSet.getString("id"));
            String name = resultSet.getString("name");
            return new User(id, name);
        });
    }
    @Override
    public int addUser(UUID id, User user) {
        DB.add(new User(id, user.getName()));
        return 1;
    }

    @Override
    public int addUser(User user) {
        String sql = "INSERT INTO users(id, user) VALUES (?,?)";

        DB.add(new User(user.getName()));
        return 1;
    }

    @Override
    public int deleteUser(UUID id) {
        Optional<User> person = selectUser(id);
        if(person.isPresent()){
            DB.remove(person.get());
            return 1;
        }
        else{
            return 0;
        }
    }

    @Override
    public int updateUser(UUID id, User user) {
        return selectUser(id)
                .map(u -> {
                    int index = DB.indexOf(u);
                    System.out.println(u);
                    if (index >= 0) {
                        DB.set(index, user);
                        return 1;
                    }
                    return 0;
                })
                .orElse(0);
    }

    @Override
    public Optional<User> selectUser(UUID id) {
        final String sql = "SELECT id, name FROM users WHERE id = ?";
        User user = jdbcTemplate.queryForObject(sql, new Object[]{id},(result, i)->{
            UUID userID = UUID.fromString(result.getString("id"));
            String name = result.getString("name");
            return new User(userID, name);
        });
        return Optional.ofNullable(user);
    }
}
