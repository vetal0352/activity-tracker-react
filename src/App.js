import './App.css';

function App() {
  return (
    <div className="App">
      <div className="activity-tracker">Activity tracker</div>
      <div className="add-activity">Add new activity:</div>
      <div className="activity-info">
        <div className="activity-list">
          <div className="activity-item">Activity item 1</div>
          <div className="activity-item">Activity item 2</div>
          <div className="activity-item">Activity item 3</div>
          <div className="activity-item">Activity item 4</div>
          <div className="activity-item">Activity item 5</div>
        </div>
        <div className="activity-summary">
          <div className="longest-block">Longest block</div>
          <div className="total-block">Total block</div>
        </div>
      </div>

    </div>
  );
}

export default App;
