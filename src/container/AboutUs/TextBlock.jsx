import React from 'react'
import {images} from '../../constants';

export const TextBlock = ({clas, h1}) => {
  return (
    <div className={`app__aboutus-content_${clas}`}>
        <h1 className="headtext__cormorant">{h1}</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button type="button" className="custom__button">Know More</button>
    </div>
  )
}
