export default {
  pages: {
    key: "title",
    data: [
      {title: 'Home',   url: '/dashboard',      icon: 'HomeIcon', is_bookmarked: false},
      {title: 'Employee', url: '/dashboard/employee', icon: 'UserIcon', is_bookmarked: false},
      {title: 'Package', url: '/dashboard/package', icon: 'PackageIcon', is_bookmarked: false},
      {title: 'Clients', url: '/dashboard/client', icon: 'UsersIcon', is_bookmarked: false},
      {title: 'Roles & Permissions', url: '/dashboard/settings/role', icon: 'FileIcon', is_bookmarked: false},
    ]
  }
}
