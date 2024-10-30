import {Controller, Get} from "@nestjs/common"

@Controller()
export class HelloController {
    @Get()
    hello(){return "안녕하세요"}
}