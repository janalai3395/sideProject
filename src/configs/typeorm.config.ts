import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/users/entities/user.entity";

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'mysql', //여기가 database 설정
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'qufNAM151@',
    database: 'new_schema',
    entities: [User], //user.entity.ts를 가르키는중
    synchronize: true //프로그램 시작할 때마다 DB 스키마를 자동으로 재생성 하는지 여부. 배포시에는 스키마를 바꾸며 데이터가 날아갈 수 있으니 개발,테스트떄만 TRUE
}