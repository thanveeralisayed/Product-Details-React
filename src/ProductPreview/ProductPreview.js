import React from 'react';
import classes from './ProductPreview.module.css';


const ProductPreview = (props) =>
{

    const CurrentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours;
    const CurrentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
    const CurrentSeconds = new Date().getSeconds() > 9 ? new Date().getSeconds() : '0' + new Date().getSeconds();

    const hbeatsec =  <div className={classes.HearBeatSection}>
    <i class="fas fa-heartbeat"></i>
    <p>78</p>
    </div>;

    const timesec =  <div className={classes.TimeSection}>
    <p>{`${CurrentHour}:${CurrentMinute}:${CurrentSeconds}`}</p>
    </div>;

    return(
    
    <div className={classes.ProductPreview}>

    <img src={props.CurrentPreviewImage} alt="pro-prev"/>

    {
        props.ShowHeartBeatSection ? hbeatsec : timesec
    }

        </div>
    )
}

export default ProductPreview