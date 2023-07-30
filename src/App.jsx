import PageLayout from './components/page-layout';
import Navigation from './components/navigation';
import MainPage from './components/main-page';

function App() {
  return (
    <PageLayout>
      <Navigation />
      <MainPage />
    </PageLayout>
  );
}

export default App;
