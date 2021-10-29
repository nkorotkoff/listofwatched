import React, {useState, useRef, useEffect} from "react";
import PersonIcon from "@material-ui/icons/Person";
import styled from "styled-components";

const ProfileIcon = styled.div`

  display:block;
  border-radius:75%;
`;

const Menu = styled.div`
  position: absolute;
  display:flex;
  flex-direction: column;
  width:300px;
  top:64px;
  button{
    border:none;
    text-align: left;
    padding-top:14px;
  }
`

function Profile() {
    const dropdownMenu = useRef()
    const [showMenu,setShowMenu] = useState(false)


   const showingMenu = ()=>{
        if(showMenu=== false){
            setShowMenu(true)
        }
      else {
            setShowMenu(false)
        }
   }

   useEffect(()=>{
       const checkIfClickedOutside = e =>{
           if(showMenu && dropdownMenu.current && !dropdownMenu.current.contains(e.target)){
               showingMenu()
           }
       }
       document.addEventListener("mousedown", checkIfClickedOutside)
       return ()=>{
           document.removeEventListener("mousedown", checkIfClickedOutside)
       }
   },[showMenu])


  return (
    <div ref={dropdownMenu}>
      <ProfileIcon  onClick={(e)=>showingMenu(e)}>
        <PersonIcon  style={{color:'black'}} fontSize={'large'}/>
      </ProfileIcon>
        {showMenu&& (
        <Menu >
            <button>Item1</button>
            <button>Item2</button>
        </Menu>)}

    </div>
  );
}

export default Profile;
