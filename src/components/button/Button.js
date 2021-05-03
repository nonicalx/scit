import './button.css'



/**
 * 
 * @param {*} content
 * @param {string} className
 * @param {string} type
 * @param {object} style
 * @param {boolean} disabled
 * @param {function} onClick
 * @returns 
 */
const Button = ({content, className="", style, disabled =false, onClick=()=>{}, type='primary'}) => {

    let classes ={
        primary: 'scit-main-btn',
        secondary: 'scit-sec-btn'
    }
    return (
        <button onClick={onClick} className={`${className} ${classes[type]} scit-btn`} disabled={disabled} style={style}>
            {content}
        </button>
    )
}

export {Button}
