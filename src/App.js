import './App.css';
import Header from "./components/header"
import NewActivityForm from './components/newActivityForm';
import ActivityListBlock from './components/activityListBlock';
import SummaryBlock from './components/summaryBlock';

function App() {
  return (
    <div className="App">
      <Header />
      <NewActivityForm />
      <div className="activity-info">
        <ActivityListBlock />
        <SummaryBlock />
      </div>
    </div>
  );
}

export default App;
