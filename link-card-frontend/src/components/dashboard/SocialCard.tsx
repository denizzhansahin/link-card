import React from 'react';
import { ExternalLink, Edit, Trash2 } from 'lucide-react';

interface SocialCardProps {
  platform: string;
  username: string;
  url: string;
  icon: React.ReactNode;
  isEditing: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

const SocialCard: React.FC<SocialCardProps> = ({
  platform,
  username,
  url,
  icon,
  isEditing,
  onEdit,
  onDelete
}) => {
  const getPlatformColor = (platform: string): string => {
    switch (platform.toLowerCase()) {
      case 'instagram': return 'from-pink-500 to-purple-500';
      case 'facebook': return 'from-blue-600 to-blue-500';
      case 'twitter': return 'from-blue-400 to-blue-300';
      case 'spotify': return 'from-green-500 to-green-400';
      case 'youtube': return 'from-red-600 to-red-500';
      case 'linkedin': return 'from-blue-700 to-blue-600';
      default: return 'from-gray-500 to-gray-400';
    }
  };

  return (
    <div className={`relative group overflow-hidden rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-md ${isEditing ? 'ring-2 ring-indigo-300 dark:ring-indigo-700' : ''}`}>
      {/* Platform gradient header */}
      <div className={`h-3 bg-gradient-to-r ${getPlatformColor(platform)}`}></div>
      
      <div className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${getPlatformColor(platform)} text-white`}>
            {icon}
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white capitalize">
              {platform}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              @{username}
            </p>
          </div>
        </div>
        
        <div className="mt-4">
          {isEditing ? (
            <div className="flex space-x-2">
              <button
                onClick={onEdit}
                className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50 transition-colors"
              >
                <Edit className="w-3.5 h-3.5" />
                Edit
              </button>
              <button
                onClick={onDelete}
                className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md bg-red-50 text-red-700 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Delete
              </button>
            </div>
          ) : (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2 px-4 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors"
            >
              <span className="flex items-center justify-center gap-1.5">
                Visit Profile
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialCard;