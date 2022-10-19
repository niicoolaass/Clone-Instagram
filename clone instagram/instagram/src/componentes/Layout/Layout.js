import './Layout.css';
import Storys from '../Storys/Storys';
import Post from '../Post/Post';
import Sugestao from '../Sugestao/Sugestao';

function Layout() {
  return (
    <div className="MainGrid">
        
      <div className="frist-column" style={{gridArea: "firstColumn"}}>

        <div className="box" style={{margin: "15px 0"}}>
          <Storys />

        </div>
        
        <div className="box" style={{margin: "15px 0"}}>
          <Post />
          
        </div>
      </div>

      <div className="suggestionBox" style={{gridArea: "secondColumn", margin: "15px 0"}}>
          <Sugestao />

      </div>
    </div>
  );
}

export default Layout;
