import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { } from '@nestjs/typeorm'

@Entity('user', { schema: 'dbo' })
export class User {
    @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'custom' })//({ primaryKeyConstraintName: 'custom' })
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    email: string;

    // @OneToMany(() => UserProfile, (userProfile) => userProfile.user, { onDelete: 'CASCADE' })
    // profiles: UserProfile[]

}



// @Entity('userProfile')
// export class UserProfile {
//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column({ type: 'varchar', length: 100, nullable: false })
//     name: string;

//     @ManyToOne(() => User, (user) => user.profiles)
//     @JoinColumn({
//         name: 'userId',
//         referencedColumnName: 'id',
//         foreignKeyConstraintName: 'custom'
//     })
//     user: User
// }