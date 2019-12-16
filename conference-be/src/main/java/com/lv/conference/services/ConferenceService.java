package com.lv.conference.services;

import com.lv.conference.entities.Conference;
import com.lv.conference.repositories.ConferenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ConferenceService {
    @Autowired
    private ConferenceRepository conferenceRepository;

    public Optional<Conference> getConference(Long id) {
        return conferenceRepository.findById(id);
    }

    public Conference saveConference(Conference p) {
        return conferenceRepository.save(p);
    }

    public List<Conference> deleteConference(Long id) {
        conferenceRepository.deleteById(id);
        return conferenceRepository.findAll();
    }

    public List<Conference> getAllConferences() {
        return conferenceRepository.findAll();
    }
}
