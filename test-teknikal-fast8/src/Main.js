
import React, {useState,useEffect} from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import ReactPaginate from "react-paginate";
import './Main.css'


function Main() {
  const [items, setItems] = useState([])
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 4;
  const data = []
  
  //get data using fetch
  const getData = () =>{
    fetch("https:randomuser.me/api/?results=28")
    .then(res => res.json())
    .then(
      (res) => {
      
      
        console.log(res.results[0].name.first)
        console.log(res.results[1])
      let data = []
        
        for(let i=0; i<=27; i++){
         
        
          data.push(res.results[i])
        }
   
        console.log(data)
        setItems({data:data})
       
      
      },
      
      (error) => {
        console.log(error)
      }
    )
  }
 
  useEffect(() => {
    getData()
    
  }, [])
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(items.length / usersPerPage);

  console.log(pageCount)
  
const changePage = ({ selected }) => {
  setPageNumber(selected);
};
  
  
    


  return (
    <Container>
       <Header>
           <Profile> 
              Hallo, <span style={{marginLeft:"8px", color:"#29e3b8", fontWeight:"600"}}> Gadjian User</span>
        <PictProfile>

        </PictProfile></Profile>
       
       </Header>
       <MainContent>
     
         <MenuBar>
             <MenuTitle>
               <span style={{fontSize:"28px", fontWeight:"700",color:"#29e3b8"}}>PERSONNEL LIST</span>
               <span style={{fontSize:"20px", color:"#7f8185"}}>List of all personnels</span>
             </MenuTitle>
             <MenuFeatures>
                <SearchBar>
                  <SearchIcon sx={{ color: "#29e3b8" }} />
                  <input type="text" placeholder='Find Personnels' />
                </SearchBar>
                <AddBar>
                    <span>ADD PERSONNEL</span>
                    <AddIcon  fontSize="large"/>
                </AddBar>
             </MenuFeatures>
         </MenuBar>
         <PersonnelLists>
         
           <List>
                     <IdPersonnel>
                       <span style={{marginLeft:"12px"}}>Name</span>
                       <span style={{color:"#29e3b8", fontWeight:"600",marginLeft:"4px",marginRight:"46px"}}> 123456</span>
                       <MoreHorizTwoToneIcon/>
                     </IdPersonnel>
                     <ProfilePict>
        
                     </ProfilePict>
                     <Detail>
                     <ProfileDetail>
                       <span style={{color:"black",fontWeight:"600"}}>Name</span>
                       <span>Andreiy Shevchenko Roring</span>
                     </ProfileDetail>
                     <ProfileDetail>
                       <span style={{color:"black",fontWeight:"600"}}>Telephone</span>
                       <span>345435345345</span>
                     </ProfileDetail>
                     <ProfileDetail>
                       <span style={{color:"black",fontWeight:"600"}}>Birthday</span>
                       <span>14 npvember 2000</span>
                     </ProfileDetail>
                     <ProfileDetail>
                       <span style={{color:"black",fontWeight:"600"}}>Email</span>
                       <span>sdfs</span>
                       </ProfileDetail>
                </Detail>
                  
                </List>
        
         
            
             
         </PersonnelLists>
        
     
    
       </MainContent>
       {/* <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      /> */}
    </Container>

  )
}

export default Main;

const Container = styled.div`
flex:85%;
background-color:white;
display:flex;
flex-direction:column;

`
const Header = styled.div`
background-color:#FFFFFF;
display:flex;
justify-content:flex-end;
height:90px;
font-size:18px;
align-items:center;
`
const Profile = styled.div`
display:flex;

`
const PictProfile = styled.div`
background-color:white;
border:1px solid #d3e0de;
height:50px;
width:50px;
margin-right:36px;
margin-left:12px;
border-radius:100%;
margin-top:-12px;

`
const MainContent = styled.div`
background : #d5dce6;
height:100vh;
width:100%;
display:flex;
flex-direction:column;
align-items:center;

`

const MenuBar = styled.div`
  background-color:#FFFFFF;
  width:1100px;
  margin-top:36px;
  height:80px;
  display:flex;
  justify-content:space-between;

`
const MenuTitle = styled.div`
  display:flex;
  flex-direction:column;
  margin-left:18px;
`

const MenuFeatures = styled.div`
  display:flex;
  align-items:center;


`
const SearchBar = styled.div`
  height:45px;
  width:200px;
  border: 1px solid #b4b8bf;
  margin-right:12px;
  display:flex;
  align-items:center;
  padding-left:8px;
  
  input{
    margin-left:4px;
    border:none;
    font-size:14px;
    width:150px;
  }
  input:focus{
    border:none;
    outline:none;
  }
`
const AddBar = styled.div`
  height:45px;
  width:200px;
  border: 1px solid #29e3b8;
  margin-right:24px;
  background:#29e3b8;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#FFFFFF;
`
const PersonnelLists = styled.div`
background:#d5dce6;
width: 1100px;
height:450px;
display:flex;
justify-content:center;

`
const List = styled.div`
height:450px;
width:250px;
background:#FFFFFF;
margin-top:36px;
margin-left:3px;
margin-right:24px;
border-radius:12px;
display:flex;
flex-direction:column;
align-items:center;

`
const IdPersonnel  = styled.div`
margin-top:8px;
color:#7f8185;
font-size:18px;
width:100%;
height:36px;
border-bottom: 1px solid #7f8185;
display:flex;
align-items:center;
`
const ProfilePict = styled.div`
margin-top:16px;
width:150px;
height:150px;
border-radius:100%;
background:#FFFFFF;
border: 1px solid #7f8185;
`
const Detail = styled.div`
  display:flex;
  flex-direction:column;

`
const ProfileDetail = styled.div`  
margin-top:12px;
color:#7f8185;
display:flex;
flex-direction:column;


`