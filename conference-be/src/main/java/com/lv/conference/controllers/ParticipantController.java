package com.lv.conference.controllers;

import com.lv.conference.entities.Participant;
import com.lv.conference.services.ParticipantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static com.lv.conference.config.Api.API_URL;

@CrossOrigin
@RestController
@RequestMapping(API_URL + "/participant")
public class ParticipantController {
    @Autowired
    private ParticipantService participantService;

    @GetMapping("/{id}")
    public Optional<Participant> getParticipant(@PathVariable Long id) {
        return participantService.getParticipant(id);
    }

    @GetMapping("/all")
    public List<Participant> getAllParticipant() {
        return participantService.getAllParticipants();
    }

    @PostMapping("/new")
    public ResponseEntity addParticipant(@RequestBody Participant p) {
        Participant participant = participantService.saveParticipant(p);
        return new ResponseEntity(participant, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteParticipant(@PathVariable Long id) {
        participantService.deleteParticipant(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
