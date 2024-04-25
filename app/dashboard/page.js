import SideNavigation from '../../components/SideNavigation'
import menuItems from './menuitem'

export default function Home() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <SideNavigation menuItems={menuItems} />
      <main style={{ flex: 1, padding: '20px' }}>
        <h1>Welcome to Our Website</h1>
        {/* Additional content goes here */}
      </main>
    </div>
  );
};