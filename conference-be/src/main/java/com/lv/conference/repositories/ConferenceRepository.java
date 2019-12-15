package com.lv.conference.repositories;

import com.lv.conference.entities.Conference;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConferenceRepository extends JpaRepository<Conference, Long> {
}
