package com.fornet.auto.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fornet.auto.common.BaseMsg;
import com.fornet.auto.common.BaseRes;
import com.fornet.auto.dto.RankDto;
import com.fornet.auto.service.RankService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

// 랭킹 컨트롤러
@Slf4j
@RestController
@RequiredArgsConstructor
public class RankController {

    private final RankService rankService;

    /**
     * 타입별 랭킹 조회 API
     * @return 타입별 랭킹 데이터
     */
    @GetMapping("/rank")
    public ResponseEntity<BaseRes<Map<String, List<RankDto>>>> getRanks() {
        log.info("랭킹 조회 요청");
        Map<String, List<RankDto>> ranks = rankService.getRanks();
        return ResponseEntity.ok(new BaseRes<>(BaseMsg.SUCCESS, ranks));
    }

}