export interface NavItem {
  label: string;
  href: string;
}
export interface SidebarItem {
  label: string;
  items: NavItem[];
}

export const navigationItems: SidebarItem[] = [
  {
    label: "Sản phẩm",
    items: [
      { label: "Danh mục", href: "/categories" },
      { label: "Sản phẩm", href: "/products" },
    ],
  },
  {
    label: "Giao diện",
    items: [
      { label: "Banner", href: "/banners" },
      { label: "Tiktok", href: "/tiktok" },
    ],
  },
];
