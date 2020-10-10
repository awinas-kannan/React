import React, { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';
 
export function SpeechConverter() {
  const [value, setValue] = useState('');
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });
 
  return (
    <div>
      <textarea defaultValue={value}  style={{width:'75%',height:'100px'}} />
      <br></br>
      <button onMouseDown={listen} onMouseUp={stop}>
        🎤
      </button>
      {listening && <div>Go ahead I'm listening</div>}
    </div>
  );
}