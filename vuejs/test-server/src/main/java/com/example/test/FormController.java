package com.example.test;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/test")
public class FormController {
    @RequestMapping(method = RequestMethod.POST, value = "/ex-formdd")
    public void test(String email, String pw, @RequestPart MultipartFile image) {
        System.out.println(email);
        System.out.println(pw);
        System.out.println(image.getOriginalFilename());
    }

    @RequestMapping(method = RequestMethod.POST, value = "/ex-form")
    public void test(String accept,
                     @RequestParam List<String> lunch,
                     LocalDate date) {
        System.out.println(accept);
        lunch.stream().forEach(menu -> System.out.println(menu));
        System.out.println(date.toString());
    }
}
