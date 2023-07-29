import PageLayout from './components/page-layout';
import Navigation from './components/navigation';
import MainContent from './components/main-content';

function App() {
  return (
    <PageLayout>
      <Navigation />
      <MainContent />
    </PageLayout>
  );
}

export default App;
