import SidebarItems from "./Sidebaritems";

const sidebarItems = [
  { id: 1, title: 'Home', icon: 'tabler:brand-google-home' },
  { id: 2, title: 'Explore', icon: 'tabler:compass' },
  { id: 3, title: 'Subscriptions', icon: 'tabler:subscript' },
  { id: 4, title: 'Library', icon: 'tabler:archive' },
  { id: 5, title: 'History', icon: 'tabler:clock' },
  { id: 6, title: 'Your Videos', icon: 'tabler:video' },
  { id: 7, title: 'Watch Later', icon: 'tabler:clock-hour-12' },
  { id: 8, title: 'Liked Videos', icon: 'tabler:thumb-up' },
  { id: 9, title: 'Settings', icon: 'tabler:settings' },
  { id: 10, title: 'Help', icon: 'tabler:help' },
];

const Sidebar = () => {
  return (
    <div className="sidebar bg-gray-900 text-white w-72 h-screen flex p-5">

      {/* <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-red-600">YouTube</h1>
      </div> */}

      <ul className="space-y-4">
        {sidebarItems.map((item) => (
          <SidebarItems key={item.id} title={item.title} icon={item.icon} />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
