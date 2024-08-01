import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const MyEditor: React.FC = () => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  return (
    <div className='min-h-[400px] w-full border outline-none border-[#173e1f] bg-transparent rounded-md hover:border-[#7ED957]'>
      <ReactQuill value={value} onChange={setValue} modules={modules} />
    </div>
  );
};

export default MyEditor;
