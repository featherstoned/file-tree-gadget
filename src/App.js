import React, {useState} from "react";


function App() {
  return <div>
  <Folder name = 'Desktop'>
  <Folder name = 'Projects'>
  <File name = "landing.html"/>
  <File name = "clientproj.html"/> 
  </Folder>
  <File name = "dogs.jpg"/> 
 <File name = "cats.png"/> 
  </Folder>
<Folder name = 'Application'/>
   </div> 
}
const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const { name, children } = props;
  const direction = isOpen ? "down" : "right";
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div>
      <span data-testid="desktop-folder" onClick={handleClick}>
        <i className="blue folder icon"></i>
        <i className={`caret ${direction} icon`}></i>
      </span>
      {name}
      <div style={{ marginLeft: '20px' }}>
        {isOpen ? children : null}
      </div>
    </div>
  );
};


const File = (props) => {
  const {name} = props;
  const fileExtension = name.split('.')[1]; 
  const fileIcons = {
    html: 'html5',
    jpg: 'file image',
    png: 'file image outline',
  };

  return (
    <div>
      <i className = {`${fileIcons[fileExtension]} icon`}></i>
      {name}
    </div>
  );
};
  

  
  
export default App;





