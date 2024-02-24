import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { storage } from '../../config/firebaseConfig';
import {ref, uploadBytes} from 'firebase/storage'
import {v4} from 'uuid';
import './main.css';
import { GifBox, PinDropRounded, PlayArrow } from '@mui/icons-material';

const CreateBlog = () => {

    // state handling
    const [title, setTitle] = useState('');
    const [Summary, setSummary] = useState('');
    const [fileinput, setfileInput] = useState(null);
    const [content, setContent] = useState('');

    // handle the states of the input
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleSummary = (e) => {
        setSummary(e.target.value);
    }

    const handleContent = (e) => {
        setContent(e);
    }

    const FileUplaod = (e) => {
        setfileInput(e.target.files);
    }

    // handling the submit
    const handleSubmit = () => {
        if(fileinput == null) {
            return ;
        }
        else{
            const imageRef = ref(storage, `images/${fileinput + v4()}`);
            uploadBytes(imageRef, fileinput).then(() => {
                console.log("file uploaded successfully");
            }).catch((err) => {
                console.log(err?.message);
            })
        }
    }

    

    // modules information
    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline','strike','blockquote', 'code-block'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script:'sub' }, { script:'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            ["link", "image"]
            [{ direction: 'rtl' }],
            ['clean']
        ]
    }
    const formats =  [
        'header',
        'bold',
        'italic',
        'underline','strike', 'blockquote', 'code-block', 'link', 'image','list', 'bullet', 'indent', 'sub', 'super'];

  return (
    <div className='post-page'>
        <form onSubmit={handleSubmit} className='form-post'>
            <h1 className='text-2xl title'>
                Start Your Blog <PlayArrow />
            </h1>

            <div class="span-el">
                <input type="title" placeholder={'Title'} value={title} onChange={handleTitle} />
                <input type='summmary' placeholder={'Summary'} value={Summary} onChange={handleSummary} />
            </div>

            <input type="file" id='thumbnail' value={fileinput} onChange={FileUplaod} />
            <label for="thumbnail">
                <span className='text-[#03A6A6] text-md'>Choose Your Thumbnail</span>
                <span className='flex justify-evely items-center w-full h-full gap-2 text-[#03A6A6]' style={{
                    fontSize: "10px"
                }}>
                    <GifBox />
                    Drag and Drop Files Here
                </span>
            </label>
            <ReactQuill value={content} onChange={handleContent} modules={modules} formats={formats} className='holder' />
            
            <button type="submit" className='Post-Create'>Create Post</button>
        </form>
    </div>
  )
}

export default CreateBlog