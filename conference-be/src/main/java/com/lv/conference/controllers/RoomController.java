package com.lv.conference.controllers;

import com.lv.conference.entities.Room;
import com.lv.conference.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.lv.conference.config.Api.API_URL;

@CrossOrigin
@RestController
@RequestMapping(API_URL + "/room")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @GetMapping("/all")
    public List<Room> getAllAvailableRooms() {
        return roomService.getAllAvailableRooms();
    }

    @PostMapping("/reserve")
    public ResponseEntity bookRoom(@RequestBody Room room) {
        roomService.bookRoom(room);
        return new ResponseEntity(HttpStatus.OK);
    }
}
