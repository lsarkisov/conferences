package com.lv.conference.services;

import com.lv.conference.entities.Participant;
import com.lv.conference.repositories.ParticipantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ParticipantService {

    @Autowired
    private ParticipantRepository participantRepository;


    public Participant saveParticipant(Participant p) {
        return participantRepository.save(p);
    }

    public Optional<Participant> getParticipant(Long id) {
        return participantRepository.findById(id);
    }

    public void deleteParticipant(Long id) {
        participantRepository.deleteById(id);
    }

    public List<Participant> getAllParticipants() {
        return participantRepository.findAll();
    }
}
