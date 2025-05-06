import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@ObjectType() // GraphQL için
@Entity('linkler') // TypeORM için
export class Link {
  @Field() // GraphQL alanı
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ length: 255 }) // Asıl metin adı
  asilMetinAdi: string;

  @Field()
  @Column({unique: true, length: 100 }) // Kısaltılmış link token
  kisaltmaToken: string;

  @Field()
  @CreateDateColumn() // Otomatik oluşturma tarihi
  olusturmaTarihi: Date;

  @Field()
  @UpdateDateColumn() // Otomatik güncelleme tarihi
  guncellemeTarihi: Date;
}