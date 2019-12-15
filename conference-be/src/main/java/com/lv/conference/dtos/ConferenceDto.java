package com.lv.conference.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class ConferenceDto {
    private Long id;
    private String name;
    private String description;
    private LocalDateTime start;
    private LocalDateTime end;
}
