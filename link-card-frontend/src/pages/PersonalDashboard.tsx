import React, { useState } from 'react';
import { PlusCircle, Instagram, Facebook, Twitter, AlignJustify as Spotify, Youtube, Linkedin, Globe, Book, ShoppingBag, MessageCircle, FileText } from 'lucide-react';
import SocialCard from '../components/dashboard/SocialCard';
import LinkCard from '../components/dashboard/LinkCard';
import { useToast } from '../context/ToastContext';

const PersonalDashboard: React.FC = () => {
  const { addToast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  
  const [socialLinks, setSocialLinks] = useState([
    { id: 1, platform: 'instagram', username: 'creativephoto', url: 'https://instagram.com/creativephoto' },
    { id: 2, platform: 'facebook', username: 'creative.design', url: 'https://facebook.com/creative.design' },
    { id: 3, platform: 'twitter', username: 'designthoughts', url: 'https://twitter.com/designthoughts' },
    { id: 4, platform: 'spotify', username: 'indie_vibes', url: 'https://open.spotify.com/user/indie_vibes' },
    { id: 5, platform: 'youtube', username: 'creativeChannel', url: 'https://youtube.com/@creativeChannel' },
    { id: 6, platform: 'linkedin', username: 'professional', url: 'https://linkedin.com/in/professional' },
    { id: 7, platform: 'reddit', username: 'creative_mind', url: 'https://reddit.com/user/creative_mind' },
    { id: 8, platform: 'vk', username: 'creative_vk', url: 'https://vk.com/creative_vk' },
    { id: 9, platform: 'medium', username: '@creative_writer', url: 'https://medium.com/@creative_writer' },
  ]);

  const [customLinks, setCustomLinks] = useState([
    { id: 1, title: 'Personal Website', url: 'https://example.com', icon: 'globe' },
    { id: 2, title: 'Favorite Music Video', url: 'https://youtube.com/watch?v=abcdef', icon: 'youtube' },
    { id: 3, title: 'YouTube Playlist', url: 'https://youtube.com/playlist?list=123', icon: 'youtube' },
    { id: 4, title: 'Latest Video', url: 'https://youtube.com/watch?v=latest', icon: 'youtube' },
    { id: 5, title: 'Blog', url: 'https://example.com/blog', icon: 'book' },
    { id: 6, title: 'Spotify Playlist', url: 'https://open.spotify.com/playlist/12345', icon: 'spotify' },
    { id: 7, title: 'Shopping List', url: 'https://example.com/shopping', icon: 'shopping' },
  ]);

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

  const handleAddLink = () => {
    addToast('info', 'This feature will allow you to add a new link');
  };

  return (
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

      {/* Social Media Links */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Social Media</h2>
          {isEditing && (
            <button 
              onClick={handleAddLink}
              className="flex items-center gap-1 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              <PlusCircle className="h-4 w-4" />
              Add Social Link
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socialLinks.map((link) => (
            <SocialCard
              key={link.id}
              platform={link.platform}
              username={link.username}
              url={link.url}
              icon={getPlatformIcon(link.platform)}
              isEditing={isEditing}
              onEdit={() => addToast('info', `Edit ${link.platform} link`)}
              onDelete={() => addToast('info', `Delete ${link.platform} link`)}
            />
          ))}
        </div>
      </section>

      {/* Custom Links */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Custom Links</h2>
          {isEditing && (
            <button 
              onClick={handleAddLink}
              className="flex items-center gap-1 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              <PlusCircle className="h-4 w-4" />
              Add Custom Link
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          {customLinks.map((link) => (
            <LinkCard
              key={link.id}
              title={link.title}
              url={link.url}
              icon={getPlatformIcon(link.icon)}
              isEditing={isEditing}
              onEdit={() => addToast('info', `Edit ${link.title}`)}
              onDelete={() => addToast('info', `Delete ${link.title}`)}
            />
          ))}
        </div>
      </section>

      {/* Link Analytics */}
      <section className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Link Analytics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Clicks</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">1,234</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Most Clicked</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">Blog</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Links</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">16</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Growth</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">+15.3%</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalDashboard;