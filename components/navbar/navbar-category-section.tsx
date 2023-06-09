interface NavbarSectionProps {
  section: Record<string, any>;
}

const NavbarSection: React.FC<NavbarSectionProps> = ({
  section,
}) => {
  return ( 
    <div key={section.name}>
      <p className="font-semibold text-gray-900">
        {section.name}
      </p>
      <ul className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
        {section.items.map((item: any) => (
          <li key={item.name} className="flex">
            <a href={item.href} className="hover:text-gray-800">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarSection;
