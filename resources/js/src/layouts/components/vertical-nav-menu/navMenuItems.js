
export default [
  {
    url: "/dashboard",
    name: "Home",
    slug: "home",
    icon: "HomeIcon",
  },
    {
        url: "/dashboard/employee",
        name: "Employee",
        slug: "employee",
        icon: "UserIcon",
        i18n: "Employee",
        permission: 'browse-employee'
    },
    {
        url: "/dashboard/agency",
        name: "Agency",
        slug: "Agency",
        icon: "ServerIcon",
        i18n: "Agency",
        permission: 'browse-booking'
    },
    {
        url: "/dashboard/package",
        name: "Package",
        slug: "package",
        icon: "PackageIcon",
        i18n: "Package",
        permission: 'browse-package'
    },
    {
        url: "/dashboard/client",
        name: "Clients",
        slug: "client",
        icon: "UsersIcon",
        i18n: "Employee",
        permission: 'browse-booking'
    },
    // {
    //     url: "/dashboard/blog",
    //     name: "Blog",
    //     slug: "blog",
    //     icon: "BookIcon",
    //     i18n: "Blog"
    // },
    // {
    //     url: "/dashboard/insurance",
    //     name: "Insurance",
    //     slug: "insurance",
    //     icon: "ClipboardIcon",
    //     i18n: "insurance",
    //     permission: 'browse-insurance'
    // },
    {
        url: "/dashboard/contact-us",
        name: "Contact Us",
        slug: "contactUs",
        icon: "ClipboardIcon",
        i18n: "contactUs",
        permission: 'browse-contact-us'
    },
    {
        name: "Settings",
        icon: "SettingsIcon",
        i18n: "Settings",
        submenu: [
            {
                url: '/dashboard/settings/role',
                name: "Roles & Permissions",
                slug: "role",
                i18n: "Roles",
                permission: "browse-role"
            }
        ]
    },
]
