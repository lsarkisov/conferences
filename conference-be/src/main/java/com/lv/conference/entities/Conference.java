package com.lv.conference.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.Set;

@Data
@NoArgsConstructor
@Entity
public class Conference {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Size(min = 1, max = 150)
    private String name;

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm", iso = DateTimeFormat.ISO.DATE_TIME)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime start;

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm", iso = DateTimeFormat.ISO.DATE_TIME)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime end;

    @OneToMany(mappedBy = "conference", cascade = CascadeType.ALL)
    private Set<Room> room;

    @OneToMany(mappedBy = "conference", cascade = CascadeType.ALL)
    private Set<Participant> participant;

    public Conference(@Size(min = 1, max = 150) String name, LocalDateTime start, LocalDateTime end, Set<Room> room) {
        this.name = name;
        this.start = start;
        this.end = end;
        this.room = room;
    }

    public Conference(@Size(min = 1, max = 150) String name, LocalDateTime start, LocalDateTime end, Set<Room> room, Set<Participant> participant) {
        this.name = name;
        this.start = start;
        this.end = end;
        this.room = room;
        this.participant = participant;
    }
}
