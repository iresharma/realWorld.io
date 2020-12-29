import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinTable, JoinColumn } from "typeorm";
import { User } from "./user";

// {
//   "slug": "how-to-train-your-dragon",
//   "title": "How to train your dragon",
//   "description": "Ever wonder how?",
//   "body": "It takes a Jacobian",
//  TODO :"tagList": ["dragons", "training"],
//   "createdAt": "2016-02-18T03:22:56.637Z",
//   "updatedAt": "2016-02-18T03:48:35.824Z",
//   TODO :"favorited": false,
//   TODO :"favoritesCount": 0,
//   "author": {
//     "username": "jake",
//     "bio": "I work at statefarm",
//     "image": "https://i.stack.imgur.com/xHWG8.jpg",
//     "following": false
// }

@Entity()
export class Article {
	@PrimaryColumn({ length: 30 })
	slug: string;

	@Column({ length: 30 })
	title: string;

	@Column({ length: 100, nullable: true })
	description: string;

	@Column({ type: 'text' })
	body: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@ManyToOne(() => User,)
	@JoinColumn()
	author: User;
}
