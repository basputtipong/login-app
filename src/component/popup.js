import React from 'react';   
import './style/popup.css'
class Popup extends React.Component {  
  render() {  
return (  
<div className='popup'>  
<div className='popup\_inner'>  
<p>{this.props.text}</p>  
<button class="popupbtn" onClick={this.props.closePopup}>
    Close
    </button>  
</div>  
</div>  
);  
}  
}  

export default Popup;