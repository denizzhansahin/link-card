import React, { useState } from 'react';
import { Mail, Globe, Phone, MapPin, Building, Edit, Save, PlusCircle, BarChart2, Link as LinkIcon } from 'lucide-react';
import { useToast } from '../context/ToastContext';

const CorporateDashboard: React.FC = () => {
  const { addToast } = useToast();
  const [isEditing, setIsEditing] = useState(false);

  const [corporateDetails, setCorporateDetails] = useState({
    companyName: 'Acme Industries',
    email: 'contact@acme-industries.com',
    website: 'https://acme-industries.com',
    businessWebsite: 'https://business.acme-industries.com',
    officeAddress: '123 Business Park, Suite 456, Enterprise City, EC 12345',
    phone: '+1 (555) 123-4567',
    officePhone: '+1 (555) 987-6543',
    officeEmail: 'office@acme-industries.com',
  });

  const [corporateLinks, setCorporateLinks] = useState([
    { id: 1, title: 'Company LinkedIn', url: 'https://linkedin.com/company/acme-industries' },
    { id: 2, title: 'Corporate Twitter', url: 'https://twitter.com/acme_industries' },
    { id: 3, title: 'Product Catalog', url: 'https://acme-industries.com/products' },
    { id: 4, title: 'Press Kit', url: 'https://acme-industries.com/press' },
    { id: 5, title: 'Careers Page', url: 'https://acme-industries.com/careers' },
  ]);

  const analytics = {
    totalVisits: 12483,
    monthlyGrowth: '+15.3%',
    topPerformer: 'Product Catalog',
    conversionRate: '3.7%',
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      addToast('success', 'Corporate details updated successfully!');
    }
  };

  const handleAddLink = () => {
    addToast('info', 'This feature will allow you to add a new corporate link');
  };

  return (
    <div className="space-y-8 pt-14">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-800 dark:to-cyan-700 rounded-xl shadow-lg p-8 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">{corporateDetails.companyName}</h1>
            <p className="mt-2 opacity-90">Corporate Link Management Dashboard</p>
          </div>
          <button
            onClick={toggleEditMode}
            className={`px-4 py-2 rounded-md border border-white/30 backdrop-blur-sm transition-all ${
              isEditing 
                ? 'bg-white text-blue-600 hover:bg-blue-50' 
                : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            {isEditing ? (
              <span className="flex items-center gap-1.5">
                <Save className="w-4 h-4" />
                Save Changes
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                <Edit className="w-4 h-4" />
                Edit Dashboard
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Company Information */}
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Company Information</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-6 space-y-6">
              {/* Business Email */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">Business Email</h3>
                  <p className="text-gray-600 dark:text-gray-300 break-all">
                    {corporateDetails.email}
                  </p>
                </div>
              </div>

              {/* Office Email */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">Office Email</h3>
                  <p className="text-gray-600 dark:text-gray-300 break-all">
                    {corporateDetails.officeEmail}
                  </p>
                </div>
              </div>

              {/* Business Website */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">Business Website</h3>
                  <a 
                    href={corporateDetails.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline break-all"
                  >
                    {corporateDetails.website}
                  </a>
                </div>
              </div>

              {/* Corporate Website */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">Corporate Website</h3>
                  <a 
                    href={corporateDetails.businessWebsite} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline break-all"
                  >
                    {corporateDetails.businessWebsite}
                  </a>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">Office Address</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {corporateDetails.officeAddress}
                  </p>
                </div>
              </div>

              {/* Business Phone */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">Business Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {corporateDetails.phone}
                  </p>
                </div>
              </div>

              {/* Office Phone */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">Office Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {corporateDetails.officePhone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Links */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Corporate Links</h2>
            {isEditing && (
              <button 
                onClick={handleAddLink}
                className="flex items-center gap-1.5 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
              >
                <PlusCircle className="w-4 h-4" />
                Add Corporate Link
              </button>
            )}
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-4 space-y-3">
              {corporateLinks.map((link) => (
                <a 
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${
                    isEditing ? 'cursor-pointer ring-2 ring-indigo-300 dark:ring-indigo-700' : ''
                  }`}
                  onClick={(e) => isEditing && (e.preventDefault(), addToast('info', `Edit ${link.title}`))}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        <LinkIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {link.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-xs sm:max-w-md md:max-w-lg">
                          {link.url}
                        </p>
                      </div>
                    </div>
                    {isEditing && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToast('info', `Delete ${link.title}`);
                        }}
                        className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-full"
                      >
                        <span className="sr-only">Delete</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Dashboard */}
      <section className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mt-8">
        <div className="flex items-center gap-2 mb-4">
          <BarChart2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Link Performance</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Visits</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{analytics.totalVisits.toLocaleString()}</p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Monthly Growth</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">{analytics.monthlyGrowth}</p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Top Performer</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{analytics.topPerformer}</p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Conversion Rate</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{analytics.conversionRate}</p>
          </div>
        </div>
        
        <div className="mt-8 h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400 text-center">
            Detailed analytics charts will be displayed here, showing traffic sources,<br />
            geographic distribution, and click-through rates over time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CorporateDashboard;