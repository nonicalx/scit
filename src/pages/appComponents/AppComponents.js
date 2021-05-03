import React from 'react';
import logo from '../../assets/images/logo512.png'
import {Button} from '../../components/exporter'
const AppComponents = () => {
    return (
        <div>
            <div className="text-center">
                <Button content="button" type='primary'/>
                <Button content="button" type='secondary'/>
               </div>
        </div>
    )
}

export {AppComponents}
