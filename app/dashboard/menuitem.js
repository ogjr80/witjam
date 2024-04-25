export const menuItems = [
    { 
      id: 1, 
      label: 'Home', 
      link: '/', 
      submenu: [
        { id: 11, label: 'News Feed', link: '/news-feed', submenu: [] },
        { id: 12, label: 'Memories', link: '/memories', submenu: [] },
        { id: 13, label: 'Team Budget', link: '/team-budget', submenu: [] },
        { id: 14, label: 'Unit Budget', link: '/unit-budget', submenu: [] },
        { id: 15, label: 'Pending Approval', link: '/pending-approval', submenu: [] },
        { id: 16, label: 'Announce', link: '/announce', submenu: [] },
        { id: 17, label: 'Idea', link: '/idea', submenu: [] },
        { id: 18, label: 'Poll', link: '/poll', submenu: [] },
        { id: 19, label: 'Quiz', link: '/quiz', submenu: [] },
        { id: 110, label: 'Survey', link: '/survey', submenu: [] },
        { id: 111, label: 'Wall of Fame', link: '/wall-of-fame', submenu: [] },
        { id: 112, label: 'Reports', link: '/reports', submenu: [] },
        { id: 113, label: 'Reward Certificate', link: '/reward-certificate', submenu: [] },
        { id: 114, label: 'FAQs', link: '/faqs', submenu: [] }
      ] 
    },
    {
      id: 2,
      label: 'Admin',
      link: '/admin',
      submenu: [
        { id: 21, label: 'Getting Started', link: '/admin/getting-started', submenu: [] },
        { id: 22, label: 'Documentation', link: '/admin/documentation', submenu: [] },
        { id: 23, label: 'Campaigns', link: '/admin/campaigns', submenu: [] },
        { id: 24, label: 'Translation', link: '/admin/translation', submenu: [] },
        { id: 25, label: 'Integrations', link: '/admin/integrations', submenu: [] },
        { id: 26, label: 'Platform Setup', link: '/admin/platform-setup', submenu: [] },
        { id: 27, label: 'Pre-fund', link: '/admin/pre-fund', submenu: [] },
        { id: 28, label: 'Users & Roles', link: '/admin/users-roles', submenu: [] },
        { id: 29, label: 'Report Content', link: '/admin/report-content', submenu: [] }
      ]
    },
    {
      id: 3,
      label: 'Profile',
      link: '/profile',
      submenu: [
        { id: 31, label: 'Edit Profile', link: '/profile/edit', submenu: [] },
        { id: 32, label: 'Social Media Accounts', link: '/profile/social-media', submenu: [] },
        { id: 33, label: 'Change Password', link: '/profile/change-password', submenu: [] },
        { id: 34, label: 'Notifications Preferences', link: '/profile/notifications', submenu: [] },
        { id: 35, label: 'Change Language', link: '/profile/language', submenu: [] },
        { id: 36, label: 'My Activity', link: '/profile/activity', submenu: [] },
        { id: 37, label: 'My Points', link: '/profile/points', submenu: [] },
        { id: 38, label: 'Sign Out', link: '/sign-out', submenu: [] }
      ]
    },
    { id: 4, label: 'Contact', link: '/contact', submenu: [] }
  ];
  
  export default menuItems;
  