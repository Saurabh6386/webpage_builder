import { useState, useEffect } from 'react';

import grapesjs from 'grapesjs';

import gjsPresetWebpage from 'grapesjs-preset-webpage';
import gjsBlocksBasic from 'grapesjs-blocks-basic';
import gjsNavbar from 'grapesjs-navbar';
import gjsCountdown from 'grapesjs-component-countdown';
import gjsForms from 'grapesjs-plugin-forms';
import gjsExport from 'grapesjs-plugin-export';
import {signOut} from 'firebase/auth'
import {auth} from './FirebaseConfig'
import {useNavigate} from 'react-router-dom'



function Canvas() {
    const [editor, setEditor] = useState(null)
    const navigate = useNavigate();

    const handleSignOut = ()=>{
      signOut(auth).then(
        navigate('/')
      )
    }

    useEffect(() => {

        const editor = grapesjs.init({
            // Indicate where to init the editor. You can also pass an HTMLElement
            container: '#editor',
            plugins: [gjsPresetWebpage, gjsBlocksBasic, gjsNavbar, gjsCountdown, gjsForms, gjsExport],
            pluginsOpts: {
                gjsPresetWebpage: {},
                gjsBlocksBasic: {},
                gjsNavbar: {},
                gjsCountdown: {},
                gjsForms: {},
                gjsExport: {}
            }
        });

        setEditor(editor)
    }, [])
    return (
        <>
            <div className='relative' id='editor'></div>
            <button className='border px-4 py-1 absolute top-0  mt-1 right-[50%] z-40' onClick={handleSignOut}>Signout</button>
        </>
    )
}


export default Canvas