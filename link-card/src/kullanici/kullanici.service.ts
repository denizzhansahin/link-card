import { Injectable } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KullaniciGuncelleDto } from 'src/DTO/kullanici_guncelle.dto';
import { KullaniciOlusturDto } from 'src/DTO/kullanici_olustur.dto';
import { Kullanici } from 'src/Entities/kullanici.entity';


import { Repository } from 'typeorm';

@Injectable()
export class KullaniciService {
    constructor(
        @InjectRepository(Kullanici) private kullaniciRepository: Repository<Kullanici>,
    ) { }

    // Yeni kullanıcı oluştur
    async kullaniciOlustur(kullaniciData: KullaniciOlusturDto) {
        const newUser = this.kullaniciRepository.create(kullaniciData);
        return await this.kullaniciRepository.save(newUser); 
    }

    // Tüm kullanıcıları getir
    async findAll(): Promise<Kullanici[]> {
        return this.kullaniciRepository.find({relations: ['linkler','kisiselLink','kurumsalLink'
        ]});
    }

    async kullaniciBul(id: string): Promise<Kullanici> {
        const kullanici = await this.kullaniciRepository.findOne({
            where: { id },
            relations: ['linkler','kisiselLink','kurumsalLink'
            ]
        });
        if (!kullanici) {
            throw new Error('Kullanıcı yok');
        }
        return kullanici;
    }

    async findByEmail(eposta:string){
        return await this.kullaniciRepository.findOne({
          where:{
            eposta:eposta,
          }
        })
      }


    async kullaniciGuncelle(kullaniciId: string, kullaniciGuncelleData: KullaniciGuncelleDto) {
        const kullanici = await this.kullaniciRepository.findOneBy({ id: kullaniciId });
        if (!kullanici) {
            throw new HttpException('Kullanici Yok', HttpStatus.NOT_FOUND);
        }

        Object.assign(kullanici, kullaniciGuncelleData);

        return await this.kullaniciRepository.save(kullanici);
    }
}
