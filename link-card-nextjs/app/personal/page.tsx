"use client";
import React, { useEffect, useState } from 'react';
import { Instagram, Facebook, Twitter, AlignJustify as Spotify, Youtube, Linkedin, Globe, Book, ShoppingBag, MessageCircle, FileText } from 'lucide-react';
import SocialCard from '../components/dashboard/SocialCard';
import LinkCard from '../components/dashboard/LinkCard';
import { useToast } from '../context/ToastContext';
import QRCodeModal from '../components/link/QRCodeModal';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PERSONAL_LINKS, UPDATE_KISISEL_LINK_MUTATION } from '../GraphQl/LinklerGraphQl';
import Modal from '../components/common/Modal';

interface KisiselLinkGuncelleDtoInput {
  instagram?: string | null;
  facebook?: string | null;
  x?: string | null;
  spotify?: string | null;
  youtube?: string | null;
  linkedin?: string | null;
  reddit?: string | null;
  vk?: string | null;
  medium?: string | null;
  webSite?: string | null;
  favoriMuzikVideom?: string | null;
  youtubeList?: string | null;
  youtubeVideo?: string | null;
  blogSitem?: string | null;
  spotifyList?: string | null;
  alisverisListem?: string | null;
}

const PersonalDashboard: React.FC = () => {
  const { addToast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState('');
  const [formData, setFormData] = useState<KisiselLinkGuncelleDtoInput>({});
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState("");

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      setUser(storedUser ? JSON.parse(storedUser) : null);
    }
  }, []);

  console.log('User from localStorage:', user);

  const { data, loading, error, refetch } = useQuery(GET_PERSONAL_LINKS, {
    variables: { userId: user ? user.id : null },
    skip: !user?.id,
    fetchPolicy: 'cache-and-network',
  });

  console.log('GraphQL Data 1:', data);

  

  const [updateKisiselLink, { data: kisiselLink, loading: kshata, error: kserror }] = useMutation(UPDATE_KISISEL_LINK_MUTATION, {
    variables: { userId: user ? user.id : null },
  });

  const handleUpdate = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!editingField) return;
    try {
      await updateKisiselLink({
        variables: {
          linkId: data?.kullaniciBul.kisiselLink.id,
          linkData: {
            [editingField]:
              editingField in formData && formData[editingField as keyof KisiselLinkGuncelleDtoInput] !== null
                ? formData[editingField as keyof KisiselLinkGuncelleDtoInput]
                : data?.kullaniciBul.kisiselLink[editingField],
          },
        },
      });
      addToast('success', `${editingField} updated successfully!`);
      setShowEditModal(false);
      refetch();  // <-- Refresh the query data after update
    } catch (err) {
      console.error(`Failed to update ${editingField}:`, err);
      addToast('error', `Failed to update ${editingField}`);
    }
  };

  console.log('GraphQL Data 2:', data?.kullaniciBul.kisiselLink);

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram': return <Instagram />;
      case 'facebook': return <Facebook />;
      case 'twitter': return <Twitter />;
      case 'spotify': return <Spotify />;
      case 'youtube': return <Youtube />;
      case 'linkedin': return <Linkedin />;
      case 'reddit': return <MessageCircle />;
      case 'vk': return <Globe />;
      case 'medium': return <FileText />;
      case 'book': return <Book />;
      case 'shopping': return <ShoppingBag />;
      case 'globe':
      default: return <Globe />;
    }
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      addToast('success', 'Changes saved successfully!');
    }
  };

  const handleGenerateQR = (url: string) => {
    setSelectedUrl(url);
    setShowQRModal(true);
  };

  const handleCardEdit = (field: string, currentValue: string | null) => {
    setEditingField(field);
    setEditingValue(currentValue || "");
    setFormData(prev => ({ ...prev, [field]: currentValue || "" }));
    setShowEditModal(true);
  };

  const [socialLinks, setSocialLinks] = useState([
    { id: 1, platform: 'instagram', username: data?.kullaniciBul?.kisiselLink?.instagram, url: `https://instagram.com/${data?.kullaniciBul?.kisiselLink?.instagram}` },
    { id: 2, platform: 'facebook', username: data?.kullaniciBul?.kisiselLink?.facebook, url: `https://facebook.com/${data?.kullaniciBul?.kisiselLink?.facebook}` },
    { id: 3, platform: 'twitter', username: data?.kullaniciBul?.kisiselLink?.x, url: `https://x.com/${data?.kullaniciBul?.kisiselLink?.x}`},
    { id: 4, platform: 'spotify', username: data?.kullaniciBul?.kisiselLink?.spotify, url: `https://open.spotify.com/user/${data?.kullaniciBul?.kisiselLink?.spotify}` },
    { id: 5, platform: 'youtube', username: data?.kullaniciBul?.kisiselLink?.youtube, url: `https://youtube.com/@${data?.kullaniciBul?.kisiselLink?.youtube}` },
    { id: 6, platform: 'linkedin', username: data?.kullaniciBul?.kisiselLink?.linkedin, url: `https://linkedin.com/in/${data?.kullaniciBul?.kisiselLink?.linkedin}` },
    { id: 7, platform: 'reddit', username: data?.kullaniciBul?.kisiselLink?.reddit, url: `https://reddit.com/user/${data?.kullaniciBul?.kisiselLink?.reddit}` },
    { id: 8, platform: 'vk', username: data?.kullaniciBul?.kisiselLink?.vk, url: `https://vk.com/${data?.kullaniciBul?.kisiselLink?.vk}` },
    { id: 9, platform: 'medium', username: data?.kullaniciBul?.kisiselLink?.medium, url: `https://medium.com/@${data?.kullaniciBul?.kisiselLink?.medium}` },
  ]);

  const [customLinks, setCustomLinks] = useState([
    { id: 1, title: 'Personal Website', url: data?.kullaniciBul?.kisiselLink?.webSite, icon: 'globe', size: 'large' },
    { id: 2, title: 'Favorite Music Video', url: data?.kullaniciBul?.kisiselLink?.favoriMuzikVideom, icon: 'youtube', size: 'large' },
    { id: 3, title: 'YouTube Playlist', url: data?.kullaniciBul?.kisiselLink?.youtubeList, icon: 'youtube', size: 'large' },
    { id: 4, title: 'Latest Video', url: data?.kullaniciBul?.kisiselLink?.youtubeVideo, icon: 'youtube', size: 'large' },
    { id: 5, title: 'Blog', url: data?.kullaniciBul?.kisiselLink?.blogSitem, icon: 'book', size: 'large' },
    { id: 6, title: 'Spotify Playlist', url: data?.kullaniciBul?.kisiselLink?.spotifyList, icon: 'spotify', size: 'large' },
    { id: 7, title: 'Shopping List', url: data?.kullaniciBul?.kisiselLink?.alisverisListem, icon: 'shopping', size: 'large' },
  ]);

  useEffect(() => {
    if (data && data.kullaniciBul?.kisiselLink) {
      const link = data.kullaniciBul.kisiselLink;
      setSocialLinks([
        { id: 1, platform: 'instagram', username: link.instagram, url: `https://instagram.com/${link.instagram}` },
        { id: 2, platform: 'facebook', username: link.facebook, url: `https://facebook.com/${link.facebook}` },
        { id: 3, platform: 'twitter', username: link.x, url: `https://x.com/${link.x}` },
        { id: 4, platform: 'spotify', username: link.spotify, url: `https://open.spotify.com/user/${link.spotify}` },
        { id: 5, platform: 'youtube', username: link.youtube, url: `https://youtube.com/@${link.youtube}` },
        { id: 6, platform: 'linkedin', username: link.linkedin, url: `https://linkedin.com/in/${link.linkedin}` },
        { id: 7, platform: 'reddit', username: link.reddit, url: `https://reddit.com/user/${link.reddit}` },
        { id: 8, platform: 'vk', username: link.vk, url: `https://vk.com/${link.vk}` },
        { id: 9, platform: 'medium', username: link.medium, url: `https://medium.com/@${link.medium}` },
      ]);
      setCustomLinks([
        { id: 1, title: 'Personal Website', url: link.webSite, icon: 'globe', size: 'large' },
        { id: 2, title: 'Favorite Music Video', url: link.favoriMuzikVideom, icon: 'youtube', size: 'large' },
        { id: 3, title: 'YouTube Playlist', url: link.youtubeList, icon: 'youtube', size: 'large' },
        { id: 4, title: 'Latest Video', url: link.youtubeVideo, icon: 'youtube', size: 'large' },
        { id: 5, title: 'Blog', url: link.blogSitem, icon: 'book', size: 'large' },
        { id: 6, title: 'Spotify Playlist', url: link.spotifyList, icon: 'spotify', size: 'large' },
        { id: 7, title: 'Shopping List', url: link.alisverisListem, icon: 'shopping', size: 'large' },
      ]);
    }
  }, [data]);

  return (
    <>
      <div className="space-y-8 pt-14">
        <div className="bg-gradient-to-r from-pink-500 to-orange-500 dark:from-pink-700 dark:to-orange-700 rounded-xl shadow-lg p-8 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Personal Dashboard</h1>
              <p className="mt-2 opacity-90">Manage all your personal links in one place</p>
            </div>
            <button
              onClick={toggleEditMode}
              className={`px-4 py-2 rounded-md border border-white/30 backdrop-blur-sm transition-all ${
                isEditing 
                  ? 'bg-white text-pink-600 hover:bg-pink-50' 
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {isEditing ? 'Save Changes' : 'Edit Dashboard'}
            </button>
          </div>
        </div>

        {/* Social Media Links - Windows 8 Style */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Social Media</h2>

          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((link) => (
              <SocialCard
                key={link.id}
                platform={link.platform}
                username={link.username}
                url={link.url}
                icon={getPlatformIcon(link.platform)}
                isEditing={isEditing}
                onEdit={() => handleCardEdit(
                  link.platform.toLowerCase() === 'twitter' ? 'x' : link.platform.toLowerCase(), 
                  link.username
                )}
                onDelete={() => addToast('info', `Delete ${link.platform} link`)}
                onGenerateQR={() => handleGenerateQR(link.url)}
              />
            ))}
          </div>
        </section>

        {/* Custom Links - Windows 8 Style */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Custom Links</h2>

          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows">
            {customLinks.map((link) => (
              <div
                key={link.id}
                className={`${
                  link.size === 'large' ? 'sm:col-span-2 sm:row-span-2' :
                  link.size === 'medium' ? 'sm:col-span-2' : ''
                }`}
              >
                <LinkCard
                  title={link.title}
                  url={link.url}
                  icon={getPlatformIcon(link.icon)}
                  isEditing={isEditing}
                  onEdit={() => handleCardEdit(
                    link.title === 'Personal Website' ? 'webSite' :
                    link.title === 'Favorite Music Video' ? 'favoriMuzikVideom' :
                    link.title === 'YouTube Playlist' ? 'youtubeList' :
                    link.title === 'Latest Video' ? 'youtubeVideo' :
                    link.title === 'Blog' ? 'blogSitem' :
                    link.title === 'Spotify Playlist' ? 'spotifyList' :
                    link.title === 'Shopping List' ? 'alisverisListem' : '',
                    link.url
                  )}
                  onDelete={() => addToast('info', `Delete ${link.title}`)}
                  onGenerateQR={() => handleGenerateQR(link.url)}
                />
              </div>
            ))}
          </div>
        </section>

        {/* QR Code Modal */}
        {showQRModal && (
          <QRCodeModal
            url={selectedUrl}
            onClose={() => setShowQRModal(false)}
          />
        )}
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <Modal
          isOpen={showEditModal}
          onClose={() => setShowEditModal(false)}
          title={`Edit ${editingField}`}
        >
          <form onSubmit={handleUpdate} className="space-y-4">
            <input
              type="text"
              value={editingValue}
              onChange={(e) => {
                setEditingValue(e.target.value);
                if (editingField) {
                  setFormData(prev => ({ ...prev, [editingField]: e.target.value }));
                }
              }}
              className="w-full p-2 border rounded"
            />
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">
              Save
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default PersonalDashboard;