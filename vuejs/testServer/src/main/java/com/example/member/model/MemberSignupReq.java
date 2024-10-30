package com.example.member.model;

import lombok.*;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class MemberSignupReq {
    String email;
    String password;
}
