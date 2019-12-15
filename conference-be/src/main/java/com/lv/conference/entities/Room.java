package com.lv.conference.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Floor floor;
    private Integer roomNumber;
    private Integer seatNumber;
    private Boolean reserved;
    private Long confId;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "conference_id")
    private Conference conference;

    @OneToOne(mappedBy = "room", cascade = CascadeType.ALL)
    @JsonIgnore
    private Participant participant;

    public Room(Floor floor, Integer roomNumber, Boolean reserved, Long confId) {
        this.floor = floor;
        this.roomNumber = roomNumber;
        this.reserved = reserved;
        this.confId = confId;
    }

    public Room(Floor floor, Integer roomNumber, Boolean reserved, Long confId, Participant participant) {
        this.floor = floor;
        this.roomNumber = roomNumber;
        this.reserved = reserved;
        this.confId = confId;
        this.participant = participant;
    }
}
