import react, {Component} from 'react';
import classes from './App.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import ProductData from './utils/ ProductData';


class App extends Component {

  state = {
    ProductData : ProductData,
    CurrentPreviewImage : 'https://imgur.com/iOeUBV7.png',
    ShowHearBeatSection : false
  }
  

  render()
  {
    return (
      <div className="App">
          
  
              <Topbar/>
  
          
  
  
          <div className={classes.MainContainer}>
  
            <div className={classes.ProductPreview}>
  
              <ProductPreview CurrentPreviewImage={this.state.CurrentPreviewImage} ShowHeartBeatSection={this.state.ShowHearBeatSection}/>
  
            </div>
  
            <div className={classes.ProductDetails}>
  
              <ProductDetails data={this.state.ProductData}/>
  
            </div>
                
          </div>
  
  
      </div>
    );
  
  }

  }

export default App;
