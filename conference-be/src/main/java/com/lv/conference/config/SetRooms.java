package com.lv.conference.config;

import com.lv.conference.entities.Floor;
import com.lv.conference.entities.Room;
import com.lv.conference.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;
import java.util.stream.IntStream;

@Configuration
public class SetRooms {
    @Autowired
    private RoomRepository roomRepository;

    @PostConstruct
    public void setRooms() {
        IntStream.rangeClosed(1, 20)
                .forEach(id -> {
                    Room room = new Room(Floor.FIRST, 1, id, false, null);
                    roomRepository.save(room);
                });

        IntStream.rangeClosed(21, 36)
                .forEach(id -> {
                    Room room = new Room(Floor.SECOND, 2, id, false, null);
                    roomRepository.save(room);
                });
    }
}
