package com.lv.conference.entities;

public enum Floor {
    FIRST  (1),
    SECOND(2);

    private final int levonFloor;

    private Floor(int levonFloor) {
        this.levonFloor = levonFloor;
    }
}
