import { Column, Entity, PrimaryColumn } from 'typeorm';

// {
//   "email": "jake@jake.jake",
//   "token": "jwt.token.here", // TODO: implement JWT
//   "username": "jake",
//   "bio": "I work at statefarm",
//   "image": null
// }

@Entity()
export class User {

  @PrimaryColumn({ type: "text" })
  email: string;

  @Column({ type: 'text' })
  token: string;

  @Column({ unique: true ,length: 10 })
  username: string;

  @Column({ type: 'text', nullable: true })
  bio: string;

  @Column({ type: 'text', nullable: true })
  image: string;
}