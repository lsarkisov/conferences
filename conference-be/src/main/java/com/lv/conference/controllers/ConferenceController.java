package com.lv.conference.controllers;

import com.lv.conference.dtos.ConferenceDto;
import com.lv.conference.entities.Conference;
import com.lv.conference.services.ConferenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.lv.conference.config.Api.API_URL;

@CrossOrigin
@RestController
@RequestMapping(API_URL + "/conference")
public class ConferenceController {
    @Autowired
    private ConferenceService conferenceService;

    @GetMapping("/all")
    public List<ConferenceDto> getAllConferences() {
        List<Conference> allConferences = conferenceService.getAllConferences();
        return allConferences.stream().map(conference -> {
            return new ConferenceDto(
                    conference.getId(),
                    conference.getName(),
                    conference.getDescription(),
                    conference.getStart(),
                    conference.getEnd()
            );
        }).collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public Optional<Conference> getConference(@PathVariable Long id) {
        return conferenceService.getConference(id);
    }

    @PostMapping("/new")
    public ResponseEntity addConference(@RequestBody Conference p) {
        Conference participant = conferenceService.saveConference(p);
        return new ResponseEntity(participant, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteConference(@PathVariable Long id) {
        conferenceService.deleteConference(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
