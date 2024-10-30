package com.example.member;


import com.example.member.model.MemberSignupReq;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/member")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;
    @RequestMapping(method = RequestMethod.POST, value = "/signup")
    public ResponseEntity<String> signup(@RequestBody MemberSignupReq memberSignupReq){
        memberService.signup(memberSignupReq);
        return ResponseEntity.ok("성공");
    }
}
