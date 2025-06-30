import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Logging Insert User with id:', this.id);
  }

  @AfterUpdate()
  logUpdateUser() {
    console.log('Logged updated account with:', this.id);
  }

  @AfterRemove()
  logDeletedUser() {
    console.log('Logg deleted user info:', this.id);
  }
}
