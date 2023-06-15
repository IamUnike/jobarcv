const ChangeColorBtn = ({bgColor, setBgColor}) => {
    return ( 
        <div data-aos='fade-up' data-aos-duration='500'>
            <div>
                <input id='bgColor' type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} style={{display:'none'}}/>
                <label htmlFor='bgColor'>
                    <div role="button" title="add a background color" className="colorInput">CV background color</div>
                </label>
            </div> 
        </div>

     );
}

const ChangeTextColorBtn = ({textColor, setTextColor}) => {
    return ( 
        <div data-aos='fade-up' data-aos-duration='500'>
            <div>
                <input id='textColor' type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} style={{display:'none'}}/>
                <label htmlFor='textColor'>
                    <div role="button" title="add a text color" className="colorInput">CV text color</div>
                </label>
            </div> 
        </div>
     );
}


export {ChangeColorBtn, ChangeTextColorBtn} ;