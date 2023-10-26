import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Auth {

    @PrimaryGeneratedColumn()
    id_user: number;

    @Column({
        unique: true,
        length: 10
    })
    from: string;

    @Column({
        length: 512
    })
    password: string;

    @Column({
        length: 512
    })
    token: string;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    created_at: Date;

}