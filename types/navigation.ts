export type NavigationItem = {
  label: string;
  href: string;

  /**
   * Homepage section IDs associated with this navigation item.
   * Multiple sections can keep the same item active.
   */
  sectionIds?: string[];

  /**
   * Routes that should activate this navigation item.
   * For example, "/portfolio" also matches portfolio detail pages.
   */
  routePrefixes?: string[];

  showInFooter?: boolean;
};
