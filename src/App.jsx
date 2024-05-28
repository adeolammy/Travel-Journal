
import NavBar from '../src/Component/NavBar';
import Hero from '../src/Component/Hero';
import Card from '../src/Component/Card';
import './App.css';
import doc from '../src/doc';
import data_content from '../src/data';

function App() {
  console.log(data_content);

  const documentContent = doc.map(doc_Item => (
    <Hero
      key={doc_Item.id}
      {...doc_Item}
    />
  ));

  const data = data_content.map(item => (
    <Card
      key={item.id}
      {...item}
    />
  ));

  return (
    <div>
      <NavBar />
      <div className="hero_wrapper">
        {documentContent}
      </div>
      <div className="card_wrapper">
        {data}
      </div>
    </div>
  );
}

export default App;
