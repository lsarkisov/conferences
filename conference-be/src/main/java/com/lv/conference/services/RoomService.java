package com.lv.conference.services;

import com.lv.conference.entities.Room;
import com.lv.conference.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {
    @Autowired
    private RoomRepository roomRepository;

    public List<Room> getAllAvailableRooms() {
        return roomRepository.findAll();
    }

    public void bookRoom(Room room) {
        roomRepository.save(room);
    }
}
