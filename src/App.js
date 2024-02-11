import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import your CSS file if needed
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    gameName: '',
    creatorName: '',
    mapPromt:'',
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    gameType: '',
    
    brandText: '',
  });

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleFormDataChange = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  const handleSubmit = () => {
    // Perform any final processing or validation here
    console.log('Final form data:', formData);
    let gamedata = {
      "gameName": formData.gameName,
      "creatorName": formData.creatorName,
      "mapPromt":formData.mapPromt,
      "gameconfig": {
        "checkbox1": formData.checkbox1,
        "checkbox2": formData.checkbox1,
        "checkbox3": formData.checkbox1,
        "gameType": formData.gameType
      },
      "imageUrl": formData.imageUrl,
      "brandText": formData.brandText
    }
    console.log('game  data:', gamedata);
    axios.post('https://5wlyh93sil.execute-api.eu-west-2.amazonaws.com/vcDemo/game_config', gamedata)
      .then(response => {
        console.log('Response:', response.data);
        alert("Game Created Sucessfully!.")
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };


  return (
    <div className="App">
      {currentPage === 1 && (
        <Page1
          onNext={nextPage}
          data={formData}
          setData={setFormData}
        />
      )}
      {currentPage === 2 && (
        <Page2
          onPrev={prevPage}
          onNext={nextPage}
          data={formData}
          setData={setFormData}
        />
      )}
      {currentPage === 3 && (
        <Page3
          onPrev={prevPage}
          data={formData}
          setData={setFormData}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default App;
