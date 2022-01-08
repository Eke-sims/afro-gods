import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';

function App() {
  return <div className='app'>
    <Header />
    <CollectionCard
    id={0}
    name={'afroking'}
    traits={[{'value':7}]}
    image='https://ipfs.thirdweb.com/ipfs/bafybeibt2tj24qikiqiyw5a7lsp26qg4ryi3yyimh2z3d7m52r4ezcrhgi'/>
    </div>
}

export default App;
