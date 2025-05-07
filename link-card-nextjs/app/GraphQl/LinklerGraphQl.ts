import { gql } from '@apollo/client';


export const GET_PERSONAL_LINKS = gql`
  query GetPersonalLinks($userId: String!) {
    kullaniciBul(id: $userId) {
      id
      nickname # İsteğe bağlı olarak kullanıcı bilgilerini de alabilirsiniz
      kisiselLink { # Kullanici tipindeki "kisiselLink" alanı
        id
        instagram
        facebook
        x
        spotify
        youtube
        linkedin
        reddit
        vk
        medium
        webSite
        favoriMuzikVideom
        youtubeList
        youtubeVideo
        blogSitem
        spotifyList
        alisverisListem
      }
    }
  }
`;


export const GET_CORPORATE_LINKS = gql`
  query GetCorporateLinks($userId: String!) {
    kullaniciBul(id: $userId) {
      id
      nickname 
      kurumsalLink {
        id
        isEpostasi
        isWebSitesi
        isyeriWebSitesi
        isYeriAdresi
        isTelefonu
        isYeriTelefon
        isYeriEposta
        olusturmaTarihi
        guncellemeTarihi
  
      }
    }
  }
`;

