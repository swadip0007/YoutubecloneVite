import { Icon } from "@iconify/react";

interface ISidebarItemsProps {
  title: string;
  icon: string;
}

const SidebarItems = ({ title, icon }: ISidebarItemsProps) => {
  return (
    <li className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-700 cursor-pointer">
      <Icon icon={icon} className="text-2xl text-gray-300" />
      <span className="text-lg text-gray-200">{title}</span>
    </li>
  );
}

export default SidebarItems;