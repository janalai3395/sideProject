import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  // id column이 entituy의 primary key 이다
  @PrimaryGeneratedColumn()
  id: number;

  // 유저네임
  @Column({ type: 'varchar', nullable: false })
  name: string;

  // 유저아이디
  @Column({ type: 'varchar', length: 20, nullable: false })
  user_id: string;

  // 유저패스워드
  @Column({ type: 'varchar', nullable: false })
  password: string;
}
