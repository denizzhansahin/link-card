import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@ObjectType() // GraphQL için
@Entity('kullanici') // TypeORM için
export class Kullanici {
  @Field() // GraphQL alanı
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ length: 50 })
  isim: string;

  @Field()
  @Column({ length: 50 })
  soyisim: string;

  @Field()
  @Column({ unique: true })
  eposta: string;

  @Field()
  @Column()
  sifre: string;

  @Field()
  @CreateDateColumn() // Otomatik oluşturma tarihi
  olusturmaTarihi: Date;

  @Field({ nullable: true })
  @DeleteDateColumn({nullable: true }) // Silme tarihi (soft delete için)
  silmeTarihi?: Date;

  @Field()
  @UpdateDateColumn() // Otomatik güncelleme tarihi
  guncellemeTarihi: Date;

  @Field({ nullable: true })
  @Column({ length: 50, nullable: true })
  ulke?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  fotograf?: string;
}