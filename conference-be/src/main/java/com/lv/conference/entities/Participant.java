package com.lv.conference.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
public class Participant {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String firstName;
    private String lastName;
    private Long confId;
    private Long roomNumber;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "participant_id")
    private Conference conference;

    @OneToOne
    @JsonIgnore
    @JoinColumn(name = "room_id")
    private Room room;

    public Participant(String firstName, String lastName, Long confId, Long roomNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.confId = confId;
        this.roomNumber = roomNumber;
    }
}
