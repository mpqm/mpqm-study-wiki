package com.example.member;

import com.example.member.model.Member;
import com.example.member.model.MemberSignupReq;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public void signup(MemberSignupReq memberSignupReq){
        Member member = Member.builder()
                .email(memberSignupReq.getEmail())
                .password(bCryptPasswordEncoder.encode(memberSignupReq.getPassword()))
                .build();
        memberRepository.save(member);
    }
}
