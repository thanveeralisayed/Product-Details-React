import React from 'react';
import classes from './ProductDetails.module.css';



const ProductDetails = (props) => {

    // console.log(props.OnColorOptionClick);

    const ColorOptions = props.data.colorOptions.map((item,pos)=>{
        const classArr = [classes.ProductImage]
        console.log(pos)
        console.log(props.imagePos)
        if(pos === props.imagePos) {
            classArr.push(classes.SelectedProductImage)
        }
        return (<img key={pos} className={classArr.join(' ')} 
        onClick={()=>{props.OnColorOptionClick(pos)}} src={item.imageUrl} alt={item.styleName} />)
    })

    const FeatureList = props.data.featureList.map((item,pos)=>{

        const classArr = [classes.FeatureItem]
        if(pos === props.featurePos)
        {
            classArr.push(classes.SelectedFeatureItem)
        }

        return (<button key={pos} onClick={()=>{props.OnFeatureButtonClick(pos)}} className={classArr.join(' ')}>{item}</button>)
    })

    return (

        <div className={classes.ProductDetails}>
              <h1 className={classes.ProductTitle}>{props.data.title}</h1>
              <p className={classes.ProductDescription}>
                    {props.data.description} <br />
                    {props.data.description}
              </p>
          
          <h3 className={classes.SectionHeading}>Select Color</h3>

          <div>
              {ColorOptions}
          </div>


          <h3 className={classes.SectionHeading}>Features</h3>

          <div>
            {FeatureList}
          </div>

          <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
    )
}

export default ProductDetails