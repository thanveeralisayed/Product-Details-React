import react, {Component} from 'react';
import classes from './App.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import ProductData from './utils/ ProductData';


class App extends Component {

  state = {
    ProductData : ProductData,
    CurrentPreviewImagePos : 0,
    CurrentSelectedFeature : 0
  }
  
  

  OnColorOptionClick = (pos) => {
    console.log(pos);
    // const updatedPreviewImage = this.state.ProductData.colorOptions[pos].imageUrl
    this.setState({CurrentPreviewImagePos:pos})
  }

  OnFeatureButtonClick = (pos) => {
    this.setState({CurrentSelectedFeature:pos})
  }
  

  render()
  {
    

    return (
      <div className="App">
          
  
              <Topbar/>
  
          
  
  
          <div className={classes.MainContainer}>
  
            <div className={classes.ProductPreview}>
  
              <ProductPreview CurrentPreviewImage={this.state.ProductData.colorOptions[this.state.CurrentPreviewImagePos].imageUrl}  CurrentSelectedFeature={this.state.CurrentSelectedFeature}/>
  
            </div>
  
            <div className={classes.ProductDetails}>
  
              <ProductDetails featurePos={this.state.CurrentSelectedFeature} imagePos={this.state.CurrentPreviewImagePos} OnFeatureButtonClick={this.OnFeatureButtonClick} OnColorOptionClick={this.OnColorOptionClick} data={this.state.ProductData}/>
  
            </div>
                
          </div>
  
  
      </div>
    );
  
  }

  }

export default App;
