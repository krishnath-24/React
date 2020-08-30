import React from 'react';

const NavBar = (props) =>  {

        return (
            <div className="navbar" style = {styles.nav}>
                <div style = {styles.cartIconContainer}>
                    
                    <img alt="cart-img" style={styles.cartIcon} src="https://image.flaticon.com/icons/svg/565/565610.svg" />
                    <span style={styles.cartIconCount} >{props.itemCount}</span>
                </div>
            </div>
        )
}

const styles = {
    
    nav : {
        width : 'inherit',
        marginRight : 0,
        height : 80,
        display : 'flex',
        flexDirection : 'row-reverse',
        backgroundColor : 'lightblue',
        padding : '10px'
    },
    cartIcon : {
      height : 60,
      width : 60,
      color : 'green'
    },
    cartIconContainer : {
        marginRight: '20px'
    },
    cartIconCount : {
        height : 20,
        width : 20,
        position : 'absolute',
        right : '16px',
        borderRadius : '50%',
        background : 'yellow',
        textAlign : 'center'
    }
  }



export default NavBar;