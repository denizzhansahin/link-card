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



export const CREATE_KISISEL_LINK_MUTATION = gql`
  mutation KisiselLinkOlustur($linkData: KisiselLinkOlusturDto!) {
    kisiselLinkOlustur(kisiselLinkData: $linkData) {
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
`;

export const UPDATE_KISISEL_LINK_MUTATION = gql`
  mutation KisiselLinkGuncelle($linkId: String!, $linkData: KisiselLinkGuncelleDto!) {
    kisiselLinkGuncelle(id: $linkId, kisiselLinkData: $linkData) {
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
`;



export const CREATE_KURUMSAL_LINK_MUTATION = gql`
  mutation KurumsalLinkOlustur($linkData: KurumsalLinkOlusturDto!) {
    kurumsalLinkOlustur(kurumsalLinkData: $linkData) {
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
      kullanici {
        id
        nickname
      }
    }
  }
`;

export const UPDATE_KURUMSAL_LINK_MUTATION = gql`
  mutation KurumsalLinkGuncelle($linkId: Float!, $linkData: KurumsalLinkGuncelleDto!) { # ID tipi Float!
    kurumsalLinkGuncelle(id: $linkId, kurumsalLinkData: $linkData) {
      id
      isEpostasi
      isWebSitesi
      isyeriWebSitesi
      isYeriAdresi
      isTelefonu
      isYeriTelefon
      isYeriEposta
      guncellemeTarihi
      kullanici {
        id
        nickname
      }
    }
  }
`;