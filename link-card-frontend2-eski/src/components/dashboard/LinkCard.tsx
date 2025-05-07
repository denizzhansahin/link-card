import React from 'react';
import { ExternalLink, Edit, Trash2 } from 'lucide-react';

interface LinkCardProps {
  title: string;
  url: string;
  icon: React.ReactNode;
  isEditing: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

const LinkCard: React.FC<LinkCardProps> = ({
  title,
  url,
  icon,
  isEditing,
  onEdit,
  onDelete
}) => {
  return (
    <div className={`group relative bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-all duration-200 hover:shadow-md ${isEditing ? 'ring-2 ring-indigo-300 dark:ring-indigo-700' : ''}`}>
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
          {icon}
        </div>
        
        <div className="flex-grow min-w-0">
          <h3 className="font-medium text-gray-900 dark:text-white truncate">
            {title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
            {url}
          </p>
        </div>
        
        {isEditing ? (
          <div className="flex items-center gap-2">
            <button
              onClick={onEdit}
              className="p-1.5 rounded-md text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-indigo-900/30 transition-colors"
              aria-label="Edit link"
            >
              <Edit className="w-4 h-4" />
            </button>
            <button
              onClick={onDelete}
              className="p-1.5 rounded-md text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/30 transition-colors"
              aria-label="Delete link"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Open link"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default LinkCard;