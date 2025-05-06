import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import { Kullanici } from './kullanici.entity';

@Entity('kurumsal_linkler')
export class KurumsalLink {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    isEpostasi: string;

    @Column({ nullable: true })
    isWebSitesi: string;

    @Column({ nullable: true })
    isyeriWebSitesi: string;

    @Column({ nullable: true })
    isYeriAdresi: string;

    @Column({ nullable: true })
    isTelefonu: string;

    @Column({ nullable: true })
    isYeriTelefon: string;

    @Column({ nullable: true })
    isYeriEposta: string;

    @OneToOne(() => Kullanici, (kullanici) => kullanici.kurumsalLink, { nullable: true }) // TypeORM ilişki
    kullanici?: Kullanici;

    @CreateDateColumn()
    olusturmaTarihi: Date;

    @UpdateDateColumn()
    guncellemeTarihi: Date;
}
